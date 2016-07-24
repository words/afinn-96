/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module afinn-96
 * @fileoverview Test suite for `afinn-96`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var afinn = require('./');

/* Tests. */
test('afinn', function (t) {
  t.equal(afinn.positive, 2);
  t.equal(afinn['fed up'], -3);

  t.end();
});
