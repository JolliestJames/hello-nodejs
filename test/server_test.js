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

});
