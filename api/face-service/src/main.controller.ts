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
		this.app.get('/faces', this.faceService.getAllFaces);
		this.app.get('/faces/:id', this.faceService.getFaceById);
		this.app.put('/faces/:id',upload.single('image'), this.faceService.updateFace);
		this.app.delete('/faces', this.faceService.deleteAllFaces);
		this.app.delete('/faces/:id', this.faceService.deleteFaceById);
		this.app.patch('/faces/:id/label', this.faceService.patchLabel);
		this.app.patch('/faces/:id/blacklist', this.faceService.patchBlacklist);
		this.app.patch('/faces/:id/whitelist', this.faceService.patchWhitelist);

		this.app.get('/test', this.faceService.test);
	}
}