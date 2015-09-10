'use strict';
var expect = require('chai').expect;  // make assertions about the code
var concatenateArrays = require('../scripts/main.js').concatenateArrays;

describe('concatenateArrays', function() {
    it('should exist', function() {
        expect(concatenateArrays).not.to.be.undefined;
    });
    it('should take input that is an array', function() {
        expect(function() {concatenateArrays(1,2)}).to.throw("Invalid input");
    });
    it('should return an array that is a concatenation of the input arrays', function() {
        expect(concatenateArrays([1,2],[3,4])).to.deep.equal([1,2,3,4]);
    });
});
