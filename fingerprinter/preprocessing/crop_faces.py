import os
from PIL import Image
from tqdm import tqdm
from facedetector.yoloface.yolo.yolo import YOLO


if not os.path.isdir("dataset/raw"):
    raise FileNotFoundError("Raw Dataset is not present")

yolo = YOLO(draw=False, debug=False)

for person_dir in tqdm(os.listdir("dataset/raw")):
    if not os.path.isdir(f"dataset/cropped/{person_dir}"):
        os.makedirs(f"dataset/cropped/{person_dir}")

    for image in os.listdir("dataset/raw/" + person_dir):
        if image.endswith("txt"):
            continue
        im = Image.open(f"dataset/raw/{person_dir}/{image}")
        boxes = yolo.detect_image_fast(im)
        for top, left, bottom, right in boxes:
            face = im.crop((left, top, right, bottom))
            face.save(f"dataset/cropped/{person_dir}/{image}")
            del face
        del im

yolo.close_session()
