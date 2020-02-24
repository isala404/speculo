from PIL import Image
import os
import numpy as np
from tensorflow.keras.callbacks import TensorBoard, ModelCheckpoint, EarlyStopping
from tensorflow.keras.layers import Input, Dense, Conv2D, Conv2DTranspose, \
    LeakyReLU, BatchNormalization, Flatten, Reshape, Activation
from tensorflow.keras import backend as K
from tensorflow.keras.models import Model, load_model
from tensorflow.keras.optimizers import Adam


class Speculo:
    def __init__(self):
        self.image_size = (64, 64, 3)
        self.optimizer = 'adam'
        self.loss_function = 'mae'
        self.input_img = Input(shape=(self.image_size[0], self.image_size[1], 3))
        self.filters = (128, 256)
        self.latent_size = 128

        model_number = 1
        if os.path.isdir("logs"):
            model_number = len(os.listdir("logs/")) + 1
        self.name = f"v{model_number}-{self.optimizer}-{self.loss_function}"

        self.model = None

    def _build_model(self):
        chan_dim = -1

        x = self.input_img

        for f in self.filters:
            x = Conv2D(f, (3, 3), strides=(2, 2), padding="same")(x)
            x = LeakyReLU(alpha=0.2)(x)
            x = BatchNormalization(axis=chan_dim)(x)

        volume_size = K.int_shape(x)
        x = Flatten()(x)
        latent = Dense(self.latent_size)(x)

        encoder = Model(self.input_img, latent, name="encoder")

        latent_inputs = Input(shape=(self.latent_size,))
        x = Dense(np.prod(volume_size[1:]))(latent_inputs)
        x = Reshape((volume_size[1], volume_size[2], volume_size[3]))(x)

        for f in self.filters[::-1]:
            x = Conv2DTranspose(f, (3, 3), strides=(2, 2), padding="same")(x)
            x = LeakyReLU(alpha=0.2)(x)
            x = BatchNormalization(axis=chan_dim)(x)

        x = Conv2DTranspose(self.image_size[2], (3, 3), padding="same")(x)
        outputs = Activation("sigmoid")(x)

        decoder = Model(latent_inputs, outputs, name="decoder")

        self.model = Model(self.input_img, decoder(encoder(self.input_img)), name="autoencoder")

        return encoder, decoder, self.model

    def autoencoder(self):
        _, _, autoencoder = self._build_model()

        autoencoder.compile(optimizer=Adam(lr=1e-3), loss=self.loss_function,
                            metrics=['accuracy', 'mae'])
        return autoencoder

    def _load_image_set(self, directory):
        x = []
        y = []
        fronts = sorted(os.listdir(f"dataset/processed/{directory}/Front/"))
        for i, person_dir in enumerate(sorted(os.listdir(f"dataset/processed/{directory}"))):
            if person_dir == "Front":
                continue
            else:
                y_image = Image.open(f"dataset/processed/{directory}/Front/{fronts[i - 1]}").resize(self.image_size[:2],
                                                                                                    Image.ANTIALIAS)
                for image in os.listdir(f"dataset/processed/{directory}/{person_dir}"):
                    x.append(np.array(
                        Image.open(f"dataset/processed/{directory}/{person_dir}/{image}").resize(self.image_size[:2],
                                                                                                 Image.ANTIALIAS)))
                    y.append(np.array(y_image))
        # x = np.expand_dims(x, axis=-1)
        x = np.reshape(x, [-1, self.image_size[0], self.image_size[1], 3])
        x = x.astype("float32") / 255.0
        y = np.expand_dims(y, axis=-1)
        # y = np.reshape(y, [-1, self.image_size[0], self.image_size[1], 3])
        y = y.astype("float32") / 255.0
        return x, y

    def _create_dataset(self):
        x_train, y_train = self._load_image_set("train")
        x_test, y_test = self._load_image_set("test")
        return x_train, y_train, x_test, y_test

    def _load_model(self):
        self.model = load_model("models/v5-adam-mae.h5")
        return self.model

    def predict(self, image):
        autoencoder = self._load_model()
        output = autoencoder.predict(np.reshape(image, [1, self.image_size[0], self.image_size[1], self.image_size[2]]))
        output = (output * 255).astype("uint8")
        return np.reshape(output, self.image_size)

    def train(self):
        x_train, y_train, x_test, y_test = self._create_dataset()
        model = self.autoencoder()

        checkpoint = ModelCheckpoint(f"models/{self.name}.h5", monitor='loss', verbose=1, save_best_only=True,
                                     mode='min')
        tensorboard = TensorBoard(log_dir=f'logs/{self.name}', histogram_freq=0, write_graph=False)
        early_stopping = EarlyStopping(monitor='val_loss', min_delta=0, patience=5, verbose=1, mode='auto')

        model.fit(x_train, y_train,
                  epochs=100,
                  batch_size=64,
                  shuffle=True,
                  validation_data=(x_test, y_test),
                  callbacks=[checkpoint, tensorboard, early_stopping])

        model.save(f"models/{self.name}.h5")


speculo = Speculo()
# print(speculo.autoencoder().summary())
# speculo.train()
Image.open("dataset/processed/test/Front/personne03146+0+0.jpg").show()
im = Image.open("dataset/processed/test/Person03/person03262+15+45.jpg").resize(speculo.image_size[:2], Image.ANTIALIAS)
im.show()
im = Image.fromarray(speculo.predict(im))
im.show()
