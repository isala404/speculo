import {Request, Response} from "express";
import FormData from 'form-data';
import axios from 'axios';
import * as fs from "fs";
import {Face} from "../models/face";
import {Error, MongooseDocument, Types} from "mongoose";
import {IMAGE_PROCESSOR_URL, COMPARATOR_URL} from "../constants/face.constants";
import {ImageProcessorService} from "./imageProcessorService";

export class FaceService {

	/** This method adds a face to the database. */
	public async addFace(req: Request, res: Response) {
		let file = req.file;

		// split the file name into label and format
		let fileValues = file.originalname.split('.')

		let format = fileValues[1]

		// ignore any file that isn't a png or jpg
		if (format != 'png' && format != 'jpg' && format != 'jpeg') {
			return res.status(500).json({'error': "Invalid image format! It must either be JPG or PNG."})
		}

		console.log("Passed format")

		let fingerprint: number[];

		try {
			fingerprint = await new ImageProcessorService().getFingerprint(file)
		} catch (error) {
			console.error(`There was an error in generating the fingerprint. | ${error}`)
			return res.status(500).json({error: "There was an error in generating the fingerprint for this image."})
		}

		let label = fileValues[0]

		console.log("Passed label " + label)

		let face = new Face({
			'label': label,
			'fingerprints': [fingerprint],
			'blacklisted': false
		});

		try {
			face = await face.save()
		} catch (error) {
			console.log(`There was an error saving the face to the database. | ${error}`);
			return res.status(500).json({error: "There was an error in saving the face to the database."})
		}

		console.log("Successfully saved face to the database.")

		res.status(200).json({id: face._id})

		new ImageProcessorService().sendFaceData(face._id, fingerprint)

		fs.unlinkSync(file.path)
	}


	/** This method will add a face to an existing face by adding it's finerprint to the database */
	public async appendFace(req: Request, res: Response) {
		let id = req.params.id;
		let unknownFaceId = req.query['id'].toString();
		let file = req.file;

		console.log(`${id} | ${unknownFaceId} | ${file.originalname}`)

		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.log("Invalid ID provided.")
			return res.status(500).json({'error': "Invalid ID provided!"})
		}

		if (!unknownFaceId.match("^[0-9a-fA-F]{24}$")) {
			console.log("Invalid ID provided for Unknown Face!")
			return res.status(500).json({'error': "Invalid ID provided for the Unknown Face!"})
		}

		if (!file) {
			console.log("No image file provided!")
			return res.status(500).json({'error': "No image file provided!"})
		}

		let fileValues = file.originalname.split('.')

		let format = fileValues[1]

		if (format != 'png' && format != 'jpg') {
			return res.status(500).json({'error': "Invalid image format! It must either be JPG or PNG."})
		}

		let face;

		face = await Face.findById({_id: id}).exec().catch((error) => {
			console.log(`There was an error in retrieving the face by ID [${id}] | ${error}`)
			return res.status(500).json({error: "There was an error in retrieving the face by ID"})
		});

		if (!face) {
			console.log("The ID provided does not match any faces in the database!")
			return res.status(404).json({error: "The ID provided does not match any faces in the database!"})
		}

		let unknownFace;

		unknownFace = await Face.findById({_id: unknownFaceId}).exec().catch((error) => {
			console.log(`There was an error in retrieving the unknown face by ID [${unknownFaceId}] | ${error}`)
			return res.status(500).json({error: "There was an error in retrieving the unknown face by ID"})
		});

		if (!unknownFace) {
			console.log("The ID provided does not match any unknown faces in the database!")
			return res.status(404).json({"error": "The ID provided does not match any unknown faces in the database!"})
		}

		let fingerprint: number[];

		try {
			fingerprint = await new ImageProcessorService().getFingerprint(file)
		} catch (error) {
			console.error(`There was an error in generating the fingerprint. | ${error}`)
			return res.status(500).json({error: "There was an error in generating the fingerprint for this image."})
		}

		let fingerprints = face.get('fingerprints');
		fingerprints.push(fingerprint)

		face.set("fingerprints", fingerprints)

		Face.updateOne({_id: id}, face, err => {
			if (err) {
				console.log(`There was an error when updating the face | ${err}`)
				return res.status(500).json({"error": "There was an error when updating the face"});
			}

			console.log(`Successfully added the unknown face added to existing face!`);
			res.status(200).json({message: "Successfully added the unknown face added to existing face successfully!"});
		});

		Face.deleteOne({_id: unknownFaceId}, err => {
			if (err) {
				console.log(`There was an error in deleting the unknown face [${unknownFaceId}] | ${err}`)
			} else {
				console.log("Successfully deleted the unknown face from the database!")
			}
		});

		new ImageProcessorService().sendFaceData(id, fingerprint)

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
				console.log(`[DATABASE] No faces in the database.`);
				res.status(200).json({'data': []});
			} else {
				console.log(`[DATABASE] Retrieved all the faces from the database.`);
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

			console.log(`[DATABASE] Retrieved a face by ID from the database.`);
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

							console.log(`[DATABASE] Updated a face by ID from the database.`);
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
				console.log(`[DATABASE] Deleted all the faces from the database.`);
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
				console.log(`[DATABASE] Deleted a face by ID from the database.`);
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
				console.log(`[DATABASE] Patched face label in the database.`);
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
				console.log(`[DATABASE] Patched face blacklist status in the database.`);
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
				console.log(`[DATABASE] Patched face whitelist status in the database.`);
				res.status(200).json({"status": "success"})
			}
		});
	}

	/** This method adds an unknown face to the database */
	public addUnknownFace(req: Request, res: Response) {
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
			console.log(`[DATABASE] Added unknown face to the database.`);
			res.status(201).json({"id": face._id});
		});
	}
}
