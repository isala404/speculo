from PIL import Image
import os
import numpy as np
from tensorflow.keras.callbacks import TensorBoard, ModelCheckpoint
from tensorflow.keras.layers import Input, Dense, Conv2D, MaxPooling2D, UpSampling2D, Dropout
from tensorflow.keras.models import Model
from datetime import datetime

class Speculo:
    def __init__(self):
        self.image_size = (96, 96)
        self.input_img = Input(shape=(96, 96, 3))
        self.encoded = self.encoder()
        self.decoded = self.decoder()

    def encoder(self):
        x = Conv2D(72, (3, 3), activation='relu', padding='same')(self.input_img)
        x = MaxPooling2D((2, 2), padding='same')(x)
        x = Conv2D(64, (3, 3), activation='relu', padding='same')(x)
        x = MaxPooling2D((2, 2), padding='same')(x)
        x = Conv2D(32, (3, 3), activation='relu', padding='same')(x)
        x = MaxPooling2D((2, 2), padding='same')(x)
        x = Conv2D(16, (3, 3), activation='relu', padding='same')(x)
        x = MaxPooling2D((2, 2), padding='same')(x)
        # x = Conv2D(8, (3, 3), activation='relu', padding='same')(x)
        # x = MaxPooling2D((2, 2), padding='same')(x)
        # x = Conv2D(4, (3, 3), activation='relu', padding='same')(x)
        # x = MaxPooling2D((2, 2), padding='same')(x)
        x = Dense(512, activation='relu')(x)
        x = Dropout(0.4)(x)
        x = Dense(128, activation='relu')(x)
        return x

    def decoder(self):
        x = Dropout(0.2)(self.encoded)
        x = Dense(128, activation='relu')(x)
        x = Dropout(0.4)(x)
        x = Dense(512, activation='relu')(x)
        # x = Conv2D(8, (3, 3), activation='relu', padding='same')(self.encoded)
        # x = UpSampling2D((2, 2))(x)
        x = Conv2D(16, (3, 3), activation='relu', padding='same')(x)
        x = UpSampling2D((2, 2))(x)
        x = Conv2D(32, (3, 3), activation='relu', padding='same')(x)
        x = UpSampling2D((2, 2))(x)
        x = Conv2D(64, (3, 3), activation='relu', padding='same')(x)
        x = UpSampling2D((2, 2))(x)
        x = Conv2D(72, (3, 3), activation='relu', padding='same')(x)
        x = UpSampling2D((2, 2))(x)
        return Conv2D(3, (3, 3), activation='sigmoid', padding='same')(x)

    def autoencoder(self):
        autoencoder = Model(self.input_img, self.decoded)
        autoencoder.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy', 'binary_crossentropy', 'mae'])
        return autoencoder

    def _load_image_set(self, directory):
        x = []
        y = []
        fronts = sorted(os.listdir(f"dataset/processed/{directory}/Front/"))
        for i, person_dir in enumerate(sorted(os.listdir(f"dataset/processed/{directory}"))):
            if person_dir == "Front":
                continue
            else:
                y_image = Image.open(f"dataset/processed/{directory}/Front/{fronts[i - 1]}").resize(self.image_size, Image.ANTIALIAS)
                for image in os.listdir(f"dataset/processed/{directory}/{person_dir}"):
                    x.append(np.array(Image.open(f"dataset/processed/{directory}/{person_dir}/{image}").resize(self.image_size, Image.ANTIALIAS)))
                    y.append(np.array(y_image))
        return np.reshape(x, [-1, 96, 96, 3]), np.reshape(y, [-1, 96, 96, 3])

    def _create_dataset(self):
        x_train, y_train = self._load_image_set("train")
        x_test, y_test = self._load_image_set("test")
        return x_train, y_train, x_test, y_test

    def train(self):
        x_train, y_train, x_test, y_test = self._create_dataset()
        model = self.autoencoder()
        model_number = 1
        if os.path.isdir("logs"):
            model_number = len(os.listdir("logs/"))+1

        checkpoint = ModelCheckpoint("models/model.h5", monitor='loss', verbose=1, save_best_only=True, mode='min')
        tensorboard = TensorBoard(log_dir=f'logs/{model_number}-{datetime.now()}', histogram_freq=0, write_graph=False)

        model.fit(x_train, y_train,
                  epochs=100,
                  batch_size=64,
                  shuffle=True,
                  validation_data=(x_test, y_test),

                  callbacks=[checkpoint, tensorboard])
        model.save("models/Final-Model.h5")


speculo = Speculo()
# print(speculo.autoencoder().summary())
speculo.train()
