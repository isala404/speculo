import app from '../app';
import * as chai from 'chai';
import 'mocha';
import * as fs from "fs";
import request from "supertest";
import FormData from "form-data";
import '../models/face';

process.env.CI='TRUE'
process.env.RUN_ENV = 'test'
process.removeAllListeners('warning');

const expect = chai.expect
let id = ''

describe('POST /faces', () => {

	it('OK creating a new face works', (done) => {
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/John\ Krassinei.jpg'));

		let formData = new FormData();

		formData.append('image', fileBuffer);

		request(app)
			.post('/api/v1/faces')
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'John Krassiniei.jpg')
			.expect(201)
			.end((err, res) => {
				if (err) return done(err);

				expect(res.body)
					.to.be.an.instanceof(Object)
					.that.include.keys(['id'])

				expect(res.body["id"].length == 24)
				id = res.body['id']

				done();
			}).timeout(10000);
	});

	it('respond with image file not provided', (done) => {
		request(app)
			.post('/api/v1/faces')
			.expect(400)
			.expect({"error": "No image file provided!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	});

	it('respond with invalid image provided', (done) => {
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/invalid.txt'));

		let formData = new FormData();

		formData.append('image', fileBuffer);

		request(app)
			.post('/api/v1/faces')
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'invalid.txt')
			.expect(400)
			.expect({error: "Invalid image file! It must either be JPG."})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	});

	it('respond with unacceptable picture', (done) => {
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/unacceptable-pict.png'));

		let formData = new FormData();

		formData.append('image', fileBuffer);

		request(app)
			.post('/api/v1/faces')
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'unacceptable-pict.png')
			.expect(400)
			.expect({error: "Invalid image file! It must either be JPG."})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	});
})

describe('GET /faces', () => {
	it('OK getting all faces works', (done) => {
		request(app)
			.get(`/api/v1/faces`)
			.expect(200)
			.end((err, res) => {
				expect(res.body).is.instanceof(Object)
				expect(res.body['data']).is.instanceOf(Array)
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it('OK getting a face by ID', (done) => {
		request(app)
			.get(`/api/v1/faces/${id}`)
			.expect(200)
			.end((err, res) => {
				expect(res.body).is.instanceof(Object)
				expect(res.body['data']).is.instanceOf(Object)
				if (err) return done(err);
				done();
			});
	})

	it('getting a face by ID responds with invalid ID provided', (done) => {
		const invalidId = 'INVALID_ID';
		request(app)
			.get(`/api/v1/faces/${invalidId}`)
			.expect(400)
			.expect({error: "Invalid ID provided!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it('getting a face by ID responds with invalid ID provided', (done) => {
		const id = '5ead2f0fac79ed001acf841d';

		request(app)
			.get(`/api/v1/faces/${id}`)
			.expect(404)
			.expect({error: "Face doesn't exist in the database! Invalid ID!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})
})

describe('PUT /faces', () => {
	it('OK updating a face works', (done) => {
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/John\ Krassinei.jpg'));
		let formData = new FormData();
		formData.append('image', fileBuffer);

		request(app)
			.put(`/api/v1/faces/${id}`)
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'John Krassiniei.jpg')
			.expect(200)
			.expect({message: "Successfully updated face in the database!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	});

	it('respond with invalid ID provided', (done) => {
		const invalidId = 'INVALID_ID';
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/John\ Krassinei.jpg'));
		let formData = new FormData();
		formData.append('image', fileBuffer);

		request(app)
			.put(`/api/v1/faces/${invalidId}`)
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'John Krassiniei.jpg')
			.expect(400)
			.expect({error: "Invalid ID provided!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	});

	it('respond with invalid image provided', (done) => {
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/invalid.txt'));
		let formData = new FormData();
		formData.append('image', fileBuffer);

		request(app)
			.put(`/api/v1/faces/${id}`)
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'invalid.txt')
			.expect(400)
			.expect({error: "Invalid image file! It must either be JPG."})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	});

	it('respond with unacceptable picture', (done) => {
		let fileBuffer = new Buffer(fs.readFileSync('./src/resources/unacceptable-pict.png'));
		let formData = new FormData();
		formData.append('image', fileBuffer);

		request(app)
			.put(`/api/v1/faces/${id}`)
			.set(formData.getHeaders())
			.attach('image', fileBuffer, 'unacceptable-pict.png')
			.expect(400)
			.expect({error: "Invalid image file! It must either be JPG."})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	});
});

describe('PATCH /faces', () => {
	it('OK patch a face label', (done) => {
		const id = '5ead36f985cff40abe785cfc';

		request(app)
			.patch(`/api/v1/faces/${id}/label`)
			.set({'label': 'NEW LABEL'})
			.expect(200)
			.expect({message: "Successfully updated label!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it('patch a face label responds with invalid ID provided', (done) => {
		const invalidId = 'INVALID_ID';
		request(app)
			.patch(`/api/v1/faces/${invalidId}/label`)
			.expect(400)
			.expect({error: "Invalid ID provided!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it('OK patch a face blacklist status', (done) => {
		const id = '5ead36f985cff40abe785cfc';

		request(app)
			.patch(`/api/v1/faces/${id}/blacklist`)
			.expect(200)
			.expect({message: "Successfully patched face blacklist status in the database."})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it(' patch a face blacklist status responds with invalid ID provided', (done) => {
		const invalidId = 'INVALID_ID';
		request(app)
			.patch(`/api/v1/faces/${invalidId}/blacklist`)
			.expect(400)
			.expect({error: "Invalid ID provided!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it('OK patch a face whitelist status', (done) => {
		const id = '5ead36f985cff40abe785cfc';

		request(app)
			.patch(`/api/v1/faces/${id}/whitelist`)
			.expect(200)
			.expect({message: "Successfully patched face whitelist status in the database."})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it(' patch a face whitelist status responds with invalid ID provided', (done) => {
		const invalidId = 'INVALID_ID';
		request(app)
			.patch(`/api/v1/faces/${invalidId}/whitelist`)
			.expect(400)
			.expect({error: "Invalid ID provided!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})
})

describe('DELETE /faces', () => {
	it('OK deleting a face by ID', (done) => {
		const id = '5ead36f985cff40abe785cfc';

		request(app)
			.delete(`/api/v1/faces/${id}`)
			.expect(200)
			.expect({message: `Successfully deleted the face by ID in the database!`})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it('deleting a face by ID responds with invalid ID provided', (done) => {
		const invalidId = 'INVALID_ID';
		request(app)
			.delete(`/api/v1/faces/${invalidId}`)
			.expect(400)
			.expect({error: "Invalid ID provided!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})

	it('OK deleting all faces works', (done) => {
		request(app)
			.delete(`/api/v1/faces`)
			.expect(200)
			.expect({message: "Successfully deleted all the faces in the database!"})
			.end((err) => {
				if (err) return done(err);
				done();
			}).timeout(10000);
	})
})