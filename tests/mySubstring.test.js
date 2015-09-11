"use strict";
var expect = require("chai").expect;  // make assertions about the code
var mySubstring = require("../scripts/main.js").mySubstring;

describe("mySubstring", function() {
    it("should exist", function() {
        expect(mySubstring).not.to.be.undefined;
    });
    it("should throw an error if object input is specified", function() {
        expect(function() { mySubstring({a:24, b:42}); }).to.throw("Invalid input: input should be a string");
    });
    it("should throw an error if number input is specified", function() {
        expect(function() { mySubstring(42); }).to.throw("Invalid input: input should be a string");
    });
    it("should return a string within the specified range", function() {
        expect(mySubstring("FrontEndDev",1,3)).to.be.equal("ron");
    });
    it("should return a string within the specified range", function() {
        expect(mySubstring("NutellaHabit.com",5,11)).to.be.equal("laHabit");
    });
});
