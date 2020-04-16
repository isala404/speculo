"""face_service.py: A microservice to perform CRUD operations for Face Data."""

__author__ = "Akassharjun Shanmugarajah"
__version__ = "0.0.1"
__email__ = "akassharjun@ieee.org"
__status__ = "Testing"

import json
import os

from mongoengine import BooleanField, connect, Document, ListField, StringField

from image_processor import ImageProcessor


class Face(Document):
	id = Document.pk
	label = StringField(max_length=50)
	matrix = ListField(required=True)
	blacklisted = BooleanField(default=False)


class FaceService:
	def __init__(self):
		connect(
			db=os.getenv('DB_NAME'),
			username=os.getenv('DB_USERNAME'),
			password=os.getenv('DB_PASSWORD'),
			host=os.getenv('DB_HOST')
		)
	
	async def add_face(self, picture):
		
		# get the label of the face from the filename
		label = picture.split('.')[0]
		
		fingerprint = await ImageProcessor().generate_fingerprint(picture)
		
		# instantiate an object with the face data
		face_data = Face(label=label, matrix=fingerprint, blacklisted=False)
		
		# save the object
		face_data.save()
	
	def get_all_faces(self):
		# gets all the faces from the database,
		# with only the required fields and returns it
		faces = Face.objects.only('id').only('label').only('blacklisted').all()
		
		return json.loads(faces.to_json())
	
	def get_face_by_id(self, face_id):
		if len(face_id) != 24:
			raise Exception("Invalid Face ID Provided")
		
		# gets first face record from the database matching the id
		face = Face.objects(id=face_id).only('id').only('label').only('blacklisted').first()
		
		if face is None:
			raise Exception("Face ID doesn't exist in the database")
		
		return json.loads(face.to_json())
	
	async def update_face(self, face_id, new_picture):
		if len(face_id) != 24:
			raise Exception("Invalid Face ID Provided")
		
		# gets first face record from the database matching the id
		face = Face.objects(id=face_id).first()
		
		# get the label of the face from the filename
		label = new_picture.split('.')[0]
		
		fingerprint = await ImageProcessor().generate_fingerprint(new_picture)
		
		if face is None:
			# if the face doesn't exist, it will create it.
			face_data = Face(label=label, matrix=fingerprint, blacklisted=False)
			face_data.save()
		else:
			face.update(label=label, matrix=fingerprint)
	
	def delete_face(self, face_id):
		if len(face_id) != 24:
			raise Exception("Invalid Face ID Provided")
		
		face = Face.objects(id=face_id).first()
		
		if face is None:
			raise Exception("Face doesn't exist in the database")
		
		label = face.label
		face.delete()
		
		return label
	
	def delete_all_faces(self):
		# deletes all faces in the database
		Face.objects.all().delete()
	
	def label_face(self, face_id, label):
		if len(face_id) != 24:
			raise Exception("Invalid Face ID Provided")
		
		face = Face.objects(id=face_id)
		
		if face is None:
			raise Exception("Face ID doesn't exist in the database")
		
		face.update(label=label)
	
	def blacklist_face(self, face_id):
		if len(face_id) != 24:
			raise Exception("Invalid Face ID Provided")
		
		face = Face.objects(id=face_id).first()
		
		if face is None:
			raise Exception("Face doesn't exist in the database")
		
		face.update(blacklisted=True)
		
		return face.label
	
	def whitelist_face(self, face_id):
		if len(face_id) != 24:
			raise Exception("Invalid Face ID Provided")
		
		face = Face.objects(id=face_id).first()
		
		if face is None:
			raise Exception("Face doesn't exist in the database")
		
		face.update(blacklisted=False)
		
		return face.label
