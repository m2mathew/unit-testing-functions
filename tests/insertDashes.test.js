'use strict';
var expect = require('chai').expect;  // make assertions about the code
var insertDashes = require('../scripts/main.js').insertDashes;

describe('insertDashes', function() {
    it('should exist', function() {
        expect(insertDashes).not.to.be.undefined;
    });
    it('should throw an error if object input is specified', function() {
        expect(function() { insertDashes({a:24, b:42}); }).to.throw("Invalid input");
    });
    it('should throw an error if number input is specified', function() {
        expect(function() { insertDashes(42); }).to.throw("Invalid input");
    });

});
