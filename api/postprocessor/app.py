import requests
import json
import numpy as np
import PIL
from PIL import Image


class ImagePostprocessor:
	def __init__(self, filename):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128, 1)
		self._FACEDETECTOR_ENDPOINT = 'http://localhost:8500/v1/models/facedetector:predict'
		self._FINGERPRINT_ENDPOINT = 'http://localhost:8501/v1/models/fingerprinter:predict'
		self.filename = filename
	
	def _get_faces(self, resized_image):
		body = json.dumps({'instances': np.array(resized_image).tolist()})
		
		response = requests.post(url=self._FACEDETECTOR_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		
		if 'error' in data.keys():
			print(data['error'])
			return data['error']
		
		return data['predictions']
	
	def _get_fingerprint(self, current_face):
		# using old model
		body = json.dumps({'instances': np.reshape(current_face, [-1, 64, 64, 3]).tolist()})
		
		response = requests.post(url=self._FINGERPRINT_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		
		if 'error' in data.keys():
			print("error in retrieving fingerprint")
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
			# (It will not change orginal image)
			im1 = im.crop((left, top, right, bottom))
			
			im1.show()
