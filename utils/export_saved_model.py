import os
import tensorflow as tf

version = 11

MODEL_DIR = "../models/fingerprinter/models"
model = tf.keras.models.load_model(f"../models/fingerprinter/models/{version}/Model-v{version}.h5")

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

print('\nSaved model:')
