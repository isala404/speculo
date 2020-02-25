import face_recognition
import cv2
import numpy as np
import os

known_face_encodings = []
face_encodings=[]

if not os.path.isdir("faces"): #add images for the database here
    os.mkdir("faces")
if not os.path.isdir("detected"): #add images to be detected here
    os.mkdir("detected")

for file in os.listdir("faces"):
    face_image = face_recognition.load_image_file("faces/" + file)
    face_encoding = face_recognition.face_encodings(face_image)
    if face_encoding:
            known_face_encodings.append(face_encoding[0])

for file in os.listdir("detected"):
    face_image = face_recognition.load_image_file("detected/" + file)
    face_encoding = face_recognition.face_encodings(face_image)
    if face_encoding:
            face_encodings.append(face_encoding[0])



def compare(face_encodings_list,known_face_encodings_list):
    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
        print(matches)
        print(face_distances)
        print("-------------------------------------")


compare(face_encodings,known_face_encodings)
