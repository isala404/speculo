import asyncio
import json
import logging
import os

import aiohttp
import numpy as np
from sklearn.neighbors import KNeighborsClassifier


class ImageComparator:
	def __init__(self):
		self.FINGERPRINT_THRESHOLD = 1.7
		self.FINGERPRINT_SHAPE = (64, 64, 1)
		self.COMPARATOR_SHAPE = np.ones(self.FINGERPRINT_SHAPE).reshape([-1]).shape
		self._FACE_SERVICE_ENDPOINT = os.getenv('FACE_SERVICE_URL')
		self.known_face_encodings = []
		self.known_face_names = []
		
		loop = asyncio.get_event_loop()
		faces = loop.run_until_complete(self._get_all_faces())
		
		for entry in faces:
			for fingerprint in entry['fingerprints']:
				self.known_face_encodings.append(fingerprint)
				self.known_face_names.append(entry['_id'])
		
		self.model = KNeighborsClassifier(
			n_neighbors=len(set(self.known_face_names)))

		if self.known_face_names:
		    self.model.fit(self.known_face_encodings, self.known_face_names)
	
	async def _get_all_faces(self):
		session = aiohttp.ClientSession()
		headers = {'content-type': 'application/json'}
		
		response = await session.get(self._FACE_SERVICE_ENDPOINT + "?fingerprint=true", headers=headers)
		print(self._FACE_SERVICE_ENDPOINT + "?fingerprint=true")
		data = await response.json()
		
		await session.close()
		
		if 'reason' in data.keys():
			logging.error(data['reason'])
			raise Exception("There was an getting all the faces.")
		
		return data['data']
	
	async def get_best_match(self, f_encoding):
		distance, face_idx = self.model.kneighbors(
			[f_encoding], n_neighbors=1, return_distance=True)
		
		if distance.tolist()[0][0] >= self.FINGERPRINT_THRESHOLD and len(self.known_face_names) == 0:
			return await self._save_unknown_face(f_encoding)
		
		return self.known_face_names[face_idx.tolist()[0][0]]
	
	async def _save_unknown_face(self, fingerprint):
		session = aiohttp.ClientSession()
		headers = {'content-type': 'application/json'}
		
		body = json.dumps({'fingerprint': np.reshape(
			fingerprint, self.FINGERPRINT_SHAPE).tolist()})
		
		response = await session.post(self._FACE_SERVICE_ENDPOINT + "/unknown", json=body, headers=headers)
		
		data = await response.json()
		
		await session.close()
		
		if 'error' in data.keys():
			logging.error(data['error'])
			raise Exception("There was an error in saving the unknown face.")
		# TODO: Check if ths works properly
		self.model.fit([fingerprint], [data['id']])
		return data['id']
	
	def add_new_face(self, fingerprint, user_id):
		try:
			self.model.fit([fingerprint], [user_id])
			return True
		except Exception as e:
			logging.error('Error while fitting a new fingerprint')
			logging.exception(e)
			return False
