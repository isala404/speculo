import asyncio
import pickle
import cv2
from models.facedetector.yolo.yolo import YOLO
from models.fingerprinter.speculo import Speculo
from models.facecomparator.comparator import ImageComparator
import os

SIZE = 256

MODEL_VERSION = 12

yolo = YOLO(draw=False, debug=False)

speculo = Speculo(model_path=f"../../models/fingerprinter/models/{MODEL_VERSION}/Model-v{MODEL_VERSION}.h5", visualize=False,
                  encoder_only=True)

FINGERPRINT_SIZE = speculo.input_shape

comparator = ImageComparator(threshold=550, shape=speculo.output_shape, fingerprints=[], labels=[])

rebuild_cache = True

if os.path.isfile("faces_cache.pkl") and not rebuild_cache:
    print("Loading from the cache")
    file = open("faces_cache.pkl", 'rb')
    known_face_encodings, known_face_names = pickle.load(file)
    file.close()
else:
    print("Processing Faces ....")
    for person_dir in os.listdir("faces"):
        for image in os.listdir(os.path.join("faces", person_dir)):
            im = cv2.imread(os.path.join("faces", person_dir, image))
            im = cv2.resize(im, (512, 512), interpolation=cv2.INTER_AREA)
            boxes = yolo.detect_image_fast(im)
            if len(boxes) == 0:
                print(os.path.join("faces", person_dir, image), "no face found, skipping .....")
                continue
            if len(boxes) >= 2:
                print(os.path.join("faces", person_dir, image), "Found more than one face, skipping .....")
                continue
            top, left, bottom, right = boxes[0]
            face = im[int(top):int(bottom), int(left):int(right)]
            if FINGERPRINT_SIZE[2] == 1:
                face = cv2.cvtColor(face, cv2.COLOR_BGR2GRAY)
            face = cv2.resize(face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)
            face_encoding = speculo.predict(face)
            comparator.add_new_face(face_encoding, person_dir.title())

    # print("caching faces")
    # file = open("faces_cache.pkl", 'wb')
    # pickle.dump([known_face_encodings, known_face_names], file)
    # file.close()

print("Start Detecting .... ")
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
        if not face.any():
            continue
        if FINGERPRINT_SIZE[2] == 1:
            face = cv2.cvtColor(face, cv2.COLOR_BGR2GRAY)
        face = cv2.resize(face, FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)

        font = cv2.FONT_HERSHEY_DUPLEX
        face_encoding = speculo.predict(face)
        loop = asyncio.get_event_loop()
        face_name = loop.run_until_complete(comparator.get_best_match(face_encoding, save=False))

        cv2.putText(frame, face_name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
    cv2.imshow('Video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
