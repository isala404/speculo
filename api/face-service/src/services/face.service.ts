import {Request, Response} from "express";
import FormData from 'form-data';
import axios from 'axios';
import * as fs from "fs";
import {Face} from "../models/face";
import {Error, MongooseDocument} from "mongoose";
import {IMAGE_PROCESSOR_URL, COMPARATOR_URL} from "../constants/face.constants";

export class FaceService {

	/** This method adds a face to the database. */
	public addFace(req: Request, res: Response) {
		let file = req.file;

		// open the file in memory
		let fileBuffer = new Buffer(fs.readFileSync(file.path));

		let form = new FormData();

		// append the file to the form data object
		form.append('image', fileBuffer, file.originalname)

		const config = {
			headers: {
				'content-type': `multipart/form-data; boundary=${form.getBoundary()}`
			}
		}

		axios.post(IMAGE_PROCESSOR_URL, form, config)
			.then(function (response) {

				let label = file.originalname.split('.')[0];
				const face = new Face({
					'label': label,
					'blacklisted': false,
					'fingerprints': [response['data']['data']],
					'createdAt': Date.now(),
					'lastUpdated': Date.now()
				});
				// save the face
				face.save((error: Error, face: MongooseDocument) => {
					if (error) {
						res.status(500).json({'error': error.message});
					}

					res.status(201).json({"id": face._id});
				});
			})
			.catch(function (error) {
				console.log(error.message);
				res.sendStatus(500).json({"error": error.message});
			});
		//  delete the file after the request
		fs.unlinkSync(file.path)
	}

	/** This method gets all the faces from the database. */
	public getAllFaces(req: Request, res: Response) {
		let fingerprint = req.query['fingerprint'] == 'true';

		// if the fingerprint is not required then the below condition is passed
		// to avoid retrieving it from the database.
		let fingerprintCondition = fingerprint ? {} : {fingerprints: 0};

		Face.find({}, fingerprintCondition, (error: Error, faces) => {
			if (error) {
				res.send(error);
			}

			if (faces.length === 0) {
				res.status(200).json({'data': []});
			} else {
				res.status(200).json({'data': faces});
			}
		});

	}

	/** This method gets a face by id from the database. */
	public getFaceById(req: Request, res: Response) {
		let id = req.params.id;
		let fingerprint = req.query['fingerprint'] == 'true';

		let fingerprintCondition = fingerprint ? {} : {fingerprints: 0};

		// checking if the client has sent a valid UUID.
		if (id.length != 24) {
			return res.status(404).json({"error": "Invalid ID provided"});
		}

		Face.findOne({_id: id}, fingerprintCondition, (error: Error, face) => {
			if (error) {
				res.send(error);
			}

			if (face === null) {
				return res.status(404).json({"error": "Invalid ID provided"});
			}

			res.status(200).json({'data': face});
		});
	}

	/** This method updates a face by id to the database, if it doesn't exist it will create a new entry */
	public updateFace(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid UUID.
		if (id.length != 24) {
			return res.status(404).json({"error": "Invalid ID provided"});
		}

		let file = req.file;

		let fileBuffer = new Buffer(fs.readFileSync(file.path));

		let form = new FormData();

		form.append('image', fileBuffer, file.originalname)

		const config = {
			headers: {
				'content-type': `multipart/form-data; boundary=${form.getBoundary()}`
			}
		}

		axios.post(IMAGE_PROCESSOR_URL, form, config)
			.then(function (response) {
				const updateFace = {
					'label': file.originalname.split('.')[0],
					'fingerprints': [response['data']['data']],
					'lastUpdated': Date.now()
				}

				Face.findByIdAndUpdate(id, updateFace, {new: true}, function (err, face) {
					if (face) {
						res.status(200).json({"label": face.get("label")});
					} else {
						// if the face doesn't exist, it will create a new entry.
						new Face({
							'label': updateFace['label'],
							'fingerprints': updateFace['fingerprints'],
						}).save((error: Error, face: MongooseDocument) => {
							if (error) {
								res.send(error);
							}

							res.status(201).json({"id": face._id});
						});
					}
				});

			})
			.catch(function (error) {
				res.status(500).json({"status": error.message});
			});

		fs.unlinkSync(file.path)
	}

	/** This method deletes all the faces in the database. */
	public deleteAllFaces(req: Request, res: Response) {
		Face.deleteMany({}, (error => {
			if (error) {
				res.status(500).json({'error': error.message});
			} else {
				res.status(200).json({"status": "success"})
			}
		}));
	}

	/** This method deletes a face by id in the database. */
	public deleteFaceById(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid UUID.
		if (id.length != 24) {
			return res.status(404).json({"error": "Invalid ID provided"});
		}

		Face.deleteOne({_id: id}, (error => {
			if (error) {
				res.status(500).json({'error': error.message});
			} else {
				res.status(200).json({"status": "success"})
			}
		}));
	}

	/** This method patches a face's label in the database. */
	public patchLabel(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid UUID.
		if (id.length != 24) {
			return res.status(404).json({"error": "Invalid ID provided"});
		}

		let label = req.body['label'];

		let face = {
			label: label
		}

		Face.updateOne({_id: id}, face, error => {
			if (error) {
				res.status(500).json({'error': error.message});
			} else {
				res.status(200).json({"status": "success"})
			}
		});
	}

	/** This method patches a face's listing status to blacklisted in the database. */
	public patchBlacklist(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid UUID.
		if (id.length != 24) {
			return res.status(404).json({"error": "Invalid ID provided"});
		}

		let face = {
			blacklisted: true
		}

		Face.updateOne({_id: id}, face, error => {
			if (error) {
				res.status(500).json({'error': error.message});
			} else {
				res.status(200).json({"status": "success"})
			}
		});
	}

	/** This method patches a face's listing status to whitelisted in the database. */
	public patchWhitelist(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid UUID.
		if (id.length != 24) {
			return res.status(404).json({"error": "Invalid ID provided"});
		}

		let face = {
			blacklisted: false
		}

		Face.updateOne({_id: id}, face, error => {
			if (error) {
				res.status(500).json({'error': error.message});
			} else {
				res.status(200).json({"status": "success"})
			}
		});
	}

	public addUnknownFace(req:Request, res:Response) {
		let fingerprint = req.body["fingerprint"];

		const face = new Face({
			'label': "Unknown",
			'blacklisted': false,
			'fingerprints': [fingerprint],
			'createdAt': Date.now(),
			'lastUpdated': Date.now()
		});

		// save the face
		face.save((error: Error, face: MongooseDocument) => {
			if (error) {
				res.status(500).json({'error': error.message});
			}

			res.status(201).json({"id": face._id});
		});
	}
}
