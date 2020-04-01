#!/usr/bin/env python

"""app.py: A microservice for the admin panel to save new faces to the database."""

__author__ = "Akassharjun Shanmugarajah"
__version__ = "0.0.1"
__email__ = "akassharjun@ieee.org"
__status__ = "Testing"

# standard libraries
import os
from random import randint

# 3rd party packages
import requests
import json
import numpy as np
from PIL import Image, ImageDraw
from mongoengine import Document, StringField, ListField, IntField, connect


class Face(Document):
	face_id = IntField(required=True)
	face_label = StringField(max_length=50)
	face_matrix = ListField(required=True)


class ImagePostprocessor:
	def __init__(self, filename):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128)
		self._FACEDETECTOR_ENDPOINT = 'http://localhost:8500/v1/models/facedetector:predict'
		self._FINGERPRINT_ENDPOINT = 'http://localhost:8501/v1/models/fingerprinter:predict'
		self.filename = filename
	
	def _get_faces(self, resized_image):
		body = json.dumps({'instances': np.array(resized_image).tolist()})
		
		response = requests.post(url=self._FACEDETECTOR_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		
		if 'error' in data.keys():
			print("error in detecting faces")
			return data['error']
		
		return data['predictions']
	
	def _get_fingerprint(self, current_face):
		# using old model
		body = json.dumps({'instances': np.reshape(np.array(current_face), [-1, 64, 64, 3]).tolist()})
		
		response = requests.post(url=self._FINGERPRINT_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		
		if 'error' in data.keys():
			print("error in generating fingerprint")
			return 0
		
		return data['predictions']
	
	def save_face_data(self):
		im = Image.open("./images/{}".format(self.filename))
		
		width, height = im.size
		
		resized_im = im.resize((self._SIZE, self._SIZE))
		
		boxes = self._get_faces(resized_image=resized_im)
		
		for top, left, bottom, right in boxes:
			# Setting the points for cropped image
			top = int(top * height / self._SIZE)
			right = int(right * width / self._SIZE)
			bottom = int(bottom * height / self._SIZE)
			left = int(left * width / self._SIZE)
			
			# Cropped image of above dimension
			face = im.crop((left, top, right, bottom))
			
			# resize the cropped image to the required size
			face = face.resize(self._FINGERPRINT_SIZE, Image.ANTIALIAS)
			
			# to draw a red rectangle outline around the face
			image_drawer = ImageDraw.Draw(face)
			image_drawer.rectangle(((left, top), (right, bottom)), fill=None, outline="red")
			
			fingerprint = self._get_fingerprint(current_face=face)
			
			# connect to the mongodb server
			connect(
				db='face',
				username='user',
				password='4313Samadhi',
				host='mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/speculo'
			)
			
			# retrieve the label of the face from the filename
			face_label = self.filename.split('.')[0]
			
			# instantiate an object with the face data
			face_data = Face(face_id='{}'.format(randint(1, 101)), face_label=face_label, face_matrix=fingerprint)
			
			# save the object
			face_data.save()
			
			# close the image file and remove it from the images directory
			im.close()
			os.remove("./images/{}".format(self.filename))
			
			break
