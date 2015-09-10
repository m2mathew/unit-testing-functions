'use strict';
var expect = require('chai').expect;  // make assertions about the code
var sumSquares = require('../scripts/main.js').sumSquares;

describe('sumSquares', function() {
    it('should exist', function() {
        expect(sumSquares).not.to.be.undefined;
    });
    it('should throw an error if string input is specified', function() {
        expect(function() { sumSquares("abc"); }).to.throw("Invalid input");
    });
    it('should throw an error if object input is specified', function() {
        expect(function() { sumSquares({a:1, b:2}); }).to.throw("Invalid input");
    });

});
