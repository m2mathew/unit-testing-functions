"use strict";
var expect = require("chai").expect;  // make assertions about the code
var checkData = require("../scripts/main.js").checkData;

describe("checkData", function() {
	it("should exist", function() {
		expect(checkData).not.to.be.undefined;
	});
    it("should return true if the input is \"abc\"", function() {
        expect(checkData("abc")).to.be.true;
    });
    it("should return false if the input is \"abcd\"", function() {
        expect(checkData("abcd")).to.be.false;
    });
    it("should throw an exception if the input is an array", function() {
        expect(function() {checkData(["a"]); }).to.throw("Invalid input");
    });
});
