'use strict';

var fs, textToJSON, data;

textToJSON = require('plain-text-data-to-json');
fs = require('fs');

data = textToJSON(fs.readFileSync('data/AFINN/AFINN-96.txt', 'utf8'), {
    'delimiter': '\t',
    'forgiving': 'fix'
});

Object.keys(data).forEach(function (key) {
    data[key] = Number(data[key]);
});

fs.writeFileSync('data/afinn-96.json', JSON.stringify(data));
