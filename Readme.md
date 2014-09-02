# afinn-96 [![Build Status](https://travis-ci.org/wooorm/afinn-96.svg?branch=master)](https://travis-ci.org/wooorm/afinn-96) [![Coverage Status](https://img.shields.io/coveralls/wooorm/afinn-96.svg)](https://coveralls.io/r/wooorm/afinn-96?branch=master)

Easy access to [AFINN-96](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010).

AFINN-96 is the lightweight (1468 words/phrases), older, version of [AFINN-111](https://github.com/wooorm/afinn-111) (2477 words/phrases).

## Installation

npm:
```sh
$ npm install afinn-96
```

Component:
```sh
$ component install wooorm/afinn-96
```

Bower:
```sh
$ bower install afinn-96
```

## Usage

```js
var afinn = require('afinn-96');

afinn.positive; // 2
afinn['fed up']; // -3

afinn.unicorn; // undefined
afinn.unicorn = Infinity;
afinn.unicorn; // Infinity
```

> Note! Be careful when accessing unknown properties on the **afinn-96** object, words such as “constructor” or “toString” might occur.
> It’s recommended to use a `hasOwnProperty` check beforehand.

## API

**afinn-96** returns the AFINN word list as a javascript object.

## Supported words

**afinn-96** supports all AFINN-96 words/phrases. For a complete list, check out [Supported-words.md](Supported-words.md).

Note the AFINN entries are:

- All lower case;
- Can contain spaces (cases: `can't stand`, `cashing in`, `cool stuff`, `does not work`, `dont like`, `fed up`, `green wash`, `green washing`, `messing up`, `no fun`, `not good`, `not working`, `right direction`, `screwed up`, `some kind`);
- Can contain apostrophes (only case: `can't stand`);
- Can contain dashes (cases: `cover-up`, `made-up`, `short-sighted`, `short-sightedness`, `son-of-a-bitch`);

## License

### Data

The database (`data/AFINN-96.txt`), is licensed under ODbL;

> This database of words is copyright protected and distributed under
> "Open Database License (ODbL) v1.0"
> http://www.opendatacommons.org/licenses/odbl/1.0/ or a similar
> copyleft license.

### Everything else

MIT © Titus Wormer
