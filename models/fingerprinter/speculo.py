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
    """Custom Callback to check on the model's progress

    Model training process can be very long and we can't be sure if the
    model is heading on the correct path till it's done training but keras
    support model checkpoint hooks which get called various occasions so
    this is custom callback hook that's executed after every batch.

    This does 2 things
        1) It evaluate model with evaluation dataset and display the results to STDOUT
        2) Check if .stop_training file exits so it will stop training gracefully
    """
    def __init__(self, model, n_epoch=1):
        """
        Class constructor
        @param model: current instance of the Speculo class
        @param n_epoch: on which nth epoch should the evaluation should happen
        """
        super().__init__()
        self.speculo = model
        self.n_epoch = n_epoch

    def on_epoch_end(self, epoch, logs=None):
        """ This is called by Kears callback hooks at the end of an epoch.

        @param epoch: current epoch
        @param logs: dict, metric results for this training epoch, and for the
          validation epoch if validation is performed. Validation result keys
          are prefixed with `val_`.
        """
        if epoch % self.n_epoch == 0:
            self.speculo.evaluate(f'Model Predictions on epoch {epoch}',
                                  f'models/{self.speculo.model_number}/img/predictions-epoch-{epoch}.png')
        if os.path.isfile(".stop_training"):
            print("Stopping training because .stop_training was found")
            self.model.stop_training = True


