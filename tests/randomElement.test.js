"use strict";
var expect = require("chai").expect;  // make assertions about the code
var randomElement = require("../scripts/main.js").randomElement;

describe("randomElement", function() {
    it("should exist", function() {
        expect(randomElement).not.to.be.undefined;
    });
    it("should throw an error if string input is specified", function() {
        expect(function() { randomElement("abc"); }).to.throw("Invalid input");
    });
    it("should throw an error if number input is specified", function() {
        expect(function() { randomElement(42); }).to.throw("Invalid input");
    });
    it("should return a an element of an element that is passed in", function() {
        var elements = ["a","b","cc"];
        var randomEl = randomElement;
        expect(elements.indexOf(randomEl)).not.to.be.above(-1);
    });
});
