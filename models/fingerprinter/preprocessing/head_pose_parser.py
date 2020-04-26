import os
from PIL import Image
from tqdm import tqdm
from models.facedetector.yolo.yolo import YOLO
import numpy as np

BASE_DIR = "/mnt/hdd/Projects/SDGP/RAW_Data/FacePose"

if not os.path.isdir("../dataset_processed"):
    os.makedirs("../dataset_processed")
os.chdir("../dataset_processed")

yolo = YOLO(draw=False, debug=False)


def crop_face(read, write):
    im = Image.open(read)
    boxes = yolo.detect_image_fast(np.array(im))
    for top, left, bottom, right in boxes:
        face = im.crop((left, top, right, bottom))
        face.save(write)
        del face
    del im


for person_dir in tqdm(os.listdir(f"{BASE_DIR}")):
    if person_dir == "Front":
        for i, image in enumerate(sorted(os.listdir(f"{BASE_DIR}/{person_dir}"))[::2]):
            if not os.path.isdir(f"Person{str(i + 1).zfill(2)}/Y/"):
                os.makedirs(f"Person{str(i + 1).zfill(2)}/Y/")
            crop_face(f"{BASE_DIR}/{person_dir}/{image}", f"Person{str(i + 1).zfill(2)}/Y/{image}")
    else:
        if not os.path.isdir(f"{person_dir}/X/"):
            os.makedirs(f"{person_dir}/X/")
        for image in tqdm(os.listdir(f"{BASE_DIR}/" + person_dir)):
            if image.endswith("txt"):
                continue
            crop_face(f"{BASE_DIR}/{person_dir}/{image}", f"{person_dir}/X/{image}")

yolo.close_session()
