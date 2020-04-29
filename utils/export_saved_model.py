import os
import tensorflow as tf
from tensorflow_core.python.keras import Model

version = 12
encoder_only = False

MODEL_DIR = "../models/fingerprinter/models"
model = tf.keras.models.load_model(f"../models/fingerprinter/models/{version}/Model-v{version}.h5")

if encoder_only:
    model = Model(inputs=model.input, outputs=model.get_layer("latent_space").output)

export_path = os.path.join(MODEL_DIR, str(version))
print('export_path = {}\n'.format(export_path))


tf.keras.models.save_model(
    model,
    export_path,
    overwrite=True,
    include_optimizer=True,
    save_format=None,
    signatures=None,
    options=None
)

print('\nModel Saved to :', os.path.abspath(export_path))
