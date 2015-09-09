'use strict';
var expect = require('chai').expect;  // make assertions about the code
var fixProperNoun = require('../scripts/main.js').fixProperNoun;

describe('fixProperNoun', function() {
    it('should exist', function() {
        expect(fixProperNoun).not.to.be.undefined;
    });

});
