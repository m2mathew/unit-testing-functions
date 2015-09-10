'use strict';
var expect = require('chai').expect;  // make assertions about the code
var mySubstring = require('../scripts/main.js').mySubstring;

describe('mySubstring', function() {
    it('should exist', function() {
        expect(mySubstring).not.to.be.undefined;
    });
    it('should throw an error if object input is specified', function() {
        expect(function() { mySubstring({a:24, b:42}); }).to.throw("Invalid input");
    });
    it('should throw an error if number input is specified', function() {
        expect(function() { mySubstring(42); }).to.throw("Invalid input");
    });

});
