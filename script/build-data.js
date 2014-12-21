'use strict';

/*
 * Dependencies.
 */

var fs,
    toJSON;

toJSON = require('plain-text-data-to-json');
fs = require('fs');

/*
 * Data.
 */

var data;

data = toJSON(fs.readFileSync('data/AFINN/AFINN-96.txt', 'utf8'), {
    'delimiter': '\t',
    'forgiving': 'fix'
});

/*
 * Parse.
 */

Object.keys(data).forEach(function (key) {
    data[key] = Number(data[key]);
});

/*
 * Write.
 */

fs.writeFileSync('data/afinn-96.json', JSON.stringify(data, null, 2));
