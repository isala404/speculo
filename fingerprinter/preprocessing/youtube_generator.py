import os
import pickle
import random
from tqdm import tqdm
from PIL import Image
import numpy as np

data = []
if not os.path.isdir("../dataset_processed"):
    raise FileNotFoundError("fingerprinter/dataset_processed was not found")
for person in tqdm(os.listdir("../dataset_processed")):
    for Y in os.listdir(os.path.join("../dataset_processed", person, "Y")):
        for X in os.listdir(os.path.join("../dataset_processed", person, "X")):
            data.append([os.path.join("../dataset_processed", person, "X", X),
                         os.path.join("../dataset_processed", person, "Y", Y)])

random.shuffle(data)
if not os.path.isdir("../dataset"):
    os.makedirs("../dataset")
file = open('../dataset/youtube_data_map.pkl', 'wb')
pickle.dump(data, file)
file.close()