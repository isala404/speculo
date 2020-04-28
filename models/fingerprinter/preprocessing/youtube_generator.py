"""youtube_generator.py: Create the Target and feature map that's used by the Speculo Class"""

__author__ = "Isala Piyarisi"
__version__ = "0.0.1"
__email__ = "code@isala.me"

import os
import pickle
import random
from tqdm import tqdm

BASE_DIR = "/mnt/hdd/Projects/SDGP/Speculo/fingerprinter"

data = []
if not os.path.isdir(os.path.join(BASE_DIR, "dataset_processed")):
    raise FileNotFoundError("fingerprinter/dataset_processed was not found")
for person in tqdm(os.listdir(os.path.join(BASE_DIR, "dataset_processed"))):
    for Y in os.listdir(os.path.join(BASE_DIR, "dataset_processed", person, "Y")):
        for X in os.listdir(os.path.join(BASE_DIR, "dataset_processed", person, "X")):
            if X.split(".")[0].split("_")[-1] == Y.split(".")[0].split("_")[-1]:
                data.append([os.path.join(BASE_DIR, "dataset_processed", person, "X", X),
                             os.path.join(BASE_DIR, "dataset_processed", person, "Y", Y)])


random.shuffle(data)
if not os.path.isdir(os.path.join(BASE_DIR, "dataset")):
    os.makedirs(os.path.join(BASE_DIR, "dataset"))
file = open(os.path.join(BASE_DIR, "dataset", "youtube_data_map.pkl"), 'wb')
pickle.dump(data, file)
file.close()
