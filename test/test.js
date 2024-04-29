var express = require("chai").expect;
const { expect } = require("chai");
var request = require("request");

describe("Get all flowers", function () {
    var url = "http://localhost:3000/api/flowers";
    it("return status 200 to check if api works", function(done){
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        })
    })
});

describe("Insert a flowers", function () {
    var url = "http://localhost:3000/api/flowers";
    it("return status 201 to check if the api works", function(done) {
        request.post(url, {form: {title: "Flower", description: "Beautiful flower", image: "testUrl"}}, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })
});