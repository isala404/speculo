"""facecomparator.py: Base class for facecomparator"""

__author__ = "Isala Piyarisi"
__version__ = "0.0.2"
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
    def __init__(self, threshold=550, shape=(256,), fingerprints=None, labels=None):
        self.FINGERPRINT_THRESHOLD = int(os.getenv("FINGERPRINT_THRESHOLD", threshold))
        self.COMPARATOR_SHAPE = eval(os.getenv("COMPARATOR_SHAPE", shape))
        self._FACE_SERVICE_ENDPOINT = os.getenv('FACE_SERVICE_URL')
        logging.info(f"FINGERPRINT_THRESHOLD : {self.FINGERPRINT_THRESHOLD}")
        logging.info(f"COMPARATOR_SHAPE : {self.COMPARATOR_SHAPE}")
        # check if fingerprints and labels given
        if labels is None or fingerprints is None:
            # Place holder for fingerprints and names
            self.known_fingerprints = []
            self.known_labels = []

            # Get all the faces in the database using synchronized async function
            loop = asyncio.get_event_loop()
            faces = loop.run_until_complete(self._get_all_faces())

            # format those data as it's required by the model
            for entry in faces:
                for fingerprint in entry['fingerprints']:
                    self.known_fingerprints.append(fingerprint)
                    self.known_labels.append(entry['_id'])
        else:
            self.known_fingerprints = fingerprints
            self.known_labels = labels

        # initiate k nearest neighbor model
        self.model = KNeighborsClassifier(
            n_neighbors=len(set(self.known_labels)))

        if self.known_labels:
            # train the model with current fingerprints and names
            self.model.fit(self.known_fingerprints, self.known_labels)

    async def _get_all_faces(self):
        session = aiohttp.ClientSession()
        headers = {'content-type': 'application/json'}
        # Get all the faces via Face Service from the database
        response = await session.get(self._FACE_SERVICE_ENDPOINT + "?fingerprint=true", headers=headers)
        data = await response.json()

        await session.close()

        # if reason is in the response sent from the Face Service that means something went wrong
        if 'reason' in data.keys():
            logging.error(data['reason'])
            raise Exception("There was an getting all the faces.")

        return data['data']

    async def get_best_match(self, fingerprint, save=True):
        """Find the closes matching label for the fingerprint
        @param fingerprint: fingerprint of the face
        @param save: whether to save the fingerprint to the database if no match is found
        @return: ID of the user or "unknown"
        """
        # Get the most closes fingerprint from the memory to the given fingerprint
        distance, face_idx = self.model.kneighbors(
            [fingerprint], n_neighbors=len(set(self.known_labels)), return_distance=True)
        # print(self.known_labels[face_idx.tolist()[0][0]], distance.tolist()[0][0])
        # Check if the distance between fingerprints is greater than FINGERPRINT_THRESHOLD
        if distance.tolist()[0][0] >= self.FINGERPRINT_THRESHOLD or len(self.known_labels) == 0:
            # Save it as unknown face
            if save:
                return await self._save_unknown_face(fingerprint)
            else:
                return "unknown"

        # return model's outputted name
        return self.known_labels[face_idx.tolist()[0][0]]

    async def _save_unknown_face(self, fingerprint):
        """Save unknown face the database
        @param fingerprint: fingerprint new face
        @return: ID if the new fingerprint
        """
        session = aiohttp.ClientSession()
        headers = {'content-type': 'application/json'}

        body = json.dumps({'fingerprint': np.reshape(
            fingerprint, self.COMPARATOR_SHAPE).tolist()})

        response = await session.post(self._FACE_SERVICE_ENDPOINT + "/unknown", json=body, headers=headers)

        data = await response.json()

        await session.close()

        if 'error' in data.keys():
            logging.error(data['error'])
            raise Exception("There was an error in saving the unknown face.")

        # Remember the new fingerprint with it's ID
        self.add_new_face(fingerprint, data['id'])
        return data['id']

    def add_new_face(self, fingerprint, label):
        """ Remember the new fingerprint with it's ID
        @param fingerprint: fingerprint new face
        @param label: ID of the new face
        @return: whether data was fitted or not
        """
        try:
            # Added the fingerprint current know list of fingerprints
            self.known_fingerprints.append(fingerprint)
            # Added the name current know list of name
            self.known_labels.append(label)

            # retrain the classifier with the new data
            self.model = KNeighborsClassifier(
                n_neighbors=len(set(self.known_labels)))
            self.model.fit(self.known_fingerprints, self.known_labels)
            return True
        except Exception as e:
            logging.error('Error while fitting a new fingerprint')
            logging.exception(e)
            return False
