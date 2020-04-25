import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {FaceController} from "./face.controller";
import mongoose from 'mongoose';
import logger from 'morgan';
import {MONGO_URI} from "./constants/face.constants";

/** Express Application */
class App {
	public app: express.Application;
	public faceController: FaceController;

	constructor() {
		this.app = express();
		// configure base express app
		this.setConfig();
		// configure mongo db connection
		App.setMongoConfig();

		this.faceController = new FaceController(this.app);
	}

	private setConfig() {
		// allows us to receive requests with data in json format
		this.app.use(bodyParser.json());

		// allows us to receive requests with data in x-www-form-urlencoded format
		this.app.use(bodyParser.urlencoded());

		// enables cors
		this.app.use(cors());

		// logs request
		this.app.use(logger("dev"));
	}

	private static setMongoConfig() {
		mongoose.Promise = global.Promise;

		mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
		});
	}
}

export default new App().app;