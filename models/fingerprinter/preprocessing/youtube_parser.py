"""youtube_parser.py: Preprocess YoutubeFaceDB to for fingerprinter's usage"""

__author__ = "Isala Piyarisi"
__version__ = "0.0.1"
__email__ = "code@isala.me"
__status__ = "Development"

import os
from PIL import Image
from scipy.io import loadmat
from models.facedetector.yolo.yolo import YOLO
from tqdm import tqdm
import numpy as np

YT_DATASET_DIR = os.getenv("YT_DATASET_DIR", "/mnt/hdd/Projects/SDGP/RAW_Data/YouTubeFaces")

yolo = YOLO(draw=False, debug=False)
if not os.path.isdir("../dataset_processed"):
    os.makedirs("../dataset_processed")
os.chdir("../dataset_processed")


# Crop Faces using YOLO Model
def crop_face(read, write):
    im = Image.open(read)
    shape = np.array(im).shape
    if shape[0] % 32 != 0 and shape[1] % 32 != 0:
        im = im.resize(((shape[0] // 32) * 32, (shape[1] // 32) * 32))
    boxes = yolo.detect_image_fast(np.array(im))
    # Crop the bonding box and save the image
    for top, left, bottom, right in boxes:
        face = im.crop((left, top, right, bottom))
        face.save(write)
        del face
    del im


# Go though every frame of every person
person_total = len(os.listdir(f"{YT_DATASET_DIR}/aligned_images_DB/"))
for person_index, person in enumerate(os.listdir(f"{YT_DATASET_DIR}/aligned_images_DB/")):
    for video_index, video in enumerate(os.listdir(f"{YT_DATASET_DIR}/aligned_images_DB/{person}")):
        faces = {}
        headpose = loadmat(f"{YT_DATASET_DIR}/headpose_DB/headorient_apirun_{person}_{video}.mat")['headpose']
        target = {"file": None, "pos": float("inf")}
        for i, frame in enumerate(sorted(os.listdir(f"{YT_DATASET_DIR}/aligned_images_DB/{person}/{video}"))):
            # print(person, video, frame)
            faces[f"{YT_DATASET_DIR}/aligned_images_DB/{person}/{video}/{frame}"] = (
                headpose[0][i], headpose[1][i], headpose[2][i])
            # Find the Target (which is most most front facing image
            if abs(headpose[0][i] + headpose[1][i] + headpose[2][i]) < target['pos']:
                target['file'] = f"{YT_DATASET_DIR}/aligned_images_DB/{person}/{video}/{frame}"
                target['pos'] = abs(headpose[0][i] + headpose[1][i] + headpose[2][i])

        # Remove the target
        files = list(faces.keys())
        files.remove(target["file"])

        file_name = target["file"].replace(f"{YT_DATASET_DIR}/aligned_images_DB/", "")
        person_name = file_name.split("/")[0]
        file_name = file_name.split("/")[-1]
        if not os.path.isdir(f"{person_name}/"):
            os.makedirs(f"{person_name}/Y")
            os.makedirs(f"{person_name}/X")

        # crop out and save the face of the target frame
        crop_face(target["file"], f"{person_name}/Y/{file_name}")
        print(f"Processing Person {person_index}/{person_total} | Video {video_index}")

        # crop out and save the face of the rest of the frames
        for file in tqdm(files):
            file_name = file.replace(f"{YT_DATASET_DIR}/aligned_images_DB/", "")
            person_name = file_name.split("/")[0]
            file_name = file_name.split("/")[-1]
            crop_face(file, f"{person_name}/X/{file_name}")

yolo.close_session()
