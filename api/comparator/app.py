import numpy as np
from mongoengine import BooleanField, connect, Document, ListField, StringField

connect(
	db='face',
	username='user',
	password='4313Samadhi',
	host='mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/speculo'
)


class Face(Document):
	face_id = Document.pk
	face_label = StringField(max_length=50)
	face_matrix = ListField(required=True)
	face_blacklisted = BooleanField(default=False)


class ImageComparator:
	def __init__(self):
		self._MONGO_URI = ''
	
	@staticmethod
	def _distance01(matrix_one, matrix_two):
		mat_one = np.array(matrix_one)
		mat_two = np.array(matrix_two)
		distance_value = np.linalg.norm(mat_one - mat_two)
		return distance_value
	
	@staticmethod
	def _distance02(matrix_one, matrix_two):
		mat_one = np.array(matrix_one)
		mat_two = np.array(matrix_two)
		return np.sqrt(np.sum((mat_one - mat_two) ** 2))
	
	def _compare(self, detected_encoding, known_face_encodings_list):
		indexes = []
		high_matches = []
		
		for index, face_encoding in enumerate(known_face_encodings_list):
			face_distance = self._distance01(detected_encoding, face_encoding)

			if face_distance < 0.6:
				indexes.append(index)
				high_matches.append(face_distance)
		
		if len(indexes) > 0:
			val = indexes[high_matches.index(min(high_matches))] + 1
			return val
		else:
			return "Error"
	
	def matrix_matcher(self, matrix):
		matrix = np.array(matrix)
		saved_matrix = []
		saved_names = []
		saved_ids = []
		saved_blacklist = []
		
		for x in Face.objects:
			saved_matrix.append(list(x.face_matrix))
			saved_names.append(list(x.face_label))
			saved_ids.append(list(str(x.face_id)))
			saved_blacklist.append(list(str(x.face_blacklisted)))
		
		#  saved_matrix[0].face_id will return face_id
		
		identity = self._compare(matrix, saved_matrix)
		if identity == "Error":
			
			face_matrix = matrix
			face_label = "Unknown"
			face_blacklist = False
			
			added_face = Face(face_label=face_label, face_matrix=face_matrix, face_blacklisted=face_blacklist)
			added_face.save()
			
			data = {
				'found': False,
				'id': str(added_face.id),
				'name': face_label
			}
		
		else:
			name_label = "".join(saved_names[identity - 1])
			face_id = "".join(saved_ids[identity - 1])
			face_blacklist = "".join(saved_blacklist[identity - 1])
			data = {
				'found': True,
				'id': face_id,
				'name': name_label,
				'blacklist': face_blacklist == "True"
			}
		
		return data
