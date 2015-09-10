'use strict';
var expect = require('chai').expect;  // make assertions about the code
var myMin = require('../scripts/main.js').myMin;

describe('myMin', function() {
    it('should exist', function() {
        expect(myMin).not.to.be.undefined;
    });
    it('should throw an error if string input is specified', function() {
        expect(function() { myMin("abc"); }).to.throw("Invalid input");
    });
    it('should throw an error if object input is specified', function() {
        expect(function() { myMin({a:1,b:2}); }).to.throw("Invalid input");
    });
    it('should throw an error if array input is specified', function() {
        expect(function() { myMin([1,2,3]); }).to.throw("Invalid input");
    });
    it('should return the smaller of the two integers', function() {
        expect(myMin(3,1)).to.equal(1);
    });
});
