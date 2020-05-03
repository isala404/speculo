const chai = require('chai');
const { expect } = chai;
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const apiAdapter = require('../../../app/utils/apiAdapter');

var mock = new MockAdapter(axios);
const api = apiAdapter();

describe('Utils',()=>{

    context('API Adapter', ()=>{
        it('should match with mock server status', async()=>{

            mock.onGet("/api").reply(200);

            const result = await api
                .get("/api")
            expect(result.status).to.equal(200);
        })
    })
})