import face_recognition
import numpy as np
import os


class Speculo:
    def __init__(self):
        self.known_face_encodings = []
        self.known_face_names = []
        if not os.path.isdir("faces"):
            os.mkdir("faces")

        for file in os.listdir("faces"):
            if os.path.isdir(os.path.join("faces", file)):
                name = file.title()
                for file_2 in os.listdir(os.path.join("faces", file)):
                    face_image = face_recognition.load_image_file("faces/" + os.path.join(file, file_2))
                    face_encoding = face_recognition.face_encodings(face_image)
                    if face_encoding:
                        self.known_face_encodings.append(face_encoding[0])
                        self.known_face_names.append(name)
            else:
                face_image = face_recognition.load_image_file("faces/" + file)
                face_encoding = face_recognition.face_encodings(face_image)
                if face_encoding:
                    self.known_face_encodings.append(face_encoding[0])
                    self.known_face_names.append("".join(file.split(".")[:-1]).title())

    def predict(self, frame):
        face_names = []
        faces = []

        image_array = np.array(frame)

        face_locations = face_recognition.face_locations(image_array)
        face_encodings = face_recognition.face_encodings(image_array, face_locations)

        for face_encoding in face_encodings:
            if self.known_face_encodings:
                matches = face_recognition.compare_faces(self.known_face_encodings, face_encoding)
                face_distances = face_recognition.face_distance(self.known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    # noinspection PyTypeChecker
                    name = self.known_face_names[best_match_index]
                else:
                    name = self.save_face(face_encoding, frame)
            else:
                name = self.save_face(face_encoding, frame)
            face_names.append(name)

        for (top, right, bottom, left), name in zip(face_locations, face_names):
            faces.append({"name": name, "cords": [(top, right), (bottom, left)]})

        return faces

    def save_face(self, face_encoding, frame):
        name = f"Unknown #{len(self.known_face_names) + 1}"
        self.known_face_encodings.append(face_encoding)
        self.known_face_names.append(name)
        frame.save(f"faces/{name}.jpg", "JPEG")
        return name
