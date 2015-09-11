"use strict";
var expect = require("chai").expect;  // make assertions about the code
var fixProperNoun = require("../scripts/main.js").fixProperNoun;

describe("fixProperNoun", function() {
    it("should exist", function() {
        expect(fixProperNoun).not.to.be.undefined;
    });
    it("should take input that is a string", function() {
        expect( function() { fixProperNoun(1)} ).to.throw("Invalid input");
    });
    it("should return a correctly capitalized proper noun", function() {
        expect(fixProperNoun("michael")).to.equal("Michael");
    });
    it("should return a correctly capitalized proper noun", function() {
        expect(fixProperNoun("holLYWooD")).to.equal("Hollywood");
    });
});
