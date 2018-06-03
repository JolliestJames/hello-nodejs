var expect = require("chai").expect;
var say = require("../app/say");

describe("say", function() {

  describe("hello", function() {
    it("says hello to a name", function() {
      expect(say.helloTo("Fake")).to.equal("Hello Fake");
    });
  });

  describe("the sum", function() {
    it("returns the sum as a string", function() {
      expect(say.theSum(2,2)).equal("4");
    });
  });

  describe("the quotient", function() {
    it("returns the quotient as a string", function() {
      expect(say.theQuotient(4, 2)).to.equal("2");
    });
  })

  describe("the product", function() {
    it("returns the product as a string", function() {
      expect(say.theProduct(4, 4)).to.equal("16");
    });
  })

  describe("the remainder", function() {
    it("returns the remainder as a string", function() {
      expect(say.theRemainder(30, 17)).to.equal("13");
    });
  })

  describe("the difference", function() {
    it("returns the difference as a string", function() {
      expect(say.theDifference(50, 8)).to.equal("42");
    });
  })
  
});