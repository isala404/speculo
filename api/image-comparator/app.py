import numpy as np
import mongoengine
from mongoengine import connect


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
		
		# kushan
		# for fingerprints in database
		for x in []:
			saved_matrix.append(x)
		
		identity = self._compare(matrix, saved_matrix)
		data = {'id': identity}
		
		return {'id': '1'}
