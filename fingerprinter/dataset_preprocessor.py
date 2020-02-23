import os
from PIL import Image
from tqdm import tqdm

if not os.path.isdir("dataset/raw"):
    raise FileNotFoundError("Raw Dataset is not present")

for person_dir in tqdm(os.listdir("dataset/raw")):
    if not person_dir.startswith("Person"):
        continue
    if not os.path.isdir(f"dataset/processed/{person_dir}"):
        os.makedirs(f"dataset/processed/{person_dir}")

    for image in os.listdir("dataset/raw/" + person_dir):
        if image.endswith("txt"):
            continue
        with open(f"dataset/raw/{person_dir}/{image.replace('jpg', 'txt')}") as f:
            _, _, _, x, y, w, h = f.readlines()
        x = int(x)
        y = int(y)
        w = int(w)
        h = int(h)
        im = Image.open(f"dataset/raw/{person_dir}/{image}")
        im = im.crop((x-w, y-h, x + (w//2), y + (h//2)))
        im.save(f"dataset/processed/{person_dir}/{image}")