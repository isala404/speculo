import logging
import os

import aiohttp
import cv2
import numpy as np


class ImagePreprocessor:
	
	def __init__(self):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128, 1)
		self._FACEDETECTOR_ENDPOINT = os.getenv('FACEDETECTOR_URL')
		self._FINGERPRINT_ENDPOINT = os.getenv('FINGERPRINTER_URL')
		self._COMPARATOR_ENDPOINT = os.getenv('COMPARATOR_URL')
	
	async def _get_faces(self, current_frame):
		body = {'instances': current_frame.tolist()}
		
		client = aiohttp.ClientSession()
		
		response = await client.post(url=self._FACEDETECTOR_ENDPOINT, json=body)
		
		data = await response.json()
		
		await client.close()
		
		if 'error' in data.keys():
			logging.error("Error in detecting faces")
			return data['error']
		
		return data['predictions']
	
	async def _get_fingerprint(self, current_face):
		# using old model
		body = {'instances': np.reshape(current_face, [-1, 64, 64, 3]).tolist()}
		
		client = aiohttp.ClientSession()
		
		response = await client.post(url=self._FINGERPRINT_ENDPOINT, json=body)
		
		data = await response.json()
		
		await client.close()
		
		if 'error' in data.keys():
			logging.error("Error in generating fingerprint")
			return data['error']
		
		return data['predictions']
	
	async def _get_comparison(self, fingerprint):
		body = {'instances': np.reshape(fingerprint, [-1]).tolist()}
		
		client = aiohttp.ClientSession()
		headers = {'content-type': 'application/json'}
		
		response = await client.post(url=self._COMPARATOR_ENDPOINT, json=body, headers=headers)
		
		data = await response.json(content_type=None)
		
		await client.close()
		
		if data['status'] == 'failed':
			logging.error("Error in compares faces")
			return data['reason']
		
		return data
	
	@staticmethod
	def count_frames_manual(video):
		# initialize the total number of frames read
		total = 0
		# loop over the frames of the video
		while True:
			# grab the current frame
			(grabbed, frame) = video.read()
			
			# check to see if we have reached the end of the
			# video
			if not grabbed:
				break
			# increment the total number of frames read
			total += 1
		# return the total number of frames in the video file
		return total
	
	def count_frames(self, path, override=False):
		# grab a pointer to the video file and initialize the total
		# number of frames read
		video = cv2.VideoCapture(path)
		total = 0
		# if the override flag is passed in, revert to the manual
		# method of counting frames
		if override:
			total = self.count_frames_manual(video)
		else:
			try:
				total = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
			except Exception:
				total = self.count_frames_manual(video)
		return total
	
	async def preprocess(self, filename):
		all_detections = []
		
		video_capture = cv2.VideoCapture(f"./videos/{filename}")
		total_frames = self.count_frames(path=f"./videos/{filename}", override=False)
		
		skip_amount = total_frames * 10 / 100
		next_frame_index = 0
		
		fps = video_capture.get(cv2.CAP_PROP_FPS)
		
		ret, frame = video_capture.read()
		
		while ret:
			height, width, _ = frame.shape
			resized_frame = cv2.resize(frame, (self._SIZE, self._SIZE))
			
			timestamp = round(next_frame_index / fps, 2)
			
			boxes = await self._get_faces(current_frame=resized_frame)
			
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
				
				fingerprint = await self._get_fingerprint(current_face=face)
				
				face_data = await self._get_comparison(fingerprint=fingerprint)
				
				index, entry = self._find_face_by_id(all_detections, face_data['id'])
				
				if index == -1:
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
			
			video_capture.set(cv2.CAP_PROP_POS_FRAMES, next_frame_index)
			ret, frame = video_capture.read()
			
			next_frame_index += skip_amount
		
		os.remove(f"./videos/{filename}")
		return all_detections
	
	@staticmethod
	def _find_face_by_id(lst, value):
		for i, dic in enumerate(lst):
			if dic["id"] == value:
				return i, dic
		return -1, None
