var expect  = require("chai").expect;
var request = require("request");

describe("Say API", function() {

  describe("saying hello to the user", function() {

    var url = "http://localhost:3000/say/hello?name=fake_name";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("says hello to the user", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("Hello fake_name");
        done();
      });
    });

  });

  describe("saying the sum of two numbers", function() {

    var url = "http://localhost:3000/say/the-sum?left=5&right=37";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("says the sum of two numbers", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("42");
        done();
      });
    });

  });

  describe("saying the quotient of two numbers", function() {

    var url = "http://localhost:3000/say/the-quotient?left=40&right=10";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("says the quotient of two numbers", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("4");
        done();
      });
    });

  });

  describe("saying the product of two numbers", function() {

    var url = "http://localhost:3000/say/the-product?left=5&right=5";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("says the product of two numbers", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("25");
        done();
      });
    });

  });

  describe("saying the difference of two numbers", function() {

    var url = "http://localhost:3000/say/the-difference?left=45&right=3";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("says the difference of two numbers", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("42");
        done();
      });
    });

  });

  describe("saying the remainder of two numbers", function() {

    var url = "http://localhost:3000/say/the-remainder?left=13&right=5";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("says the remainder of two numbers", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("3");
        done();
      });
    });

  });

});
