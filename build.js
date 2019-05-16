'use strict'

var fs = require('fs')
var https = require('https')
var Transform = require('readable-stream').Transform
var unzip = require('unzip')
var csv = require('csv-streamify')
var wrap = require('wrap-stream')
var join = require('join-stream')
var bail = require('bail')

var endpoint =
  'https://www2.imm.dtu.dk/pubdb/views/edoc_download.php/6010/zip/imm6010.zip'

https.get(endpoint, onresult)

function onresult(res) {
  res
    .resume()
    .pipe(new unzip.Parse())
    .on('error', bail)
    .on('entry', onentry)
}

function onentry(entry) {
  if (entry.path === 'AFINN/AFINN-96.txt') {
    entry
      .pipe(csv({delimiter: '\t', objectMode: true}))
      .pipe(new Transform({objectMode: true, transform: transform}))
      .pipe(join(',\n'))
      .pipe(wrap('{\n', '\n}\n'))
      .pipe(fs.createWriteStream('index.json'))
  } else {
    entry.autodrain()
  }
}

function transform(chunk, encoding, callback) {
  this.push('  "' + chunk[0] + '": ' + chunk[1])
  callback()
}