class Speculo:
    """Base class for fingerprinter model

    This class handle preprocessing, training, testing, evaluation and prediction
    of fingerprinter model and also can load a model model from given model path
    and visualize model training processes
    """
    def __init__(self, image_size=(128, 128, 1), model_path=None, visualize=True, batch_size=64):
        """
        Class constructor
        @param image_size: Model's Input Size
        @param model_path: Path to saved model (.h5 or .pb file)
        @param visualize: Whether to visualize the training processes
        @param batch_size: Image batch that is taken at once during training
        """
        # optimizer is the algorithm used to update weights of neural network to minimize the loss function
        # adam stands for adaptive moment estimation and it is kinda of a defecto for CNN
        self.optimizer = 'adam'

        # In order to the model to converge optimizer has to reduce a loss value. this loss value should
        # represent how good or bad the model is performing across all the images in current batch of data
        # that's what job of this loss function is, here I am using mean squared error as the loss function
        # it calculate the different between y_pred and y_train square it so the negative value get neglected get the
        # error for that input and do the same for all the other inputs and add those and divide it by the batch size
        # in the end we get the single value that repesent how far are we from the intended output
        self.loss_function = 'mse'

        # Learning Rate is the change done for single weight one the neural network by the optimizer in give step
        # change can be positive or negative when applied by the optimizer even though we define it has positive value
        self.LR = 1e-3

        # Filter is series of changes done input image and here I am defining size of the filter which is used in
        # _build_model function
        self.encoder_filters = (512, 256, 128)
        self.decoder_filters = (128, 256)

        self.input_shape = image_size

        # this is the size/shape of the output image from the model
        self.output_shape = (64, 64, 1)

        # This size of the full connected layer between the encoder and the decoder, this is also know as
        # bottleneck layer
        self.latent_size = 256

        self.image_size = image_size
        self.model_path = model_path
        self.visualize = visualize
        self.batch_size = batch_size

        # this is just a placeholder which get updated when _image_set_generator is called
        # which will hold the size of the dataset
        self.dataset_size = 0

        # number batches the model train for step
        self.batches_per_step = 4

        # only for documenting purposes
        model_number = 1
        if os.path.isdir("models"):
            model_number += len(os.listdir("models"))

        self.model_number = f"{model_number}"

        self.model = None

    def _build_model(self):
        # This is the input layer of the Neural network
        input_img = Input(shape=self.image_size, name="input")

        # this is done so we can model the model iteratively and reduces the lines of code needed
        x = input_img

        for i, f in enumerate(self.encoder_filters):
            # here f how many times we need to convolve the input image(x)
            # convolving image reduced to complexity of the image
            # it means the image will be broken down to smaller feature set that consists of only very basic shapes
            # in this case we are having f number of filters which are (3x3)
            # and this NN will take first 3x3 pixel block from the image calculate the dot product of pixel block and
            # filters and produce a single value this action will be repeated f times in this layer
            # updating the values of this filter to make the feature detection more accurate is the job of the optimizer
            x = Conv2D(f, (3, 3), activation='relu', padding='same')(x)
            # Max Pooling is a way of reducing the size of the image by averaging pixels
            # in this case Conv2D will output a image which is f*f model will average every 2x2 pixel block into 1 pixel
            x = MaxPooling2D((2, 2))(x)
            # here x will be a image (array) which is (f/2)*(f/2) it's less complex with out compromising features
            if (i + 1) % 2 == 0:
                # every other layer dropout are added
                # dropouts are a way avoiding overfitting by randomly firing neurons so model won't get stuck in a
                # local minimum because of these random pushes
                x = Dropout(0.2)(x)

        # here size is the output array after convolving i times
        size = K.int_shape(x)

        # this is reshaping multi dimensional array to 1D array
        x = Flatten()(x)

        # Dense is fully connected layer which has connections coming from every node in the flatten array of nodes
        # also this is our compressed representation of the face
        x = Dense(self.latent_size, name="latent_space")(x)

        # After this step we are undoing all the things we did till here.
        # till here we encoded image to compressed representation and now we are decoding it to a Image again

        x = Dense(np.prod(size[1:]))(x)
        x = Reshape((size[1], size[2], size[3]))(x)

        for i, f in enumerate(self.decoder_filters):
            # Conv2DTranspose does the exact opposite of the Conv2D
            x = Conv2DTranspose(f, (3, 3), strides=2, activation='relu', padding='same')(x)
            # this is data normalization step to prevent neurons from over exploding results ripple effect
            # which means a single neuron can't decided whole output image by it self
            x = BatchNormalization()(x)
            if i % 2 == 0:
                x = Dropout(0.2)(x)

        x = Conv2DTranspose(self.image_size[2], (3, 3), activation='relu', padding='same')(x)

        # This is the output layer and here I am using sigmoid function Activation which maps all the outputs of the NN
        # to value between 0-1 this is also know as standardization so one pixel won't be 10 million and the other will
        # be 6
        output = Activation("sigmoid", name="output")(x)

        return Model(inputs=input_img, outputs=output, name=f"Speculo-v{self.model_number}")

    def autoencoder(self):
        """Build the auto encoder

        call the _build_model() and return the complied model with loss function and optimizer
        defined in the constructor
        @return: complied model
        """
        autoencoder = self._build_model()
        autoencoder.compile(optimizer=self.optimizer, loss=self.loss_function)
        return autoencoder

    def display_image_array(self, n, *image_sets, figsize=(8, 4), title=None, labels=None, save_dir=None, shapes=None):
        """Simple visualization function that plot all the images arrays passed
        @param n: Images per row
        @param image_sets: n number of image pillow image arrays
        @param figsize: revolution of the generated image
        @param title: title of image
        @param labels: labels for each image set
        @param save_dir: generated image saving directory
        @param shapes: image shapes for each array
        """
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
                if shapes and shapes[row]:
                    if shapes[row][2] == 1:
                        plt.imshow(image_set[x].reshape(shapes[row][:2]))
                        plt.gray()
                    else:
                        plt.imshow(image_set[x].reshape(shapes[row]))
                else:
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

    def read_image(self, file, output=False):
        """Read image from file and convert it to model's requirements
        @param file: file path of the image
        @param output: Whether to resize it to output shape of the model
        @return: Image as numpy array
        """
        im = Image.open(file)
        if output:
            im = im.resize(self.output_shape[:2], Image.ANTIALIAS)
        else:
            im = im.resize(self.input_shape[:2], Image.ANTIALIAS)
        if self.image_size[2] == 1:
            im = im.convert('L')
        return np.array(im)

    def _load_image_set(self, directory):
        """Load Test/Evaluate dataset
        @param directory: file path of the images
        @return: Tensorflow Image Dataset Object which will read batch_size of images on each call
        """
        x, y = [], []
        fronts = sorted(os.listdir(f"dataset/{directory}/Front/"))
        for i, person_dir in enumerate(sorted(os.listdir(f"dataset/{directory}"))):
            if person_dir == "Front":
                continue
            else:
                y_image = self.read_image(f"dataset/{directory}/Front/{fronts[i - 1]}", output=True)
                for image in os.listdir(f"dataset/{directory}/{person_dir}"):
                    x_image = self.read_image(f"dataset/{directory}/{person_dir}/{image}")
                    x.append(np.array(x_image))
                    y.append(np.array(y_image))

        x = np.array(x).astype("float32") / 255.0
        y = np.array(y).astype("float32") / 255.0
        x = x.reshape([-1, self.input_shape[0], self.input_shape[1], self.input_shape[2]])
        y = y.reshape([-1, self.output_shape[0], self.output_shape[1], self.output_shape[2]])
        x, y = shuffle(x, y)
        return tf.data.Dataset.from_tensor_slices((x, y))

    def _image_set_generator(self):
        """Buffer the youtube dataset
        """
        if not os.path.isfile("dataset/youtube_data_map.pkl"):
            raise FileNotFoundError("dataset/youtube_data_map.pkl was not found")
        file = open('dataset/youtube_data_map.pkl', 'rb')
        data = pickle.load(file)
        self.dataset_size = len(data)
        for x, y in data:
            x = self.read_image(x).astype("float32") / 255.0
            y = self.read_image(y, output=True).astype("float32") / 255.0
            x = x.reshape([self.input_shape[0], self.input_shape[1], self.input_shape[2]])
            y = y.reshape([self.output_shape[0], self.output_shape[1], self.output_shape[2]])
            yield x, y

    def _sample_generator(self, generator):
        """Sample generator dataset
        @param generator: dataset as generator
        @return: sample of the dataset
        """
        samples_x = []
        samples_y = []
        for sample in generator.take(10):
            x = np.array(sample[0])
            y = np.array(sample[1])
            samples_x.append(np.reshape((x * 255).astype("uint8"), self.input_shape))
            samples_y.append(np.reshape((y * 255).astype("uint8"), self.output_shape))

        return samples_x, samples_y

    def _create_dataset(self):
        """Preprocess the YoutubeFaceDB and get ready it ready for the model
        @return: Preprocessed dataset
        """
        X_shape = tf.TensorShape([self.input_shape[0], self.input_shape[1], self.input_shape[2]])
        Y_shape = tf.TensorShape([self.output_shape[0], self.output_shape[1], self.output_shape[2]])
        train_data_set = tf.data.Dataset.from_generator(self._image_set_generator,
                                                        (tf.float32, tf.float32),
                                                        (X_shape, Y_shape))
        test_data_set = self._load_image_set("test")
        train_samples_x, train_samples_y = self._sample_generator(train_data_set)
        test_samples_x, test_samples_y = self._sample_generator(test_data_set)
        if self.visualize:
            self.display_image_array(10, train_samples_x, train_samples_y, test_samples_x, test_samples_y,
                                     title=f"Dataset ({self.dataset_size})",
                                     labels=["x_train", "y_train", "x_test", "y_test"],
                                     save_dir=f'models/{self.model_number}/img/dataset.png',
                                     shapes=[self.input_shape, self.output_shape, self.input_shape, self.output_shape])
        return train_data_set.batch(self.batch_size), test_data_set.batch(self.batch_size)

    def train(self):
        """Train the model and generate the documentation
        """

        # Create model saving dirs
        if os.path.exists(f"models/{self.model_number}"):
            raise FileExistsError(f"models/{self.model_number} already existing")
        os.makedirs(f"models/{self.model_number}/img")

        # Load the dataset
        train_data_set, test_data_set = self._create_dataset()
        # Create the Model
        self.model = self.autoencoder()

        # Plot the model layout
        plot_model(self.model, to_file=f'models/{self.model_number}/img/model.png')

        # create the README.md
        with open(f"models/{self.model_number}/README.md", "w") as f:
            f.write(f"# Model v{self.model_number}\n")
            f.write(f"Optimizer - {self.optimizer} (LR - {self.LR}) <br>\n")
            f.write(f"Loss Function - {self.loss_function} <br>\n")
            f.write(f"Input Shape - {self.input_shape} <br>\n")
            f.write(f"Output Shape - {self.output_shape} <br>\n")
            f.write(f"Encoding Filters - {self.encoder_filters} <br>\n")
            f.write(f"Decoding Filters - {self.decoder_filters} <br>\n")
            f.write(f"Latent Size - {self.latent_size} <br>\n\n")
            if self.visualize:
                f.write("### Dataset Sample\n")
                f.write('![DataSet](img/dataset.png)\n\n')
            f.write(f"## Model Summary\n```shell script\n")
            self.model.summary(print_fn=lambda x: f.write(x + '\n'))
            f.write("```\n")
            f.write("![Model](img/model.png)\n\n")
            f.write(f"## Training Log\n```shell script\n\n```\n\n")

        # keras callback that create Model check point after every epoch
        checkpoint = ModelCheckpoint(f"models/{self.model_number}/Model-v{self.model_number}.h5", monitor='loss',
                                     verbose=1, save_best_only=True, mode='min')
        # keras callback that create tensorboard logs
        tensorboard = TensorBoard(log_dir=f'logs/Model-v{self.model_number}', histogram_freq=0, write_graph=False)

        # keras callback that prevent overfitting
        early_stopping = EarlyStopping(monitor='loss', min_delta=0, patience=4, verbose=1, mode='auto')

        # Custom callback I made to check on the model's progress
        auto_encoder_progress = AutoEncoderProgress(self)
        history = None
        try:
            # Train the model
            history = self.model.fit(train_data_set,
                                     epochs=self.dataset_size // (self.batches_per_step * self.batch_size),
                                     steps_per_epoch=(self.batches_per_step * self.batch_size),
                                     validation_data=test_data_set.repeat(),
                                     validation_steps=64,
                                     use_multiprocessing=True,
                                     callbacks=[checkpoint, tensorboard, auto_encoder_progress])
            # Save the trained model
            self.model.save(f"models/{self.model_number}/Model-v{self.model_number}-Final.h5")
        except KeyboardInterrupt:
            pass

        finally:
            # Update the README.md post training
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

            # Final evaluation with evaluation dataset
            self.evaluate(file=f'models/{self.model_number}/img/predictions.png')

    def _load_model(self):
        """Load the saved model with current model_path defined in constructor
        @return: model
        """
        self.model = load_model(self.model_path)
        return self.model

    def _get_latent_space(self):
        """Get just the encoder from the model
        @return: encoder
        """
        autoencoder = self._load_model()
        encoder = Model(inputs=autoencoder.input,
                        outputs=autoencoder.get_layer("latent_space").output)
        return encoder

    def evaluate(self, title="Model Predictions", file=None):
        """evaluation with evaluation dataset
        @param title:
        @param file:
        """
        # Load model
        if self.model is None:
            self._load_model()
        gen_image = []
        org_image = []
        for image in sorted(os.listdir("dataset/evaluate")):
            # Read the image
            image = self.read_image(os.path.join("dataset/evaluate", image))
            org_image.append(image)
            # Get model's prediction
            gen_image.append(self.predict(image, preview=True))

        # visualize the outputs
        self.display_image_array(10, org_image[:10], gen_image[:10], org_image[10:], gen_image[10:],
                                 title=title, figsize=(8, 4), save_dir=file,
                                 shapes=[self.input_shape, self.output_shape, self.input_shape, self.output_shape])

    def predict(self, image, preview=False):
        """Predict on the current model
        Predict on the current model in the memory if model is None
        it will load the model from self.model_path and predict from that model
        @param image: Input for model
        @param preview: Whether the predict image should be human readable
        @return: Output from the model as machine readable or human readable
        """
        # Load model
        if self.model is None:
            self._load_model()
        # get the prediction
        output = self.model.predict(np.reshape(image, [1, self.image_size[0], self.image_size[1], self.image_size[2]]))
        if preview:
            # convert to RGB
            output = (output * 255).astype("uint8")
            return np.reshape(output, self.output_shape)
        return output.reshape([-1])
