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
from mongoengine import Document, StringField, ListField, BooleanField, connect


class Face(Document):
	id = Document.pk
	label = StringField(max_length=50)
	matrix = ListField(required=True)
	blacklisted = BooleanField(default=False)


class ImagePostprocessor:
	def __init__(self, filename):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128)
		self._FACEDETECTOR_ENDPOINT = os.getenv("FACEDETECTOR_URL")
		self._FINGERPRINT_ENDPOINT = os.getenv("FINGERPRINTER_URL")
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
				db=os.getenv('DB_NAME'),
				username=os.getenv('DB_USERNAME'),
				password=os.getenv('DB_PASSWORD'),
				host=os.getenv('DB_HOST')
			)
			
			# retrieve the label of the face from the filename
			label = self.filename.split('.')[0]
			
			# instantiate an object with the face data
			face_data = Face(label=label, matrix=fingerprint, blacklisted=False)
			
			# save the object
			face_data.save()
			
			# close the image file and remove it from the images directory
			im.close()
			os.remove("./images/{}".format(self.filename))
			
			break
