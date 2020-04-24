import logging
import os

import aiohttp
import cv2
import numpy as np
from PIL import Image
from tqdm import tqdm


class ImageProcessor:
	def __init__(self):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128, 1)
		self._FACEDETECTOR_ENDPOINT = os.getenv('FACEDETECTOR_URL')
		self._FINGERPRINT_ENDPOINT = os.getenv('FINGERPRINTER_URL')
		self._COMPARATOR_ENDPOINT = os.getenv('COMPARATOR_URL')
		logging.basicConfig(level=logging.NOTSET)
	
	async def _get_faces(self, resized_image):
		body = {'instances': np.array(resized_image).tolist()}
		
		client = aiohttp.ClientSession()
		
		response = await client.post(url=self._FACEDETECTOR_ENDPOINT, json=body)
		
		data = await response.json()
		
		await client.close()
		
		if 'error' in data.keys():
			logging.error(f"[FACEDETECTOR] {data['error']}")
			raise Exception(data['error'])
		
		return data['predictions']
	
	async def _get_fingerprint(self, face):
		# using old model
		body = {'instances': np.reshape(face, [-1, 64, 64, 3]).tolist()}
		
		client = aiohttp.ClientSession()
		
		response = await client.post(url=self._FINGERPRINT_ENDPOINT, json=body)
		
		data = await response.json()
		
		await client.close()
		
		if 'error' in data.keys():
			logging.error(f"[FINGERPRINTER] {data['error']}")
			raise Exception(data['error'])
		
		return data['predictions']
	
	async def _get_comparison(self, fingerprint):
		body = {'instances': np.reshape(fingerprint, [-1]).tolist()}
		
		client = aiohttp.ClientSession()
		headers = {'content-type': 'application/json'}
		
		response = await client.post(url=self._COMPARATOR_ENDPOINT, json=body, headers=headers)
		
		data = await response.json(content_type=None)
		
		await client.close()
		
		if data['status'] == 'failed':
			logging.error(f"[COMPARATOR] {data['reason']}")
			raise Exception(data['reason'])
		
		return data
	
	@staticmethod
	def count_frames_manual(video):
		total = 0
		
		while True:
			(grabbed, frame) = video.read()
			
			if not grabbed:
				break
			
			total += 1
		
		return total
	
	def count_frames(self, path):
		
		video = cv2.VideoCapture(path)
		total = 0
		
		try:
			total = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
		except Exception:
			total = self.count_frames_manual(video)
		
		return total
	
	@staticmethod
	def _find_face_by_id(lst, value):
		for i, dic in enumerate(lst):
			if dic["id"] == value:
				return i, dic
		return -1, None
	
	async def preprocess(self, filename):
		all_detections = []
		path = "./preprocess-videos/{filename}".format(filename=filename)
		
		video_capture = cv2.VideoCapture(path)
		total_frames = self.count_frames(path)
		
		skip_amount = total_frames * 10 / 100
		next_frame_index = 0
		
		fps = video_capture.get(cv2.CAP_PROP_FPS)
		
		ret, frame = video_capture.read()
		
		while ret:
			# Try, Except block in case if any of the services return a error, so that the whole
			# video won't be skipped.
			try:
				height, width, _ = frame.shape
				resized_frame = cv2.resize(frame, (self._SIZE, self._SIZE))
				
				timestamp = round(next_frame_index / fps, 2)
				
				boxes = await self._get_faces(resized_image=resized_frame)
				logging.info(f'[PREPROCESS] - Received Face Coordinates for Frame #{round(next_frame_index)}')
				
				for top, left, bottom, right in boxes:
					top = int(top * height / self._SIZE)
					right = int(right * width / self._SIZE)
					bottom = int(bottom * height / self._SIZE)
					left = int(left * width / self._SIZE)
					
					face = frame[top:bottom, left:right]
					
					if self._FINGERPRINT_SIZE[2] == 1:
						face = cv2.cvtColor(face, cv2.COLOR_BGR2RGB)
					
					face = cv2.resize(face, self._FINGERPRINT_SIZE[:2], interpolation=cv2.INTER_AREA)
					
					cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
					
					fingerprint = await self._get_fingerprint(face=face)
					logging.info(f'[PREPROCESS] - Received Fingerprint for Frame #{next_frame_index}')
					
					face_data = await self._get_comparison(fingerprint=fingerprint)
					logging.info(f'[PREPROCESS] - Received Face Data for Frame #{next_frame_index}')
					
					index, entry = self._find_face_by_id(all_detections, face_data['id'])
					
					if entry is None:
						all_detections.append({
							'id': face_data['id'],
							'name': face_data['name'],
							'timestamps': [timestamp]
						})
					else:
						timestamps = entry['timestamps']
						timestamps.append(timestamp)
						entry['timestamps'] = timestamps
						all_detections[index] = entry
			except Exception:
				logging.info(f"Frame #{next_frame_index} was skipped due to an error.")
			finally:
				video_capture.set(cv2.CAP_PROP_POS_FRAMES, next_frame_index)
				ret, frame = video_capture.read()
				
				next_frame_index += skip_amount
		
		os.remove(path)
		return all_detections
	
	async def fetch_coordinates(self, filename):
		response = {"faces": []}
		
		im = Image.open("./coordinate-images/{}".format(filename))
		width, height = im.size
		resized_im = im.resize((self._SIZE, self._SIZE))
		
		boxes = await self._get_faces(resized_image=resized_im)
		logging.info(f'[COORDINATES] - Received Coordinates')
		
		for top, left, bottom, right in boxes:
			# Setting the points for cropped image
			top = int(top * height / self._SIZE)
			right = int(right * width / self._SIZE)
			bottom = int(bottom * height / self._SIZE)
			left = int(left * width / self._SIZE)
			
			# Cropped image of above dimension
			face = im.crop((left, top, right, bottom))
			
			# resize the cropped image to the required size
			face = face.resize((self._FINGERPRINT_SIZE[0], self._FINGERPRINT_SIZE[1]), Image.ANTIALIAS)
			
			fingerprint = await self._get_fingerprint(face=face)
			logging.info(f'[COORDINATES] - Received Fingerprint')
			
			face_data = await self._get_comparison(fingerprint=fingerprint)
			logging.info(f'[COORDINATES] - Received Face Data for Frame')
			
			print(face_data['id'])
			print(face_data['name'])
			faces = response["faces"]
			faces.append({
				'id': face_data['id'],
				'label': face_data['name'],
				'blacklisted': face_data['blacklisted'],
			})
			
			response["faces"] = faces
			print(response)
		
		# remove image from the directory
		os.remove(f"./coordinate-images/{filename}")
		
		return response
	
	async def generate_fingerprint(self, filename):
		im = Image.open("./fingerprint-images/{}".format(filename))
		
		width, height = im.size
		
		resized_im = im.resize((self._SIZE, self._SIZE))
		
		boxes = await self._get_faces(resized_image=resized_im)
		
		for top, left, bottom, right in boxes:
			# Setting the points for cropped image
			top = int(top * height / self._SIZE)
			right = int(right * width / self._SIZE)
			bottom = int(bottom * height / self._SIZE)
			left = int(left * width / self._SIZE)
			
			# Cropped image of above dimension
			face = im.crop((left, top, right, bottom))
			
			# resize the cropped image to the required size
			face = face.resize((self._FINGERPRINT_SIZE[0], self._FINGERPRINT_SIZE[1]), Image.ANTIALIAS)
			
			fingerprint = await self._get_fingerprint(face=face)
			logging.info(f'[FINGERPRINT] - Received Fingerprint')
			
			# remove image from the directory
			os.remove(f"./fingerprint-images/{filename}")
			
			return fingerprint
