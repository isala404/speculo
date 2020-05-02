import app from '../app';
import * as chai from 'chai';
import 'mocha';
import * as fs from "fs";
import request from "supertest";
import FormData from "form-data";
import '../models/face';
import {IMAGE_PROCESSOR_URL} from "../constants/face.constants";

process.env.NODE_ENV = 'test'
process.removeAllListeners('warning');

const expect = chai.expect

describe('POST /faces', () => {
	it('OK creating a new face works', (done) => {
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/John\ Krassinei.jpg'));

		let formData = new FormData();

		formData.append('image', fileBuffer);

		// console.log(formData.getHeaders())
		console.log(IMAGE_PROCESSOR_URL);

		request(app)
			.post('/api/v1/faces')
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'John Krassiniei.jpg')
			.expect(201)
			.expect(res => {
				expect(res.body).to.contains("id")
			}).end((err) => {
			if (err) return done(err);
			done();
		});
	})
})

//
// describe('POST /faces', () => {
//
// 	it('should return ID', (done) => {
// 		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/John\ Krassinei.jpg'));
//
// 		let formData = new FormData();
// 		formData.append('image', fileBuffer);
//
// 		request(app)
// 			.post('/api/v1/faces')
// 			.type('form')
// 			.attach('image', fileBuffer)
// 			.set(formData.getHeaders())
// 			.expect(201)
// 			.expect('Content-Type', 'application/json')
// 			.end((err) => {
// 				if (err) return done(err);
// 				done();
// 			});
// 	});
//
// 	it('respond with image file not provided', (done) => {
// 		request(app)
// 			.post('/api/v1/faces')
// 			.expect(404)
// 			.expect({"error": "No image file provided!"})
// 			.end((err) => {
// 				if (err) return done(err);
// 				done();
// 			});
// 	});
//
// })