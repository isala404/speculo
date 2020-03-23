import cv2
import requests
import json
import numpy as np


class ImagePreprocessor:

    def __init__(self, filename):
        self._SIZE = 192
        self._FINGERPRINT_SIZE = (128, 128, 1)
        self._FINGERPRINT_ENDPOINT = 'http://localhost:8501/v1/models/fingerprinter:predict'
        self._FACEDETECTOR_ENDPOINT = 'http://localhost:8500/v1/models/facedetector:predict'
        self.filename = 'head-pose-face-detection-male.mp4'

    def _get_faces(self, current_frame):
        body = json.dumps({'instances': current_frame.tolist()})

        response = requests.post(url=self._FACEDETECTOR_ENDPOINT, data=body)

        data = json.loads(response.text)

        if 'error' in data.keys():
            print("error")
            return 0

        return data['predictions']

    def _get_fingerprint(self, current_face):
        # using old model
        # np.reshape(current_face, [-1, 64, 64, 3]).tolist()
        body = json.dumps({'instances': np.reshape(current_face, [-1, 64, 64, 3]).tolist()})

        response = requests.post(url=self._FINGERPRINT_ENDPOINT, data=body)

        data = json.loads(response.text)

        print(data)

        if 'error' in data.keys():
            print("error in retrieving fingerprint")
            return 0

        return data['predictions']

    def _get_bestmatch(self, val):
        pass

    def preprocess(self):
        value = []
        video_capture = cv2.VideoCapture(self.filename)
        fps = video_capture.get(cv2.CAP_PROP_FPS)
        ret, frame = video_capture.read()
        count = 0

        while ret:
            height, width, _ = frame.shape
            resized_frame = cv2.resize(frame, (self._SIZE, self._SIZE))

            print("time stamp current frame:", count / fps)

            boxes = self._get_faces(resized_frame)

            for top, left, bottom, right in boxes:
                top = int(top * height / self._SIZE)
                right = int(right * width / self._SIZE)
                bottom = int(bottom * height / self._SIZE)
                left = int(left * width / self._SIZE)

                face = frame[top:bottom, left:right]

                if self._FINGERPRINT_SIZE[2] == 1:
                    face = cv2.cvtColor(face, cv2.COLOR_BGR2RGB)

                face = cv2.resize(face, self._FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)

                cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

                predictions = self._get_fingerprint(face)

                print(predictions)

            # font = cv2.FONT_HERSHEY_DUPLEX
            # Best_Match API, send the above response to it. (returns the name)
            # call best match api here

            # cv2.putText(frame, best_match(speculo.predict(face)),
            # (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

            ret, frame = video_capture.read()
            count += 1
