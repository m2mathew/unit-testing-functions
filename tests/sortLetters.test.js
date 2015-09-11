"use strict";
var expect = require("chai").expect;  // make assertions about the code
var sortLetters = require("../scripts/main.js").sortLetters;

describe("sortLetters", function() {
    it("should exist", function() {
        expect(sortLetters).not.to.be.undefined;
    });
    it("should throw an error if number input is specified", function() {
        expect(function() { sortLetters(5); }).to.throw("Invalid input");
    });
    it("should throw an error if object input is specified", function() {
        expect(function() { sortLetters({a:1,b:2}); }).to.throw("Invalid input");
    });
    it("should throw an error if array input is specified", function() {
        expect(function() { sortLetters([1,2,3]); }).to.throw("Invalid input");
    });
    it("should work if a string is returned", function() {
        expect(sortLetters("abcde")).to.equal("abcde");
    });
    it("should work if the string returned is in alphabetical order", function() {
        expect(sortLetters("edcba")).to.equal("abcde");
    });
});
