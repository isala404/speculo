import pickle
import cv2
from facedetector.yolo.yolo import YOLO
from models.fingerprinter.speculo import Speculo
import os
from sklearn.neighbors import KNeighborsClassifier

yolo = YOLO(draw=False, debug=False)

SIZE = 256
FINGERPRINT_SIZE = (128, 128, 1)
MODEL_VERSION = 11
known_face_encodings = []
known_face_names = []
speculo = Speculo(
    model_path=f"../../models/fingerprinter/models/{MODEL_VERSION}/Model-v{MODEL_VERSION}.h5",
    image_size=FINGERPRINT_SIZE, visualize=False)

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
            face_encoding = speculo.predict(face, encoder_only=True)
            known_face_encodings.append(face_encoding)
            known_face_names.append(person_dir.title())
            del im, face, face_encoding
    # print("caching faces")
    # file = open("faces_cache.pkl", 'wb')
    # pickle.dump([known_face_encodings, known_face_names], file)
    # file.close()

n_faces = len(set(known_face_names))
neigh = KNeighborsClassifier(n_neighbors=n_faces)
neigh.fit(known_face_encodings, known_face_names)


def add_new_face(f_encoding, user_face):
    global n_faces, neigh
    print("Adding a face", n_faces)
    name = f"unknown_{n_faces}"
    known_face_encodings.append(f_encoding)
    known_face_names.append(name.title())
    n_faces = len(set(known_face_names))
    neigh = KNeighborsClassifier(n_neighbors=n_faces)
    neigh.fit(known_face_encodings, known_face_names)
    cv2.imwrite(f"faces/{name}.jpg", user_face)
    return name


def best_match(f_encoding):
    distance, face_idx = neigh.kneighbors([f_encoding], n_neighbors=1, return_distance=True)
    print(known_face_names[face_idx.tolist()[0][0]], distance.tolist()[0][0])
    # if distance.tolist()[0][0] >= 30:
    #     return "Unknown"

    return known_face_names[face_idx.tolist()[0][0]]


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
        face_encoding = speculo.predict(face, encoder_only=True)
        face_name = best_match(face_encoding)
        # face_name = neigh.predict([face_encoding])[0]
        cv2.putText(frame, face_name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
    cv2.imshow('Video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
