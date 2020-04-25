import {Request, Response} from "express";
import FormData from 'form-data';
import axios from 'axios';
import * as fs from "fs";
import {Face} from "../models/face";
import {Document, Error, MongooseDocument} from "mongoose";

const FINGERPRINT_GEN = 'http://localhost:8506/api/v1/fingerprint';

export class FaceService {
	public test(req: Request, res: Response) {
		return res.status(200).send("Hello World");
	}

	public addFace(req: Request, res: Response) {
		let file = req.file;

		let fileBuffer = new Buffer(fs.readFileSync(file.path));

		let form = new FormData();

		form.append('image', fileBuffer, file.originalname)

		const config = {
			headers: {
				'content-type': `multipart/form-data; boundary=${form.getBoundary()}`
			}
		}

		axios.post(FINGERPRINT_GEN, form, config)
			.then(function (response) {
				const face = new Face({
					'label': file.originalname.split('.')[0],
					'blacklisted': false,
					'fingerprints': [response['data']['data']],
					'createdAt': Date.now(),
					'lastUpdated': Date.now()
				});
				face.save((error: Error, face: MongooseDocument) => {
					if (error) {
						res.send(error);
					}

					res.status(201).json({"id": face._id});
				});
			})
			.catch(function (error) {
				console.log(error.message);
				res.sendStatus(500).json({"error": error.message});
			});
	}

	public getAllFaces(req: Request, res: Response) {
		let fingerprint = req.query['fingerprint'] == 'true';

		let fingerprintCondition = fingerprint ? {} : {fingerprints: 0};

		Face.find({}, fingerprintCondition, (error: Error, faces) => {
			if (error) {
				res.send(error);
			}

			if (faces.length === 0) {
				res.status(204).json({'data': []});
			} else {
				res.status(200).json({'data': faces});
			}
		});

	}

	public getFaceById(req: Request, res: Response) {
		let id = req.params.id;
		let fingerprint = req.query['fingerprint'] == 'true';

		let fingerprintCondition = fingerprint ? {} : {fingerprints: 0};

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

	public updateFace(req: Request, res: Response) {
		let id = req.params.id;

		let file = req.file;

		let fileBuffer = new Buffer(fs.readFileSync(file.path));

		let form = new FormData();

		form.append('image', fileBuffer, file.originalname)

		const config = {
			headers: {
				'content-type': `multipart/form-data; boundary=${form.getBoundary()}`
			}
		}

		axios.post(FINGERPRINT_GEN, form, config)
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
	}

	public deleteAllFaces(req: Request, res: Response) {
		Face.deleteMany({}, (error => {
			if (error){
				res.status(500).json({'error' : error.message});
			} else {
				res.status(200).json({"status" : "success"})
			}
		}));
	}

	public deleteFaceById(req: Request, res: Response) {
		let id = req.params.id;

		Face.deleteOne({_id : id}, (error => {
			if (error){
				res.status(500).json({'error' : error.message});
			} else {
				res.status(200).json({"status" : "success"})
			}
		}));
	}


}
