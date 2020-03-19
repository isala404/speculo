from flask import Flask, Response, request
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/speculo?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.route('/')
def initial_request():
    return Response(status=200)


@app.route('/api/matrix_matcher', methods=['POST'])
def matrix_matcher():
    req_data = request.get_json()
    req_matrix = req_data['instances']  # Matrix send from end point caller
    saved_matrix = []  # saved_matrix array store all matrices from data base
    for x in mongo.db.face_matrix.find():
        saved_matrix.append(x)

    # Develop your function here

    return Response(status=200)


if __name__ == '__main__':
    app.run()
