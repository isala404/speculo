import face_recognition
import cv2
import numpy as np
import os

video_capture = cv2.VideoCapture(0)
fourcc = cv2.VideoWriter_fourcc(*'XVID')
# out = cv2.VideoWriter('output.avi', fourcc, 20.0, (640, 480))

known_face_encodings = []
known_face_names = []
if not os.path.isdir("faces"):
    os.mkdir("faces")

for file in os.listdir("faces"):
    if os.path.isdir(os.path.join("faces", file)):
        name = file.title()
        for file_2 in os.listdir(os.path.join("faces", file)):
            face_image = face_recognition.load_image_file("faces/" + os.path.join(file, file_2))
            face_encoding = face_recognition.face_encodings(face_image)
            if face_encoding:
                known_face_encodings.append(face_encoding[0])
                known_face_names.append(name)
    else:
        face_image = face_recognition.load_image_file("faces/" + file)
        face_encoding = face_recognition.face_encodings(face_image)
        if face_encoding:
            known_face_encodings.append(face_encoding[0])
            known_face_names.append("".join(file.split(".")[:-1]).title())

# Initialize some variables
face_locations = []
face_encodings = []
face_names = []
process_this_frame = True


def save_face(encoding):
    tag = f"Unknown #{len(known_face_names) + 1}"
    known_face_encodings.append(encoding)
    known_face_names.append(tag)
    cv2.imwrite(f"faces/{tag}.jpg", frame)
    return tag


while True:
    # Grab a single frame of video
    ret, frame = video_capture.read()

    # Resize frame of video to 1/4 size for faster face recognition processing
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
    rgb_small_frame = small_frame[:, :, ::-1]

    if process_this_frame:
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        face_names = []
        for face_encoding in face_encodings:
            if known_face_encodings:
                matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
                face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = known_face_names[best_match_index]
                else:
                    name = save_face(face_encoding)
            else:
                name = save_face(face_encoding)
            face_names.append(name)

    process_this_frame = not process_this_frame

    for (top, right, bottom, left), name in zip(face_locations, face_names):
        top *= 4
        right *= 4
        bottom *= 4
        left *= 4

        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

    cv2.imshow('Video', frame)
    # out.write(frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# out.release()
video_capture.release()
cv2.destroyAllWindows()
