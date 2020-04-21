import os

import cv2
import requests
import json
import numpy as np


class ImagePreprocessor:
	
	def __init__(self):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128, 1)
		self._FACEDETECTOR_ENDPOINT = 'http://localhost:8500/v1/models/facedetector:predict'
		self._FINGERPRINT_ENDPOINT = 'http://localhost:8501/v1/models/fingerprinter:predict'
		self._COMPARATOR_ENDPOINT = 'http://localhost:8502/api/v1/compare'
	
	def _get_faces(self, current_frame):
		body = json.dumps({'instances': current_frame.tolist()})
		
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
			print(data['error'])
			return 0
		
		return data['predictions']
	
	def _get_comparison(self, fingerprint):
		body = json.dumps({'instances': np.reshape(fingerprint, [-1]).tolist()})
		
		response = requests.post(url=self._COMPARATOR_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		print(data)
		
		if 'error' in data.keys():
			print("error in retrieving fingerprint")
			print(data['error'])
			return 0
		
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
	
	@staticmethod
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
	
	def preprocess(self, filename):
		all_detections = []
		
		video_capture = cv2.VideoCapture(f"./videos/{filename}")
		total_frames = self.count_frames(f"./videos/{filename}", override=False)
		
		skip_amount = total_frames * 10 / 100
		next_frame_index = 0
		
		fps = video_capture.get(cv2.CAP_PROP_FPS)
		
		ret, frame = video_capture.read()
		
		while ret:
			height, width, _ = frame.shape
			resized_frame = cv2.resize(frame, (self._SIZE, self._SIZE))
			
			timestamp = round(next_frame_index / fps, 2)
			
			boxes = self._get_faces(current_frame=resized_frame)
			
			print("faces", boxes)
			
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
				
				fingerprint = self._get_fingerprint(current_face=face)
				
				face_data = self._get_comparison(fingerprint=fingerprint)
				
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
			
			print(all_detections)
			
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


