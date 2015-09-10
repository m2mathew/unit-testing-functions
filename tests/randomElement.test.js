'use strict';
var expect = require('chai').expect;  // make assertions about the code
var randomElement = require('../scripts/main.js').randomElement;

describe('randomElement', function() {
    it('should exist', function() {
        expect(randomElement).not.to.be.undefined;
    });
    it('should throw an error if string input is specified', function() {
        expect(function() { randomElement("abc"); }).to.throw("Invalid input");
    });
    it('should throw an error if number input is specified', function() {
        expect(function() { randomElement(42); }).to.throw("Invalid input");
    });
    it('should return a random value from given array', function() {
        expect(randomElement([2,4,'a',5])).to.include([2,4,'a',5]);
    });
});
