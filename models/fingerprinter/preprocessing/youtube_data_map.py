"""youtube_data_map.py: Create the Target and feature map that's used by the Speculo Class"""

__author__ = "Isala Piyarisi"
__version__ = "0.0.1"
__email__ = "code@isala.me"

import os
import pickle
import random
from tqdm import tqdm

data = []
if not os.path.isdir("../dataset_processed"):
    raise FileNotFoundError("fingerprinter/dataset_processed was not found")
for person in tqdm(os.listdir("../dataset_processed")):
    for Y in os.listdir(os.path.join("../dataset_processed", person, "Y")):
        for X in os.listdir(os.path.join("../dataset_processed", person, "X")):
            data.append([os.path.join("dataset_processed", person, "X", X),
                         os.path.join("dataset_processed", person, "Y", Y)])

random.shuffle(data)
if not os.path.isdir("../dataset"):
    os.makedirs("../dataset")

# cache the map
file = open('../dataset/youtube_data_map.pkl', 'wb')
pickle.dump(data, file)
file.close()
