import {Request, Response} from "express";
import FormData from 'form-data';
import axios from 'axios';
import * as fs from "fs";
import {IMAGE_PROCESSOR_URL, COMPARATOR_URL} from "../constants/face.constants";

/** A class for all the external service API logic that the face service depends on */
export class ImageProcessorService {

	/** This method consumes the Image Processor endpoint and returns a fingerprint for the image file provided. */
	public async getFingerprint(file: Express.Multer.File): Promise<any> {
		return new Promise((resolve, reject) => {
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

			axios.post(IMAGE_PROCESSOR_URL, form, config).then(function (response) {
				resolve(response['data']['data']);
			}).catch(function (error) {
				console.log(error)
				reject(error)
			});
		});
	}


}