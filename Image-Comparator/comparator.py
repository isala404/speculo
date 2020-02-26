import face_recognition
import numpy as np
import os


#Used to store Image Enocoding matrices that contains face coordinations.
known_face_encodings = []
face_encodings=[]

if not os.path.isdir("faces"): #add images for the detection here, use one jpg for this folder.
    os.mkdir("faces")
if not os.path.isdir("detected"): #add images to be matched here.
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

def distance01(matrix_one, matrix_two): #Algorithm 1 for distance calculation
    distance_value = np.linalg.norm(matrix_one - matrix_two)
    return distance_value

def distance02(matrix_one,matrix_two):  #Algorithm 2 for distance calculation 
    return np.sqrt(np.sum((matrix_one-matrix_two)**2))

def compare(face_encodings_list,known_face_encodings_list):
    for known_encoding in known_face_encodings_list:
        print("*************************************")
        for face_encoding in face_encodings_list:
            face_distance=distance02(known_encoding,face_encoding)
            print(face_distance)
            if face_distance<0.6: #Accurate Range checking, over 6 means not an accurate match.
                print("Match")
            else:
                print("False")
            print("-------------------------------------")



compare(face_encodings,known_face_encodings)
