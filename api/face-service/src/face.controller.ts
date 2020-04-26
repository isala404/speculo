import {Application} from 'express';
import {FaceService} from "./services/face.service";
import multer from "multer";

/** Representation of the Face Api Controller */
export class FaceController {
	private faceService: FaceService;

	constructor(private app: Application) {
		this.faceService = new FaceService();
		this.routes();
	}

	public routes() {
		// configuring multer to store files received from form data
		let storage = multer.diskStorage({
			destination: function (req, file, cb) {
				cb(null, './images')
			},
			filename: function (req, file, cb) {
				cb(null, file.originalname)
			}
		});

		const upload = multer({storage}); // multer configuration

		// routes
		this.app.post('/api/v1/faces', upload.single('image'), this.faceService.addFace)
		this.app.get('/api/v1/faces', this.faceService.getAllFaces);
		this.app.get('/api/v1/faces/:id', this.faceService.getFaceById);
		this.app.put('/api/v1/faces/:id', upload.single('image'), this.faceService.updateFace);
		this.app.delete('/api/v1/faces', this.faceService.deleteAllFaces);
		this.app.delete('/api/v1/faces/:id', this.faceService.deleteFaceById);
		this.app.patch('/api/v1/faces/:id/label', this.faceService.patchLabel);
		this.app.patch('/api/v1/faces/:id/blacklist', this.faceService.patchBlacklist);
		this.app.patch('/api/v1/faces/:id/whitelist', this.faceService.patchWhitelist);
	}
}