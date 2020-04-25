import {Request, Response} from "express";
import FormData from 'form-data';
import axios from 'axios';
import * as fs from "fs";
import {Face} from "../models/face";
import {MongooseDocument} from "mongoose";

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

					res.json({"status": "success"});
				});
			})
			.catch(function (error) {
				console.log(error.message);
				res.sendStatus(200).json({"status": "success"});
			});
	}

	public getAllFaces(req: Request, res: Response) {
		let fingerprint = req.query['fingerprint'] == 'true';

		let fingerprintCondition = fingerprint ? {} : {fingerprints: 0};

		Face.find({}, fingerprintCondition, (error: Error, faces: MongooseDocument) => {
			if (error) {
				res.send(error);
			}
			// if (faces.)
			res.status(200).json({'data': faces});
		});

	}
}
