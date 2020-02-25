import os
from shutil import copyfile
from random import shuffle
from tqdm import tqdm

os.chdir("../")

if not os.path.isdir("dataset/cropped"):
    raise FileNotFoundError("Raw cropped is not present")

if not os.path.isdir(f"dataset/processed/train"):
    os.makedirs(f"dataset/processed/train")
else:
    raise FileExistsError("Processed training dataset already existing")

if not os.path.isdir(f"dataset/processed/test"):
    os.makedirs(f"dataset/processed/test")
else:
    raise FileExistsError("Processed testing dataset already existing")

for person_dir in tqdm(os.listdir("dataset/cropped/")):
    os.makedirs(f"dataset/processed/train/{person_dir}")
    os.makedirs(f"dataset/processed/test/{person_dir}")
    if person_dir == "Front":
        for i, image in enumerate(sorted(os.listdir(f"dataset/cropped/{person_dir}"))):
            if i % 2:
                copyfile(f"dataset/cropped/{person_dir}/{image}", f"dataset/processed/train/{person_dir}/{image}")
            else:
                copyfile(f"dataset/cropped/{person_dir}/{image}", f"dataset/processed/test/{person_dir}/{image}")
    else:
        images = os.listdir(f"dataset/cropped/{person_dir}")
        shuffle(images)
        for image in images[:round(len(images)*0.1)]:
            copyfile(f"dataset/cropped/{person_dir}/{image}", f"dataset/processed/test/{person_dir}/{image}")
        for image in images[round(len(images)*0.1):]:
            copyfile(f"dataset/cropped/{person_dir}/{image}", f"dataset/processed/train/{person_dir}/{image}")
