"""comparator.py: Base class for comparator"""

__author__ = "Isala Piyarisi"
__version__ = "0.0.1"
__email__ = "code@isala.me"
__status__ = "Development"

import asyncio
import json
import logging
import os

import aiohttp
import numpy as np
from sklearn.neighbors import KNeighborsClassifier


class ImageComparator:
    def __init__(self):
        self.FINGERPRINT_THRESHOLD = 30
        self.FINGERPRINT_SHAPE = (64, 64, 3)
        self.COMPARATOR_SHAPE = np.ones(self.FINGERPRINT_SHAPE).reshape([-1]).shape
        self._FACE_SERVICE_ENDPOINT = os.getenv('FACE_SERVICE_URL')

        # Place holder for fingerprints and names
        self.known_face_encodings = []
        self.known_face_names = []

        # Get all the faces in the database using synchronized async function
        loop = asyncio.get_event_loop()
        faces = loop.run_until_complete(self._get_all_faces())

        for entry in faces:
            for fingerprint in entry['fingerprints']:
                self.known_face_encodings.append(fingerprint)
                self.known_face_names.append(entry['_id'])

        # initiate k nearest neighbor model
        self.model = KNeighborsClassifier(
            n_neighbors=len(set(self.known_face_names)))

        if self.known_face_names:
            # train the model with current fingerprints and names
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
        # Get the most closes fingerprint from the memory to the given fingerprint
        distance, face_idx = self.model.kneighbors(
            [f_encoding], n_neighbors=1, return_distance=True)

        # Check if the distance between fingerprints is greater than FINGERPRINT_THRESHOLD
        if distance.tolist()[0][0] >= self.FINGERPRINT_THRESHOLD and len(self.known_face_names) == 0:
            # Save it as unknown face
            return await self._save_unknown_face(f_encoding)

        # return model's outputed name
        return self.known_face_names[face_idx.tolist()[0][0]]

    async def _save_unknown_face(self, fingerprint):
        """Save unknown face the database
        @param fingerprint: fingerprint new face
        @return: ID if the new fingerprint
        """
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

        # Remember the new fingerprint with it's ID
        self.add_new_face(fingerprint, data['id'])
        return data['id']

    def add_new_face(self, fingerprint, user_id):
        """ Remember the new fingerprint with it's ID
        @param fingerprint: fingerprint new face
        @param user_id: ID of the new face
        @return: whether data was fitted or not
        """
        try:
            self.model.fit([fingerprint], [user_id])
            return True
        except Exception as e:
            logging.error('Error while fitting a new fingerprint')
            logging.exception(e)
            return False
