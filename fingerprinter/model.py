import pickle
from sklearn.utils import shuffle
from PIL import Image
import os
import numpy as np
from tensorflow.keras.callbacks import TensorBoard, ModelCheckpoint, EarlyStopping
from tensorflow.keras.layers import Input, Dense, Conv2D, Conv2DTranspose, \
    MaxPooling2D, BatchNormalization, Flatten, Reshape, Activation, Dropout
from tensorflow.keras import backend as K
from tensorflow.keras.models import Model, load_model
import tensorflow as tf
import matplotlib.pyplot as plt
from tensorflow.keras.utils import plot_model
from tensorflow import keras


class AutoEncoderProgress(keras.callbacks.Callback):
    def __init__(self, model, n_epoch=1):
        super().__init__()
        self.speculo = model
        self.n_epoch = n_epoch

    def on_epoch_end(self, epoch, logs=None):
        if epoch % self.n_epoch == 0:
            self.speculo.evaluate(f'Model Predictions on epoch {epoch}',
                                  f'models/{self.speculo.model_number}/img/predictions-epoch-{epoch}.png')


class Speculo:
    def __init__(self, image_size=(64, 64, 1), model_path=None, visualize=True, batch_size=32):
        self.optimizer = 'adam'
        self.loss_function = 'mse'
        self.LR = 1e-3

        self.filters = (128, 64, 32)
        self.latent_size = 256

        self.image_size = image_size
        self.model_path = model_path
        self.visualize = visualize
        self.dataset_size = 0
        self.batch_size = batch_size
        self.batches_per_step = 1

        self.batch_size = batch_size

        model_number = 1
        if os.path.isdir("models"):
            model_number += len(os.listdir("models"))

        self.model_number = f"{model_number}"

        self.model = None

    def _build_model(self):
        input_img = Input(shape=self.image_size, name="input")
        x = input_img

        for f in self.filters:
            x = Conv2D(f, (3, 3), activation='relu', padding='same')(x)
            x = MaxPooling2D((2, 2))(x)
            x = Dropout(0.1)(x)

        size = K.int_shape(x)
        x = Flatten()(x)
        x = Dropout(0.2)(x)
        x = Dense(self.latent_size, name="latent_space")(x)

        x = Dense(np.prod(size[1:]))(x)
        x = Reshape((size[1], size[2], size[3]))(x)

        for f in self.filters[::-1]:
            x = Conv2DTranspose(f, (3, 3), strides=2, activation='relu', padding='same')(x)
            x = BatchNormalization()(x)
            x = Dropout(0.1)(x)

        x = Conv2DTranspose(self.image_size[2], (3, 3), activation='relu', padding='same')(x)
        output = Activation("sigmoid", name="output")(x)

        return Model(inputs=input_img, outputs=output, name=f"Speculo-v{self.model_number}")

    def autoencoder(self):
        autoencoder = self._build_model()
        autoencoder.compile(optimizer=self.optimizer, loss=self.loss_function)
        return autoencoder

    def display_image_array(self, n, *image_sets, figsize=(8, 4), title=None, labels=None, save_dir=None):
        plt.figure(figsize=figsize)
        if title:
            plt.suptitle(title)
        i = 1
        row = 0
        if labels and len(labels) != len(image_sets):
            labels = None
        for image_set in image_sets:
            for x in range(n):
                ax = plt.subplot(len(image_sets), n, i)
                if x == 0 and labels:
                    ax.set_title(labels[row])
                if self.image_size[2] == 1:
                    plt.imshow(image_set[x].reshape(self.image_size[:2]))
                    plt.gray()
                else:
                    plt.imshow(image_set[x].reshape(self.image_size))
                ax.get_xaxis().set_visible(False)
                ax.get_yaxis().set_visible(False)
                i += 1
            row += 1
        if save_dir:
            plt.savefig(save_dir)
        plt.show()

    def read_image(self, file):
        im = Image.open(file)
        im = im.resize(self.image_size[:2], Image.ANTIALIAS)
        if self.image_size[2] == 1:
            im = im.convert('L')
        return np.array(im)

    def _load_image_set(self, directory, noise_factors=None):
        x, y = [], []
        fronts = sorted(os.listdir(f"dataset/{directory}/Front/"))
        for i, person_dir in enumerate(sorted(os.listdir(f"dataset/{directory}"))):
            if person_dir == "Front":
                continue
            else:
                y_image = self.read_image(f"dataset/{directory}/Front/{fronts[i - 1]}")
                for image in os.listdir(f"dataset/{directory}/{person_dir}"):
                    x_image = self.read_image(f"dataset/{directory}/{person_dir}/{image}")
                    x.append(np.array(x_image))
                    y.append(np.array(y_image))

        x = np.array(x).astype("float32") / 255.0
        y = np.array(y).astype("float32") / 255.0
        x = x.reshape([-1, self.image_size[0], self.image_size[1], self.image_size[2]])
        y = y.reshape([-1, self.image_size[0], self.image_size[1], self.image_size[2]])

        if noise_factors:
            noisy_x, noisy_y = [], []
            for noise_factor in noise_factors:
                noisy_x.append(x + (noise_factor / 10) * np.random.normal(loc=0.0, scale=1.0, size=x.shape))
                noisy_y.append(y)

            noisy_x = np.reshape(noisy_x, [-1, self.image_size[0], self.image_size[1], self.image_size[2]])
            noisy_y = np.reshape(noisy_y, [-1, self.image_size[0], self.image_size[1], self.image_size[2]])

            return shuffle(np.clip(noisy_x, 0., 1.), noisy_y)

        return shuffle(x, y)

    def _image_set_generator(self):
        if not os.path.isfile("dataset/youtube_data_map.pkl"):
            raise FileNotFoundError("dataset/youtube_data_map.pkl was not found")
        file = open('dataset/youtube_data_map.pkl', 'rb')
        data = pickle.load(file)
        self.dataset_size = len(data)
        for x, y in data:
            x = self.read_image(x).astype("float32") / 255.0
            y = self.read_image(y).astype("float32") / 255.0
            x = x.reshape([self.image_size[0], self.image_size[1], self.image_size[2]])
            y = y.reshape([self.image_size[0], self.image_size[1], self.image_size[2]])
            yield x, y

    def _create_dataset(self):
        output_shape = tf.TensorShape([self.image_size[0], self.image_size[1], self.image_size[2]])
        data_set = tf.data.Dataset.from_generator(self._image_set_generator,
                                                  (tf.float32, tf.float32),
                                                  (output_shape, output_shape))
        samples_x = []
        samples_y = []
        for sample in data_set.take(10):
            x = np.array(sample[0])
            y = np.array(sample[1])
            samples_x.append(np.reshape((x * 255).astype("uint8"), self.image_size))
            samples_y.append(np.reshape((y * 255).astype("uint8"), self.image_size))
        data_set = data_set.batch((self.batches_per_step * self.batch_size))
        x_test, y_test = self._load_image_set("test")
        if self.visualize:
            self.display_image_array(10, samples_x, samples_y, x_test, y_test,
                                     title=f"Dataset ({self.dataset_size})",
                                     labels=["x_train", "y_train", "x_test", "y_test"],
                                     save_dir=f'models/{self.model_number}/img/dataset.png')
        return data_set, x_test, y_test

    def train(self):
        if os.path.exists(f"models/{self.model_number}"):
            raise FileExistsError(f"models/{self.model_number} already existing")
        os.makedirs(f"models/{self.model_number}/img")


        data_set, x_test, y_test = self._create_dataset()
        self.model = self.autoencoder()

        plot_model(self.model, to_file=f'models/{self.model_number}/img/model.png')

        with open(f"models/{self.model_number}/README.md", "w") as f:
            f.write(f"# Model v{self.model_number}\n")
            f.write(f"Optimizer - {self.optimizer} (LR - {self.LR}) <br>\n")
            f.write(f"Loss Function - {self.loss_function} <br>\n")
            f.write(f"Input Shape - {self.image_size} <br>\n")
            f.write(f"Filters - {self.filters} <br>\n")
            f.write(f"Latent Size - {self.latent_size} <br>\n\n")
            if self.visualize:
                f.write("### Dataset Sample\n")
                f.write("![DataSet](img/dataset.png)\n\n")
            f.write(f"## Model Summary\n```shell script\n")
            self.model.summary(print_fn=lambda x: f.write(x + '\n'))
            f.write("```\n")
            f.write("![Model](img/model.png)\n\n")
            f.write(f"## Training Log\n```shell script\n\n```\n\n")

        checkpoint = ModelCheckpoint(f"models/{self.model_number}/Model-v{self.model_number}.h5", monitor='loss',
                                     verbose=1, save_best_only=True, mode='min')

        tensorboard = TensorBoard(log_dir=f'logs/Model-v{self.model_number}', histogram_freq=0, write_graph=False)
        early_stopping = EarlyStopping(monitor='loss', min_delta=0, patience=4, verbose=1, mode='auto')
        auto_encoder_progress = AutoEncoderProgress(self)
        history = None
        try:
            history = self.model.fit_generator(data_set,
                                               epochs=self.dataset_size // (self.batches_per_step * self.batch_size),
                                               steps_per_epoch=(self.batches_per_step * self.batch_size),
                                               validation_data=(x_test, y_test),
                                               validation_steps=self.batch_size,
                                               use_multiprocessing=True,
                                               callbacks=[checkpoint, tensorboard, auto_encoder_progress, early_stopping])
            self.model.save(f"models/{self.model_number}/Model-v{self.model_number}-Final.h5")
        except KeyboardInterrupt:
            pass

        finally:
            if history:
                plt.plot(history.history['loss'])
                plt.plot(history.history['val_loss'])
                plt.title('Model loss')
                plt.ylabel('Loss')
                plt.xlabel('Epoch')
                plt.legend(['Train', 'Test'], loc='upper left')
                plt.savefig(f'models/{self.model_number}/img/loss.png')
                plt.show()

            with open(f"models/{self.model_number}/README.md", "a") as f:
                if history:
                    f.write("### Model loss\n")
                    f.write("![loss](img/loss.png)\n\n")
                f.write("## Predictions \n")
                f.write("![loss](img/predictions.png)\n\n")
                f.write("## Notes\n")

            self.evaluate(file=f'models/{self.model_number}/img/predictions.png')

    def _load_model(self):
        self.model = load_model(self.model_path)
        return self.model

    def _get_latent_space(self):
        autoencoder = self._load_model()
        encoder = Model(inputs=autoencoder.input,
                        outputs=autoencoder.get_layer("latent_space").output)
        self.model = encoder

    def evaluate(self, title="Model Predictions", file=None):
        if self.model is None:
            self._load_model()
        gen_image = []
        org_image = []
        for image in os.listdir("dataset/evaluate"):
            image = self.read_image(os.path.join("dataset/evaluate", image))
            org_image.append(image)
            gen_image.append(self.predict(image, preview=True))

        self.display_image_array(len(gen_image), org_image, gen_image,
                                 title=title, figsize=(8, 2), save_dir=file)

    def predict(self, image, preview=False):
        if self.model is None:
            self._load_model()
        output = self.model.predict(np.reshape(image, [1, self.image_size[0], self.image_size[1], self.image_size[2]]))
        if preview:
            output = (output * 255).astype("uint8")
            return np.reshape(output, self.image_size)
        return output.reshape([-1])


def test_nn(nn):
    img = nn.read_image("dataset/cropped/Front/personne01146+0+0.jpg")
    pred = nn.predict(img, preview=True)
    if nn.image_size[2] == 1:
        out = Image.fromarray(pred[:, :, 0], 'L')
    else:
        out = Image.fromarray(pred)
    out.show()


if __name__ == "__main__":
    speculo = Speculo()
    # print(speculo.autoencoder().summary())
    speculo.train()
