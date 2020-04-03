import cv2
import requests
import json
import numpy as np


class ImagePreprocessor:
	
	def __init__(self, filename):
		self._SIZE = 192
		self._FINGERPRINT_SIZE = (128, 128, 1)
		self._FACEDETECTOR_ENDPOINT = 'http://localhost:8500/v1/models/facedetector:predict'
		self._FINGERPRINT_ENDPOINT = 'http://localhost:8501/v1/models/fingerprinter:predict'
		self._COMPARATOR_ENDPOINT = 'http://localhost:8502/api/v1/compare'
		self.filename = filename
		self.not_found = []
		self.unknown_face_count = 0
	
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
			return 0
		
		return data['predictions']
	
	def _get_comparison(self, fingerprint):
		body = json.dumps({'instances': np.reshape(fingerprint, [-1]).tolist()})
		
		response = requests.post(url=self._COMPARATOR_ENDPOINT, data=body)
		
		data = json.loads(response.text)
		print(data)
		
		if 'error' in data.keys():
			print("error in retrieving fingerprint")
			return 0
		
		return data
	
	def preprocess(self):
		all_detections = []
		
		video_capture = cv2.VideoCapture(self.filename)
		
		# video_capture.set(cv2.CAP_PROP_FPS, 30)
		time = video_capture.get(cv2.CAP_PROP_POS_MSEC)
		fps = video_capture.get(cv2.CAP_PROP_FPS)
		total_frames = (video_capture.get(cv2.CAP_PROP_FRAME_COUNT))
		print("time", time, "fps", fps, "total frames", total_frames)
		print(total_frames/fps)
		
		ret, frame = video_capture.read()
		
		skip_frame = fps / 3
		skip_frame_number = skip_frame
		
		count = 0
		
		while ret:
			skip_frame_number += skip_frame
			print(skip_frame_number)
			
			height, width, _ = frame.shape
			resized_frame = cv2.resize(frame, (self._SIZE, self._SIZE))

			timestamp = count / fps
			print(f"TIMESTAMP: {timestamp}")

			boxes = self._get_faces(current_frame=resized_frame)
			print(boxes)

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

				print(fingerprint)

				face_data = self._get_comparison(fingerprint=fingerprint)

				index, entry = self._find(all_detections, face_data['id'])

				print(face_data)

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

			video_capture.set(cv2.CAP_PROP_POS_FRAMES, skip_frame_number)
			ret, frame = video_capture.read()
			count += 1
		
		print("count", count)
		return all_detections
	
	@staticmethod
	def _find(lst, value):
		for i, dic in enumerate(lst):
			if dic["id"] == value:
				return i, dic
		return -1, None


ImagePreprocessor(filename='small.mp4').preprocess()
