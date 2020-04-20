import os
import pickle
import random
from tqdm import tqdm
from PIL import Image
import numpy as np


def youtube_data_map():
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


def read_data_set():
    if not os.path.isfile("../dataset/youtube_data_map.pkl"):
        print("youtube_data_map was not found")
        youtube_data_map()
    print("Loading youtube_data_map")
    file = open('../dataset/youtube_data_map.pkl', 'rb')
    data = pickle.load(file)
    for X, Y in data:
        X = Image.open(X)
        Y = Image.open(Y)
        X.show()
        Y.show()
        yield np.array(X), np.array(Y)

