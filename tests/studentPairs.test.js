'use strict';
var expect = require('chai').expect;  // make assertions about the code
var studentPairs = require('../scripts/main.js').studentPairs;

describe('studentPairs', function() {
    it('should exist', function() {
        expect(studentPairs).not.to.be.undefined;
    });
    it('should throw an error if string input is specified', function() {
        expect(function() { studentPairs("abc"); }).to.throw("Invalid input");
    });
    it('should throw an error if number input is specified', function() {
        expect(function() { studentPairs(42); }).to.throw("Invalid input");
    });
    it('should return an array with an index of two', function() {
        expect(randomElement([1,2])).to.equal([1,2]);
    });
});
