"use strict";
var expect = require("chai").expect;  // make assertions about the code
var absVal = require("../scripts/main.js").absVal;

describe("absVal", function() {
    it("should exist", function() {
        expect(absVal).not.to.be.undefined;
    });
    it("should throw an error if string input is specified", function() {
        expect(function() { absVal("abc"); }).to.throw("Invalid input");
    });
    it("should throw an error if object input is specified", function() {
        expect(function() { absVal({a:1,b:2}); }).to.throw("Invalid input");
    });
    it("should throw an error if array input is specified", function() {
        expect(function() { absVal([1,2,3]); }).to.throw("Invalid input");
    });
    it("should work if a positive integer is specified", function() {
        expect(absVal(25)).to.equal(25);
    });
    it("should work if a negative integer is specified", function() {
        expect(absVal(-25)).to.equal(25);
    });
    it("should work if negative zero is specified", function() {
        expect(absVal(-0)).to.equal(0);
    });
});
