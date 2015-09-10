'use strict';
var expect = require('chai').expect;  // make assertions about the code
var findMaxDiff = require('../scripts/main.js').findMaxDiff;

describe('findMaxDiff', function() {
    it('should exist', function() {
        expect(findMaxDiff).not.to.be.undefined;
    });
    it('should throw an error if string input is specified', function() {
        expect(function() { findMaxDiff("abc"); }).to.throw("Invalid input");
    });
    it('should throw an error if number input is specified', function() {
        expect(function() { findMaxDiff(42); }).to.throw("Invalid input");
    });

});
