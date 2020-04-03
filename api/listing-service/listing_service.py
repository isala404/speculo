"""listing_service.py: A microservice for the admin panel to blacklist/whitelist faces in the database."""

__author__ = "Akassharjun Shanmugarajah"
__version__ = "0.0.1"
__email__ = "akassharjun@ieee.org"
__status__ = "Testing"

# 3rd party package
import os

from mongoengine import Document, StringField, ListField, BooleanField, connect


class Face(Document):
	id = Document.pk
	label = StringField(max_length=50)
	matrix = ListField(required=True)
	blacklisted = BooleanField(default=False)


class ListingService:
	def __init__(self, face_id):
		self.face_id = face_id
	
	@staticmethod
	def __connect_mongo():
		connect(
			db=os.getenv('DB_NAME'),
			username=os.getenv('DB_USERNAME'),
			password=os.getenv('DB_PASSWORD'),
			host=os.getenv('DB_HOST')
		)
	
	def blacklist(self):
		self.__connect_mongo()
		
		face_object_list = Face.objects(id=self.face_id)
		
		if len(face_object_list) == 0:
			raise Exception(f'Invalid id! {self.face_id}')
		
		face = face_object_list[0]
		
		face.blacklisted = True
		
		face.save()
		
		return face.label.capitalize()
	
	def whitelist(self):
		self.__connect_mongo()
		
		face_object_list = Face.objects(id=self.face_id)
		
		if len(face_object_list) == 0:
			raise Exception(f'Invalid id! {self.face_id}')
		
		face = face_object_list[0]
		
		face.blacklisted = False
		
		face.save()
		
		return face.label.capitalize()
