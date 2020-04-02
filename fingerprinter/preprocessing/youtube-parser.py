import os
from PIL import Image
from scipy.io import loadmat
from facedetector.yolo.yolo import YOLO
from tqdm import tqdm
import numpy as np

BASE_DIR = "/mnt/hdd/YouTubeFaces"

faces = {}
yolo = YOLO(draw=False, debug=False)
if not os.path.isdir("../dataset_youtube"):
    os.makedirs("../dataset_youtube")
os.chdir("../dataset_youtube")


def crop_face(read, write):
    im = Image.open(read)
    shape = np.array(im).shape
    if shape[0] % 32 != 0 and shape[1] % 32 != 0:
        im = im.resize(((shape[0]//32)*32, (shape[1]//32)*32))
    boxes = yolo.detect_image_fast(np.array(im))
    for top, left, bottom, right in boxes:
        face = im.crop((left, top, right, bottom))
        face.save(write)
        del face
    del im


person_total = len(os.listdir(f"{BASE_DIR}/aligned_images_DB/"))
for person_index, person in enumerate(os.listdir(f"{BASE_DIR}/aligned_images_DB/")):
    for video_index, video in enumerate(os.listdir(f"{BASE_DIR}/aligned_images_DB/{person}")):
        headpose = loadmat(f"{BASE_DIR}/headpose_DB/headorient_apirun_{person}_{video}.mat")['headpose']
        target = {"file": None, "pos": float("inf")}
        for i, frame in enumerate(sorted(os.listdir(f"{BASE_DIR}/aligned_images_DB/{person}/{video}"))):
            # print(person, video, frame)
            faces[f"{BASE_DIR}/aligned_images_DB/{person}/{video}/{frame}"] = (
                headpose[0][i], headpose[1][i], headpose[2][i])
            if abs(headpose[0][i] + headpose[1][i] + headpose[2][i]) < target['pos']:
                target['file'] = f"{BASE_DIR}/aligned_images_DB/{person}/{video}/{frame}"
                target['pos'] = abs(headpose[0][i] + headpose[1][i] + headpose[2][i])

        files = list(faces.keys())
        files.remove(target["file"])

        file_name = target["file"].replace(f"{BASE_DIR}/aligned_images_DB/", "")
        person_name = file_name.split("/")[0]
        file_name = file_name.split("/")[-1]
        if not os.path.isdir(f"{person_name}/"):
            os.makedirs(f"{person_name}/Y")
            os.makedirs(f"{person_name}/X")
        crop_face(target["file"], f"{person_name}/Y/{file_name}")
        print(f"Processing Person {person_index}/{person_total} | Video {video_index}")

        for file in tqdm(files):
            file_name = file.replace(f"{BASE_DIR}/aligned_images_DB/", "")
            person_name = file_name.split("/")[0]
            file_name = file_name.split("/")[-1]
            crop_face(file, f"{person_name}/X/{file_name}")
