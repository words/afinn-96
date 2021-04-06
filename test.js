import test from 'tape'
import {afinn96} from './index.js'

test('afinn', function (t) {
  t.equal(afinn96.positive, 2)
  t.equal(afinn96['fed up'], -3)

  t.end()
})
