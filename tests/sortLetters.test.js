'use strict';
var expect = require('chai').expect;  // make assertions about the code
var sortLetters = require('../scripts/main.js').sortLetters;

describe('sortLetters', function() {
    it('should exist', function() {
        expect(sortLetters).not.to.be.undefined;
    });

});
