import cv2
from facedetector.yolo.yolo import YOLO
from fingerprinter.speculo import Speculo
import os
from sklearn.neighbors import KNeighborsClassifier

SIZE = 256
FINGERPRINT_SIZE = (64, 64, 3)
MODEL_VERSION = 13
known_face_encodings = []
known_face_names = []

yolo = YOLO(draw=False, debug=False)

speculo = Speculo(model_path=f"fingerprinter/models/{MODEL_VERSION}/Model-v{MODEL_VERSION}.h5",
                  image_size=FINGERPRINT_SIZE, visualize=False)


def get_finger_print(path, debug=True):
    im = cv2.imread(path)
    im = cv2.resize(im, (512, 512), interpolation=cv2.INTER_AREA)
    boxes = yolo.detect_image_fast(im)
    if len(boxes) == 0:
        if debug:
            print(path, "no face found, skipping .....")
        return None
    if len(boxes) >= 2:
        if debug:
            print(path, "Found more than one face, skipping .....")
        return None
    top, left, bottom, right = boxes[0]
    face = im[int(top):int(bottom), int(left):int(right)]
    if FINGERPRINT_SIZE[2] == 1:
        try:
            face = cv2.cvtColor(face, cv2.COLOR_BGR2GRAY)
        except cv2.error:
            return None
    face = cv2.resize(
        face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)
    return speculo.predict(face)


def best_match(f_encoding):
    distance, face_idx = neigh.kneighbors(
        [f_encoding], n_neighbors=n_faces, return_distance=True)
    return known_face_names[face_idx.tolist()[0][0]]


print("Processing Faces ....")
for image in sorted(os.listdir("dataset_evaluate/Front")):
    img_path = os.path.join("dataset_evaluate/Front", image)
    face_encoding = get_finger_print(img_path)
    if face_encoding.any():
        known_face_encodings.append(face_encoding)
        known_face_names.append(image.replace("personne", "person")[:8])

print(known_face_names)
n_faces = len(set(known_face_names))
neigh = KNeighborsClassifier(n_neighbors=n_faces)
neigh.fit(known_face_encodings, known_face_names)
total_samples = 0
correct_predictions = 0
f = open("badimages.txt", "w")
print("Start Predicting .... ")
for person_dir in sorted(os.listdir("dataset_evaluate")):
    if person_dir == "Front":
        continue
    for image in os.listdir(os.path.join("dataset_evaluate", person_dir)):
        if image.endswith(".txt"):
            continue
        img_path = os.path.join("dataset_evaluate", person_dir, image)
        face_encoding = get_finger_print(img_path, debug=False)
        if face_encoding is not None:
            total_samples += 1
            predicted_name = best_match(face_encoding)
            if image[:8] == predicted_name:
                correct_predictions += 1
            else:
                f.write(f"{img_path}\n")
            print("current_samples", total_samples, "correct_predictions", correct_predictions,
                  "accuracy:", (correct_predictions / total_samples) * 100)

print("total_samples:", total_samples)
print("correct_predictions:", correct_predictions)
print("accuracy:", (correct_predictions / total_samples) * 100)
f.close()
