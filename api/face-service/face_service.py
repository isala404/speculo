"""face_service.py: A microservice to perform CRUD operations for Face Data."""

__author__ = "Akassharjun Shanmugarajah"
__version__ = "0.0.1"
__email__ = "akassharjun@ieee.org"
__status__ = "Testing"

import json
import os

from mongoengine import Document, StringField, ListField, BooleanField, connect


class Face(Document):
	id = Document.pk
	label = StringField(max_length=50)
	matrix = ListField(required=True)
	blacklisted = BooleanField(default=False)
	
	def return_dict(self):
		dict = {
			'id': self.id,
			'label': self.label
		}


class FaceService:
	def __init__(self):
		connect(
			db=os.getenv('DB_NAME'),
			username=os.getenv('DB_USERNAME'),
			password=os.getenv('DB_PASSWORD'),
			host=os.getenv('DB_HOST')
		)
	
	def get_all_faces(self):
		# gets all the faces from the database,
		# with only the required fields and returns it
		faces = Face.objects.only('id').only('label').only('blacklisted')
		return json.loads(faces.to_json())
	
	def add_face(self, label):
		pass
	
	def update_face(self, label):
		pass
	
	def delete_face(self, face_id):
		pass
	
	def blacklist_face(self, face_id):
		pass
	
	def whitelist_face(self, face_id):
		pass
