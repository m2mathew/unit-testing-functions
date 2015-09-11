"use strict";
var expect = require("chai").expect;  // make assertions about the code
var studentPairs = require("../scripts/main.js").studentPairs;

describe("studentPairs", function() {
    it("should exist", function() {
        expect(studentPairs).not.to.be.undefined;
    });
    it("should throw an error if string input is specified", function() {
        expect(function() { studentPairs("abc"); }).to.throw("Invalid input");
    });
    it("should throw an error if number input is specified", function() {
        expect(function() { studentPairs(42); }).to.throw("Invalid input");
    });
    it("should throw an error if empty input is specified", function() {
        expect(function() { studentPairs() }).to.throw("Invalid input");
    })
    it("should not accept non-array input", function() {
        expect(function() { studentPairs("a") }).to.throw("Invalid input");
    })
    it("should return an array", function() {
        var pairs = studentPairs(["a","b"]);
        expect(pairs).to.be.instanceof(Array);
        expect(pairs.length).to.equal(1);

        var pairs2 = studentPairs(["a","b","c","d"]);
        expect(pairs).to.be.instanceof(Array);
        expect(pairs2.length).to.equal(2);
    });
    it("should not allow non-string students", function() {
        expect(function() { studentPairs([1,2,3]) }).to.throw("Invalid input: student must be a string");
    })
    it("should work with an odd number of students", function() {
        var pairs = studentPairs(["a","b","c","d","e"]);
        expect(pairs.length).to.equal(2);
        expect(pairs[0].length === 3 || pairs[1].length === 3).to.be.true;
    });
});
