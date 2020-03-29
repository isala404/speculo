import numpy as np
from mongoengine import Document, StringField, ListField, IntField, connect

connect(
    db='face',
    username='user',
    password='4313Samadhi',
    host='mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/speculo'
)

class Face(Document):
    face_id = IntField(required=True)
    face_label = StringField(max_length=50)
    face_matrix = ListField(required=True)


class ImageComparator:
	def __init__(self):
		self._MONGO_URI = ''
	
	def _distance01(self, matrix_one, matrix_two):
		distance_value = np.linalg.norm(matrix_one - matrix_two)
		return distance_value
	
	def _distance02(self, matrix_one, matrix_two):
		return np.sqrt(np.sum((matrix_one - matrix_two) ** 2))
	
	def _compare(self, detected_encoding, known_face_encodings_list):
		indexes = []
		high_matches = []
		
		for index, face_encoding in enumerate(known_face_encodings_list):
			face_distance = self._distance01(detected_encoding, face_encoding)
			print(face_distance)
			if face_distance < 0.6:
				indexes.append(index)
				high_matches.append(face_distance)
		
		if len(indexes) > 0:
			val = indexes[high_matches.index(min(high_matches))] + 1
			return val
		else:
			return len(known_face_encodings_list) + 1
	
	def matrix_matcher(self, matrix):
		saved_matrix = []

		for x in Face.objects:
			saved_matrix.append(x)

		#  saved_matrix[0].face_id will return face_id
		
		identity = self._compare(matrix, saved_matrix)
		data = {'id': identity}
		
		return {'id': '1'}
