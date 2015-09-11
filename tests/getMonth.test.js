"use strict";
var expect = require("chai").expect;  // make assertions about the code
var getMonth = require("../scripts/main.js").getMonth;

describe("getMonth", function() {
    it("should exist", function() {
        expect(getMonth).not.to.be.undefined;
    });
    it("should throw an error if string input is specified", function() {
        expect(function() { getMonth("abc"); }).to.throw("Invalid input");
    });
    it("should throw an error if object input is specified", function() {
        expect(function() { getMonth({a:1,b:2}); }).to.throw("Invalid input");
    });
    it("should throw an error if array input is specified", function() {
        expect(function() { getMonth([1,2,3]); }).to.throw("Invalid input");
    });
    it("should throw an error if number outside of 1-12 is specified", function() {
        expect(function() { getMonth(-2); }).to.throw("Invalid input");
    });
    it("should return a month name when the month number is specified", function() {
        expect(getMonth(1)).to.equal("January");
    });
    it("should work if a negative integer is specified", function() {
        expect(getMonth(7)).to.equal("July");
    });
    it("should work if negative zero is specified", function() {
        expect(getMonth(12)).to.equal("December");
    });
});
