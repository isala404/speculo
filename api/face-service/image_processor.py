import json
import os

import numpy as np
import requests
from PIL import Image, ImageDraw


class ImageProcessor:
	def __init__(self):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128)
		self._FACEDETECTOR_ENDPOINT = os.getenv("FACEDETECTOR_URL")
		self._FINGERPRINT_ENDPOINT = os.getenv("FINGERPRINTER_URL")
	
	def _get_faces(self, resized_image):
		body = json.dumps({'instances': np.array(resized_image).tolist()})
		
		response = requests.post(url=self._FACEDETECTOR_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		
		if 'error' in data.keys():
			print("error in detecting faces")
			return data['error']
		
		return data['predictions']
	
	def _get_fingerprint(self, current_face):
		# using the old model
		body = json.dumps({'instances': np.reshape(np.array(current_face), [-1, 64, 64, 3]).tolist()})
		
		response = requests.post(url=self._FINGERPRINT_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		
		if 'error' in data.keys():
			print("error in generating fingerprint")
			return 0
		
		return data['predictions']
	
	def generate_fingerprint(self, filename):
		im = Image.open("./images/{}".format(filename))
		
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
			
			# close the image file and remove it from the images directory
			im.close()
			os.remove("./images/{}".format(filename))
			
			return fingerprint
