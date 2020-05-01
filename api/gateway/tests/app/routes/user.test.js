const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const faker = require('faker');

const server = require('../../../index');

chai.use(chaiHttp);


describe('Users route', ()=>{
    const userSignUp = '/api/v1/user/register';
    const userSignIn = '/api/v1/user/authenticate';
    const adminSignIn = '/api/v1/admin/authenticate';
    const adminSignUp = '/api/v1/user/register';

    context('User signin', () => {
        it('should return error 401 if user email and password empty', async function() {
            this.timeout(50000)
          let user = {};
        
            const result = await chai
              .request(server)
              .post(userSignIn)
              .send(user);


            expect(result.status).to.be.equal(401);

        });

        it('should return error 401 if user password wrong', async function() {
          this.timeout(50000)
        let user = {
          "name": "user",
          "password": "123",
          "email": "wrongmail@example.com"
        };
      
          const result = await chai
            .request(server)
            .post(userSignIn)
            .send(user);


          expect(result.status).to.be.equal(401);

      });
    
        it('should return 200 and our token if valid email and password', async function() {
            this.timeout(50000)
            const preSave = {
                "name": "user",
                "email":'mail@example.com',
                "password": '123',
            };
 
            const result = await chai
              .request(server)
              .post(userSignIn)
              .send(preSave);
    
            expect(result.status).to.be.equal(200);
            expect(result.body).not.to.be.empty;
            expect(result.body.data).to.have.property('token');

        });
      }); 

      context('Admin signin', () => {
        it('should return error 401 if user email and password empty', async function() {
            this.timeout(50000)
          let user = {};
        
            const result = await chai
              .request(server)
              .post(adminSignIn)
              .send(user);


            expect(result.status).to.be.equal(401);

        });

        it('should return error 401 if user password wrong', async function() {
          this.timeout(50000)
        let user = {
          "name": "user",
          "password": "123",
          "email": "wrongmail@example.com"
        };
      
          const result = await chai
            .request(server)
            .post(adminSignIn)
            .send(user);


          expect(result.status).to.be.equal(401);

      });
    
        it('should return 200 and our token if valid email and password', async function() {
            this.timeout(50000)
            const preSave = {
                "name": "user",
                "email":'mail@example.com',
                "password": '123',
            };
 
            const result = await chai
              .request(server)
              .post(adminSignIn)
              .send(preSave);
    
            expect(result.status).to.be.equal(200);
            expect(result.body).not.to.be.empty;
            expect(result.body.data).to.have.property('token');

        });
      }); 

      context('User singup', ()=>{
          it('should return 409 if user already exists', async function(){
              this.timeout(50000)
              const preSave = {
                "name": "user",
                "email":'mail@example.com',
                "password": '123',
              };

              const result = await chai
                .request(server)
                .post(userSignUp)
                .send(preSave);

            expect(result.status).to.be.equal(409);
          });

          it('should return 500 if missing required field', async function(){
              this.timeout(50000)
              const user = {};

              const result = await chai
                .request(server)
                .post(userSignUp)
                .send(user);

            expect(result.status).to.be.equal(500);
          });

          it('should return 200 if user added successfully', async function(){
              this.timeout(50000)
              const user = {
                  'name':faker.name.findName(),
                  'email':faker.internet.email(),
                  'password':faker.internet.password()
              };

              const result = await chai
                .request(server)
                .post(userSignUp)
                .send(user);

              expect(result.status).to.be.equal(200);
              expect(result.body.data).to.deep.equal(user);

          })
      });

      context('Admin singup', ()=>{
        it('should return 409 if user already exists', async function(){
            this.timeout(50000)
            const preSave = {
              "name": "user",
              "email":'mail@example.com',
              "password": '123',
            };

            const result = await chai
              .request(server)
              .post(adminSignUp)
              .send(preSave);

          expect(result.status).to.be.equal(409);
        });

        it('should return 500 if missing required field', async function(){
            this.timeout(50000)
            const user = {};

            const result = await chai
              .request(server)
              .post(adminSignUp)
              .send(user);

          expect(result.status).to.be.equal(500);
        });

        it('should return 200 if user added successfully', async function(){
            this.timeout(50000)
            const user = {
                'name':faker.name.findName(),
                'email':faker.internet.email(),
                'password':faker.internet.password()
            };

            const result = await chai
              .request(server)
              .post(adminSignUp)
              .send(user);

            expect(result.status).to.be.equal(200);
            expect(result.body.data).to.deep.equal(user);

        })
    });
})