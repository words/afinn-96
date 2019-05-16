'use strict'

var test = require('tape')
var afinn = require('.')

test('afinn', function(t) {
  t.equal(afinn.positive, 2)
  t.equal(afinn['fed up'], -3)

  t.end()
})
