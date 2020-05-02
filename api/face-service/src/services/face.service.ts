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

		if (!file) {
			console.debug("FaceService.appendFace -> No image file provided!")
			return res.status(404).json({error: "No image file provided!"})
		}

		// split the file name into label and format
		let fileValues = file.originalname.split('.')

		let format = fileValues[fileValues.length - 1]

		// ignore any file that isn't a png or jpg
		if (format != 'png' && format != 'jpg' && format != 'jpeg') {
			console.debug(`FaceService.addFace -> Invalid image provided`)
			return res.status(500).json({error: "Invalid image file! It must either be JPG or PNG."})
		}

		let fingerprint: number[];

		try {
			fingerprint = await new ImageProcessorService().getFingerprint(file)
			// delete the file after it's use
			fs.unlinkSync(file.path)
		} catch (error) {
			console.debug(`FaceService.addFace ->  ${error}`)
			return res.status(500).json({error: "There was an error in generating the fingerprint for this image."})
		}

		let label = fileValues[0]

		let face = new Face({
			'label': label,
			'fingerprints': [fingerprint],
			'blacklisted': false
		});

		try {
			face = await face.save()
		} catch (error) {
			console.debug(`FaceService.addFace -> ${error}`);
			return res.status(500).json({error: "There was an error in saving the face to the database."})
		}

		console.debug("FaceService.addFace -> Successfully saved face to the database.")

		res.status(201).json({id: face._id})

		new ImageProcessorService().sendFaceData(face._id, fingerprint)

	}

	/** This method will add a face to an existing face by adding it's fingerprint to the database */
	public async appendFace(req: Request, res: Response) {
		let id = req.params.id;
		let unknownFaceId = req.query['id'].toString();
		let file = req.file;

		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.appendFace -> Invalid ID provided.")
			return res.status(500).json({error: "Invalid ID provided!"})
		}

		if (!unknownFaceId.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.appendFace -> Invalid ID provided for Unknown Face!")
			return res.status(500).json({error: "Invalid ID provided for the Unknown Face!"})
		}

		if (!file) {
			console.debug("FaceService.appendFace -> No image file provided!")
			return res.status(404).json({error: "No image file provided!"})
		}

		let fileValues = file.originalname.split('.')

		let format = fileValues[1]

		if (format != 'png' && format != 'jpg') {
			console.debug(`FaceService.appendFace -> Invalid image provided`)
			return res.status(500).json({error: "Invalid image format! It must either be JPG or PNG."})
		}

		let face;

		face = await Face.findById({_id: id}).exec().catch((error) => {
			console.debug(`FaceService.appendFace -> ${error}`)
			return res.status(500).json({error: "There was an error in retrieving the face by ID"})
		});

		if (!face) {
			console.debug("FaceService.appendFace -> The ID provided does not match any faces in the database!")
			return res.status(404).json({error: "The ID provided does not match any faces in the database!"})
		}

		let unknownFace;

		unknownFace = await Face.findById({_id: unknownFaceId}).exec().catch((error) => {
			console.debug(`FaceService.appendFace -> ${error}`)
			return res.status(500).json({error: "There was an error in retrieving the unknown face by ID"})
		});

		if (!unknownFace) {
			console.debug("FaceService.appendFace -> The ID provided does not match any unknown faces in the database!")
			return res.status(404).json({"error": "The ID provided does not match any unknown faces in the database!"})
		}

		let fingerprint: number[];

		try {
			fingerprint = await new ImageProcessorService().getFingerprint(file)
			// delete the file after it's use
			fs.unlinkSync(file.path)
		} catch (error) {
			console.debug(`FaceService.appendFace -> ${error}`);
			return res.status(500).json({error: "There was an error in generating the fingerprint for this image."})
		}

		let fingerprints = face.get('fingerprints');
		fingerprints.push(fingerprint)

		face.set("fingerprints", fingerprints)

		Face.updateOne({_id: id}, face, error => {
			if (error) {
				console.debug(`FaceService.appendFace -> ${error}`);
				return res.status(500).json({"error": "There was an error when updating the face"});
			}

			console.debug(`Successfully added the unknown face added to existing face!`);
			res.status(200).json({message: "Successfully added the unknown face added to existing face successfully!"});
		});

		Face.deleteOne({_id: unknownFaceId}, error => {
			if (error) {
				console.debug(`FaceService.appendFace -> ${error}`);
			} else {
				console.debug("Successfully deleted the unknown face from the database!")
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
				console.debug(`FaceService.getAllFaces -> ${error}`);
				res.status(500).json({error: "There was an error in retrieving the faces from the database."});
			}

			if (faces.length === 0) {
				console.debug(`FaceService.getAllFaces -> There are no faces in the database.`);
				res.status(200).json({'data': []});
			} else {
				console.debug(`FaceService.getAllFaces -> Retrieved all the faces from the database.`);
				res.status(200).json({'data': faces});
			}
		});

	}

	/** This method gets a face by id from the database. */
	public getFaceById(req: Request, res: Response) {
		let id = req.params.id;
		let fingerprint = req.query['fingerprint'] == 'true';

		let fingerprintCondition = fingerprint ? {} : {fingerprints: 0};

		// checking if the client has sent a valid ID.
		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.getFaceById -> Invalid ID provided.")
			return res.status(500).json({error: "Invalid ID provided!"})
		}

		Face.findOne({_id: id}, fingerprintCondition, (error: Error, face) => {
			if (error) {
				res.send(error);
			}

			if (!face) {
				return res.status(404).json({error: "Face doesn't exist in the database! Invalid ID!"});
			}

			console.debug(`FaceService.getFaceById -> Retrieved a face by ID from the database.`);
			res.status(200).json({'data': face});
		});
	}

	/** This method updates a face by id to the database, if it doesn't exist it will create a new entry */
	public async updateFace(req: Request, res: Response) {
		let id = req.params.id;
		let file = req.file;

		// checking if the client has sent a valid ID.
		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.updateFace -> Invalid ID provided.")
			return res.status(500).json({error: "Invalid ID provided!"})
		}

		if (!file) {
			console.debug("FaceService.appendFace -> No image file provided!")
			return res.status(404).json({error: "No image file provided!"})
		}

		let fileValues = file.originalname.split('.')

		let format = fileValues[1]

		if (format != 'png' && format != 'jpg') {
			console.debug(`FaceService.appendFace -> Invalid image provided`)
			return res.status(500).json({error: "Invalid image file! It must either be JPG or PNG."})
		}

		let fingerprint: number[];

		try {
			fingerprint = await new ImageProcessorService().getFingerprint(file)
			// delete the file after it's use
			fs.unlinkSync(file.path)
		} catch (error) {
			console.debug(`FaceService.updateFace -> ${error}`);
			return res.status(500).json({error: "There was an error in generating the fingerprint for this image."})
		}

		let label = fileValues[0]

		const updateFace = {
			'label': label,
			'fingerprints': [fingerprint],
			'lastUpdated': Date.now()
		}

		Face.findByIdAndUpdate(id, updateFace, {
			new: true,
		}, function (error, face) {
			if (error) {
				console.debug(`FaceService.updateFace -> ${error}`);
				return res.status(500).json({error: "There was an error in retrieving the face."});
			}
			if (face) {
				console.debug(`FaceService.updateFace -> Face does not exist in the database`);
				res.status(200).json({message: "Successfully updated face in the database!"})
			} else {
				console.debug(`FaceService.updateFace -> Face does not exist in the database`);
				res.status(404).send({error: "Face does not exist in the database"})
			}
		});

		fs.unlinkSync(file.path)
	}

	/** This method deletes all the faces in the database. */
	public deleteAllFaces(req: Request, res: Response) {
		Face.deleteMany({}, (error => {
			if (error) {
				console.debug(`FaceService.updateFace -> ${error}`);
				res.status(500).json({error: "There was an error in deleting all the faces"});
			} else {
				console.debug(`FaceService.updateFace -> Successfully deleted all the faces in the database!"`);
				res.status(200).json({message: "Successfully deleted all the faces in the database!"})
			}
		}));
	}

	/** This method deletes a face by id in the database. */
	public deleteFaceById(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid ID.
		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.deleteFaceById -> Invalid ID provided.")
			return res.status(500).json({error: "Invalid ID provided!"})
		}

		Face.findByIdAndDelete(id, (error => {
			if (error) {
				console.debug(`FaceService.deleteFaceById -> ${error}`);
				res.status(500).json({error: "There was an error in deleting the face by ID."});
			} else {
				console.debug(`FaceService.deleteFaceById -> Successfully deleted the face by ID [${id}] in the database!"`);
				res.status(200).json({message: `Successfully deleted the face by ID in the database!`})
			}
		}));
	}

	/** This method patches a face's label in the database. */
	public patchLabel(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid ID.
		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.patchLabel -> Invalid ID provided.")
			return res.status(500).json({error: "Invalid ID provided!"})
		}

		let label = req.body['label'];

		let face = {
			label: label
		}

		Face.updateOne({_id: id}, face, error => {
			if (error) {
				console.debug(`FaceService.patchLabel -> ${error}`);
				return res.status(500).json({error: error.message});
			}
			console.debug(`FaceService.patchLabel -> Successfully updated label!`);
			return res.status(200).json({message: "Successfully updated label!"})
		});
	}

	/** This method patches a face's listing status to blacklisted in the database. */
	public patchBlacklist(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid ID.
		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.patchBlacklist -> Invalid ID provided.")
			return res.status(500).json({error: "Invalid ID provided!"})
		}

		let face = {
			blacklisted: true
		}

		Face.updateOne({_id: id}, face, error => {
			if (error) {
				console.debug(`FaceService.patchBlacklist -> ${error}`);
				return res.status(500).json({error: error.message});
			}
			console.debug(`FaceService.patchBlacklist -> Successfully patched face blacklist status in the database.`);
			return res.status(200).json({message: "Successfully patched face blacklist status in the database."})

		});
	}

	/** This method patches a face's listing status to whitelisted in the database. */
	public patchWhitelist(req: Request, res: Response) {
		let id = req.params.id;

		// checking if the client has sent a valid ID.
		if (!id.match("^[0-9a-fA-F]{24}$")) {
			console.debug("FaceService.patchWhitelist -> Invalid ID provided.")
			return res.status(500).json({error: "Invalid ID provided!"})
		}

		let face = {
			blacklisted: false
		}

		Face.updateOne({_id: id}, face, error => {
			if (error) {
				console.debug(`FaceService.patchWhitelist -> ${error}`);
				return res.status(500).json({error: error.message});
			}
			console.debug(`FaceService.patchWhitelist -> Successfully patched face whitelist status in the database.`);
			return res.status(200).json({message: "Successfully patched face whitelist status in the database."})
		});
	}

	/** This method adds an unknown face to the database */
	public async addUnknownFace(req: Request, res: Response) {
		let fingerprint = req.body["fingerprint"];

		let face = new Face({
			'label': "Unknown",
			'blacklisted': false,
			'fingerprints': [fingerprint],
			'createdAt': Date.now(),
			'lastUpdated': Date.now()
		});

		// save the face
		try {
			face = await face.save()
		} catch (error) {
			console.debug(`FaceService.addUnknownFace -> ${error}`);
			return res.status(500).json({error: "There was an error when saving the unknown face."});
		}

		console.debug(`FaceService.addUnknownFace -> Successfully saved unknown face to the database!`);
		res.status(201).json({"id": face._id});
	}
}
