import {Application} from 'express';
import {FaceService} from "./services/face.service";
import multer from "multer";

export class Controller {
	private faceService: FaceService;

	constructor(private app: Application) {
		this.faceService = new FaceService();
		this.routes();
	}

	public routes() {
		let storage = multer.diskStorage({
			destination: function (req, file, cb) {
				cb(null, './images')
			},
			filename: function (req, file, cb) {
				cb(null, file.originalname)
			}
		});
		const upload = multer({storage}); // multer configuration

		this.app.post('/faces', upload.single('image'), this.faceService.addFace)
		this.app.route('/').get(this.faceService.test);
	}
}