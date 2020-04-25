import {Request, Response} from "express";
import FormData from 'form-data';
import axios from 'axios';
import * as fs from "fs";
import {Face} from "../models/face";
import {MongooseDocument} from "mongoose";

export class FaceService {
	public test(req: Request, res: Response) {
		return res.status(200).send("Hello World");
	}

	public addFace(req: Request, res: Response) {
		let file = req.file;

		// console.log(file.originalname)
		// var bitmap = fs.readFileSync(file.path);
		// console.log(new Buffer(bitmap).toString('base64'));
		// let b64 = new Buffer(file.path, 'base64');
		// console.log(b64);

		// res.status(200).send("Ok")

		let fileBuffer = new Buffer(fs.readFileSync(file.path));

		let form = new FormData();

		form.append('image', fileBuffer, file.originalname)


		const config = {
			headers: {
				'content-type': `multipart/form-data; boundary=${form.getBoundary()}`
			}
		}
		axios.post('http://localhost:8506/api/v1/fingerprint', form, config)
			.then(function (response) {
				const face = new Face({
					'label': file.originalname.split('.')[0],
					'blacklisted': false,
					'fingerprints': [response['data']['data']],
					'createdAt' : Date.now(),
					'lastUpdated' : Date.now()
				});
				face.save((error: Error, face: MongooseDocument) => {
					if (error) {
						res.send(error);
					}

					res.json(face)
				});
			})
			.catch(function (error) {
				console.log(error.message);
			})
			.then(function () {
				// always executed
			});
	}
}

// // @ts-ignore
// // let file : Files = req.files;
// const files = req.files as { [fieldname: string]: Express.Multer.File[] };
//
// console.log(files.fieldname)
// // console.log(file.image);
// // console.log()
// // console.log(file.image.filename);
// // console.log(file);
//
// // let form = new FormData();
// // // @ts-ignore
// // form.append('image', file.image.file)
// //
// // // let form = new FormData();
// // // // @ts-ignore
// // // file.forEach(({buffer, originalname}) => {
// // // 	form.append('image', buffer, originalname);
// // // });
// //
// // const config = {
// // 	headers: {
// // 		'content-type': 'multipart/form-data'
// // 	}
// // }
// //
// // console.log(form);
// // axios.post('http://localhost:8506/api/v1/fingerprint', form, config)
// // 	.then(function (response) {
// // 		console.log(response.status);
// // 	})
// // 	.catch(function (error) {
// // 		console.log(error.message);
// // 	})
// // 	.then(function () {
// // 		// always executed
// // 	});
//
// // return res.status(200).json({"file": file == undefined ? "no" : "yes"})