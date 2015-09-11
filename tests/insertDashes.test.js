"use strict";
var expect = require("chai").expect;  // make assertions about the code
var insertDashes = require("../scripts/main.js").insertDashes;

describe("insertDashes", function() {
    it("should exist", function() {
        expect(insertDashes).not.to.be.undefined;
    });
    it("should throw an error if object input is specified", function() {
        expect(function() { insertDashes({a:24, b:42}); }).to.throw("Invalid input");
    });
    it("should throw an error if number input is specified", function() {
        expect(function() { insertDashes(42); }).to.throw("Invalid input");
    });
    it("should return a correctly reformatted sentence", function() {
        expect(insertDashes("Never Eat Sour Watermelons")).to.equal("N-e-v-e-r E-a-t S-o-u-r W-a-t-e-r-m-e-l-o-n-s");
    });
    it("should return a correctly reformatted sentence", function() {
        expect(insertDashes("Aaron enjoys Nutella")).to.equal("A-a-r-o-n e-n-j-o-y-s N-u-t-e-l-l-a");
    });
});
