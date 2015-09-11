"use strict";
var expect = require("chai").expect;  // make assertions about the code
var myMax = require("../scripts/main.js").myMax;

describe("myMax", function() {
    it("should exist", function() {
        expect(myMax).not.to.be.undefined;
    });
    it("should throw an error if string input is specified", function() {
        expect(function() { myMax("abc"); }).to.throw("Invalid input");
    });
    it("should throw an error if number input is specified", function() {
        expect(function() { myMax(42); }).to.throw("Invalid input");
    });
    it("should return the largest integer in the array", function() {
        expect(myMax([1,200,3,5,4])).to.equal(200);
    });
    it("should return the largest integer in the array", function() {
        expect(myMax([4,24,42,19,2])).to.equal(42);
    });
});
