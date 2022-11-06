import assert from 'node:assert'
import test from 'node:test'
import {afinn96} from './index.js'

test('afinn', function () {
  assert.equal(afinn96.positive, 2)
  assert.equal(afinn96['fed up'], -3)
})
