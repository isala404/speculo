const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

const server = require('../index');

chai.use(chaiHttp);

describe('App route', ()=>{

    context('Public routes', ()=>{

        it('should get status 200 if valid route', async()=>{

            const result = await chai
            .request(server)
            .get('/');
          expect(result.status).to.equal(200);
        })

        it('should get status 404 if invalid route', async()=>{

          const result = await chai
          .request(server)
          .post('/');
        expect(result.status).to.equal(404);
      })
    })
})