# afinn-96 [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Easy access to [AFINN-96][afinn96].

AFINN-96 is the lightweight (1468 words/phrases), older, version of
[AFINN-111][afinn111] (2477 words/phrases).

## Installation

[npm][npm-install]:

```bash
npm install afinn-96
```

## Usage

```js
var afinn = require('afinn-96');

afinn.positive; // 2
afinn['fed up']; // -3
```

## API

### `afinn96`

**afinn-96** returns entries to valence ratings (`Object.<string, number>`).

> Note! Be careful when accessing unknown properties on the
> **afinn-96** object, words such as “constructor” or “toString”
> might occur.  It’s recommended to use a `hasOwnProperty` check
> beforehand.

## Musings

Note the AFINN entries are:

*   All lower case;
*   Can contain spaces (cases: `can't stand`, `cashing in`,
    `cool stuff`, `does not work`, `dont like`, `fed up`, `green wash`,
    `green washing`, `messing up`, `no fun`, `not good`, `not working`,
    `right direction`, `screwed up`, `some kind`);
*   Can contain apostrophes (only case: `can't stand`);
*   Can contain dashes (cases: `cover-up`, `made-up`, `short-sighted`,
    `short-sightedness`, `son-of-a-bitch`).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/afinn-96.svg

[travis]: https://travis-ci.org/wooorm/afinn-96

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/afinn-96.svg

[codecov]: https://codecov.io/github/wooorm/afinn-96

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[afinn96]: http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010

[afinn111]: https://github.com/wooorm/afinn-111
