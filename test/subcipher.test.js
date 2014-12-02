/* Copyright (c) 2014 Laurent Mignot, MIT License */
"use strict";

// mocha subcipher.test.js to test


var subcipher = require('..')

var assert = require('assert')

describe('basic tests', function(){

  it('initialises with a default key', function(){
    var coder = subcipher();
    assert.equal( coder.key, "XYZABCDEFGHIJKLMNOPQRSTUVW" )
  })

  it('initialises with a given key', function(){
    var coder = subcipher( "TEWZACBDIGHFJKLMNOPQRSXUVY" );
    assert.equal( coder.key, "TEWZACBDIGHFJKLMNOPQRSXUVY" )
  })

  it('encodes a message', function(){
    var coder = subcipher( "TEWZACBDIGHFJKLMNOPQRSXUVY" );
    var message = "This is a top secret MESSAGE, it contains someone's punctuation";
    var encoded = "QDIP IP T QLM PAWOAQ JAPPTBA, IQ WLKQTIKP PLJALKA'P MRKWQRTQILK";

    assert.equal( encoded, coder.encode( message ) )

  })

  it('decodes a message', function(){
    var coder = subcipher( "TEWZACBDIGHFJKLMNOPQRSXUVY" );
    var decoded = "This is a top secret MESSAGE, it contains someone's punctuation";
    var encoded = "QDIP IP T QLM PAWOAQ JAPPTBA, IQ WLKQTIKP PLJALKA'P MRKWQRTQILK";

    assert.equal( decoded.toUpperCase(), coder.decode( encoded ) )

  })

})

