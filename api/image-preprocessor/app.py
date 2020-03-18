import cv2
import requests
import json
import numpy as np

SIZE = 192
FINGERPRINT_SIZE = (128, 128, 1)
FINGERPRINT_ENDPOINT = 'http://localhost:8501/v1/models/fingerprinter:predict'
FACEDETECTOR_ENDPOINT = 'http://localhost:8500/v1/models/facedetector:predict'


def get_faces(current_frame):
    body = json.dumps({'instances': current_frame.tolist()})

    response = requests.post(url=FACEDETECTOR_ENDPOINT, data=body)

    data = json.loads(response.text)

    if 'error' in data.keys():
        print("error")
        return 0

    return data['predictions']


def get_fingerprint(current_face):
    # using old model
    body = json.dumps({'instances': np.reshape(current_face, [-1, 64, 64, 3]).tolist()})

    response = requests.post(url=FINGERPRINT_ENDPOINT, data=body)

    data = json.loads(response.text)

    if 'error' in data.keys():
        print("error")
        return 0

    return data['predictions']


video_capture = cv2.VideoCapture('head-pose-face-detection-male.mp4')
ret, frame = video_capture.read()

while ret:
    height, width, _ = frame.shape
    resized_frame = cv2.resize(frame, (SIZE, SIZE))

    boxes = get_faces(resized_frame)

    for top, left, bottom, right in boxes:
        top = int(top * height / SIZE)
        right = int(right * width / SIZE)
        bottom = int(bottom * height / SIZE)
        left = int(left * width / SIZE)

        face = frame[top:bottom, left:right]
        if FINGERPRINT_SIZE[2] == 1:
            face = cv2.cvtColor(face, cv2.COLOR_BGR2RGB)
        face = cv2.resize(face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)

        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        predictions = get_fingerprint(face)

    break
    #     font = cv2.FONT_HERSHEY_DUPLEX
    # speculo.predict(face) --> Fingerprinter API
    # Call fingerprinter api here
    # Best_Match API, send the above response to it. (returns the name)
    # call best match api here
    # cv2.putText(frame, best_match(speculo.predict(face)), (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

    ret, frame = video_capture.read()
