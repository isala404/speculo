import cv2
from facedetector.yolo.yolo import YOLO
from scipy.spatial import distance
from model import Speculo
import os
import numpy as np

yolo = YOLO(draw=False, debug=False)

SIZE = 192
FINGERPRINT_SIZE = (64, 64, 1)

known_face_encodings = []
known_face_names = []
speculo = Speculo(model_path="/mnt/hdd/Projects/SDGP/Speculo/fingerprinter/models/1/Model-v1.h5", visualize=False)

print("Processing Faces ....")

for person_dir in os.listdir("faces"):
    for image in os.listdir(os.path.join("faces", person_dir)):
        im = cv2.imread(os.path.join("faces", person_dir, image))
        im = cv2.resize(im, (512, 512), interpolation=cv2.INTER_AREA)
        boxes = yolo.detect_image_fast(im)
        if len(boxes) >= 2:
            print(os.path.join("faces", person_dir, image), "Found more than one face, skipping .....")
            continue
        top, left, bottom, right = boxes[0]
        face = im[int(top):int(bottom), int(left):int(right)]
        face = cv2.resize(face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)
        face_encoding = speculo.predict(face)
        known_face_encodings.append(face_encoding)
        known_face_names.append(person_dir.title())
        del im, face, face_encoding


def best_match(f_encoding):
    distances = []
    for known_face_encoding in known_face_encodings:
        distances.append(distance.euclidean(f_encoding, known_face_encoding))
    return known_face_names[int(np.argmin(distances))]


print("Start Detecting .... ")
video_capture = cv2.VideoCapture(0)

while True:
    ret, frame = video_capture.read()
    height, width, _ = frame.shape
    small_frame = cv2.resize(frame, (SIZE, SIZE))
    boxes = yolo.detect_image_fast(small_frame)
    for top, left, bottom, right in boxes:
        try:
            top = int(top * height / SIZE)
            right = int(right * width / SIZE)
            bottom = int(bottom * height / SIZE)
            left = int(left * width / SIZE)

            face = frame[top:bottom, left:right]
            face = cv2.resize(face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)

            cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(frame, best_match(speculo.predict(face)), (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
        except Exception:
            continue

    cv2.imshow('Video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
