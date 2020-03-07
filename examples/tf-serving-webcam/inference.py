import cv2
from facedetector.yolo.yolo import YOLO
from scipy.spatial import distance
from model import Speculo
import os
import numpy as np

yolo = YOLO(draw=False, debug=False)

SIZE = 192
FINGERPRINT_SIZE = (64, 64, 1)

speculo = Speculo()

known_face_encodings = []
known_face_names = []
if not os.path.isdir("faces"):
    os.mkdir("faces")

for file in os.listdir("faces"):
    if os.path.isdir(os.path.join("faces", file)):
        name = file.title()
        for file_2 in os.listdir(os.path.join("faces", file)):
            face_encoding = speculo.predict(speculo.read_image("faces/" + os.path.join(file, file_2)))
            known_face_encodings.append(face_encoding)
            known_face_names.append(name)
    else:
        face_encoding = speculo.predict(speculo.read_image("faces/" + file))
        known_face_encodings.append(face_encoding)
        known_face_names.append("".join(file.split(".")[:-1]).title())


def best_match(f_encoding):
    distances = []
    for known_face_encoding in known_face_encodings:
        distances.append(distance.euclidean(f_encoding, known_face_encoding))
    return known_face_names[int(np.argmin(distances))]


video_capture = cv2.VideoCapture(0)

while True:
    ret, frame = video_capture.read()
    height, width, _ = frame.shape
    small_frame = cv2.resize(frame, (SIZE, SIZE))
    boxes = yolo.detect_image_fast(small_frame)
    for top, left, bottom, right in boxes:
        top = int(top * height / SIZE)
        right = int(right * width / SIZE)
        bottom = int(bottom * height / SIZE)
        left = int(left * width / SIZE)

        face = frame[top:bottom, left:right]
        face = cv2.resize(face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)

        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, best_match(speculo.predict(face)), (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

    cv2.imshow('Video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
