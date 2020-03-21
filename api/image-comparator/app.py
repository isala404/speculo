from flask import Flask, Response, request, jsonify
from flask_pymongo import PyMongo
import numpy as np

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/speculo?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.route('/')
def initial_request():
    return Response(status=200)

@app.route('/test', methods=['POST'])
def initial_request02():
    identity="test"
    data={'id': identity}
    return jsonify(data), 200


@app.route('/api/matrix_matcher', methods=['POST'])
def matrix_matcher():
    
    req_data = request.get_json()
    req_matrix = req_data['instances']  # Matrix send from end point caller
    saved_matrix = []  # saved_matrix array store all matrices from data base
    
    for x in mongo.db.face_matrix.find():
        saved_matrix.append(x)

    identity=compare(req_matrix,saved_matrix)
    data={'id': identity}
    
    return jsonify(data), 200


def distance01(matrix_one, matrix_two):
    distance_value = np.linalg.norm(matrix_one - matrix_two)
    return distance_value

def distance02(matrix_one,matrix_two):   
    return np.sqrt(np.sum((matrix_one-matrix_two)**2))

def compare(detected_encoding,known_face_encodings_list):
    indexes=[]
    highmatches=[]
    
    for index,face_encoding in enumerate(known_face_encodings_list):
        face_distance=distance01(detected_encoding,face_encoding)
        print(face_distance)
        if face_distance<0.6:
            indexes.append(index)
            highmatches.append(face_distance)
                
    if len(indexes)>0:
        val=indexes[highmatches.index(min(highmatches))]+1
        return val
    else:
        return len(known_face_encodings_list)+1
    

if __name__ == '__main__':
    app.run()
