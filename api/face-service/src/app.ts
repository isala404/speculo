import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {Controller} from "./main.controller";
import mongoose from 'mongoose';
import logger from 'morgan';
import {MONGO_URI} from "./constants/face.constants";

class App {
	public app: express.Application;
	public faceController: Controller;

	constructor() {
		this.app = express();
		this.setConfig();
		App.setMongoConfig();

		this.faceController = new Controller(this.app);
	}

	private setConfig() {
		//Allows us to receive requests with data in json format
		this.app.use(bodyParser.json({limit: '50mb'}));

		//Allows us to receive requests with data in x-www-form-urlencoded format
		this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

		//Enables cors
		this.app.use(cors());

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