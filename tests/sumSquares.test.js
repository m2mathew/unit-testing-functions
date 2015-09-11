"use strict";
var expect = require("chai").expect;  // make assertions about the code
var sumSquares = require("../scripts/main.js").sumSquares;

describe("sumSquares", function() {
    it("should exist", function() {
        expect(sumSquares).not.to.be.undefined;
    });
    it("should throw an error if string input is specified", function() {
        expect(function() { sumSquares("abc"); }).to.throw("Invalid input: not a number");
    });
    it("should throw an error if object input is specified", function() {
        expect(function() { sumSquares({a:1, b:2}); }).to.throw("Invalid input: not a number");
    });
    it("should throw an error if object input is specified", function() {
        expect(function() { sumSquares(-2); }).to.throw("Invalid input: must use a positive integer");
    });
    it("should return the sum or square", function() {
        expect(sumSquares(3)).to.equal(14);
    });
    it("should return the sum or square", function() {
        expect(sumSquares(4)).to.equal(30);
    });
    it("should return the sum or square", function() {
        expect(sumSquares(5)).to.equal(55);
    });
});
