'use strict';
var expect = require('chai').expect;  // make assertions about the code
var absVal = require('../scripts/main.js').absVal;

describe('absVal', function() {
    it('should exist', function() {
        expect(absVal).not.to.be.undefined;
    });

});
