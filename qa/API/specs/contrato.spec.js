var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
const Joi = require('joi');
const commons = require('../commons');
const contratoSchema = require('../schemas/contrato.schema')

describe("Testes na API de contrato", () =>{
    it("(GET) - Health Test - API de contrato. ",(done) => {
        request(commons.ambiente.urlMarlin)
        .get('/contratos')
        .expect('Content-Type', /json/)
        .end((err, res) =>{
            expect(res.status).to.be.equal(200);
            done();
        });
    });

    it("(GET) - Contract Test - API de contratos. ", (done) =>{
        request(commons.ambiente.urlMarlin)
        .get('/contratos')
        .expect('Content-Type', /json/)
        .end((err, res) =>{
            Joi.assert(res.body, contratoSchema.contratos, 'Error no contrato, contrato fora do acordado',{abortEarly:false})
            done();
        });
    })
})