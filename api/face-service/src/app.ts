import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {FaceController} from "./face.controller";
import mongoose from 'mongoose';
import logger from 'morgan';
import {MONGO_URI} from "./constants/face.constants";

const {MongoMemoryServer} = require('mongodb-memory-server');

/** Express Application */
class App {
	public app: express.Application;
	public faceController: FaceController;

	constructor() {
		this.app = express();
		// configure base express app
		this.setConfig();

		if (process.env.RUN_ENV === 'test') {
			// configure mock database for testing
			this.setTestMongoConfig().then();
		} else {
			// configure mongo db connection
			this.setMongoConfig();
		}

		this.faceController = new FaceController(this.app);
	}

	private setConfig() {
		// allows us to receive requests with data in json format
		this.app.use(bodyParser.json({limit: '50mb'}));

		this.app.use(bodyParser.urlencoded());

		// enables cors
		this.app.use(cors());

		// logs request
		this.app.use(logger("dev"));
	}

	private async setTestMongoConfig() {
		mongoose.Promise = global.Promise;
		const mongoMemoryServer = new MongoMemoryServer();

		const uri = await mongoMemoryServer.getConnectionString();

		const mongooseOpts = {
			useNewUrlParser: true,
			autoReconnect: true,
			reconnectTries: Number.MAX_VALUE,
			reconnectInterval: 1000
		};

		mongoose.connect(uri, mongooseOpts).then(val => {
			if (val) {
				console.log(val)
			}
			console.log(`app.setTestMongoConfig -> Connected to database`)
		}).catch(error => {
			console.log(`app.setTestMongoConfig -> There was an error connecting to the database! | ${error}`)
		})
	}

	private setMongoConfig() {
		mongoose.Promise = global.Promise;

		mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
		}).then(val => {
			if (val) {
				console.log(val)
			}
			console.log(`app.setMongoConfig -> Connected to database`)
		}).catch(error => {
			if (error) {
				console.log(`app.setMongoConfig -> There was an error connecting to the database! | ${error}`)
			}
		});
	}
}

export default new App().app;