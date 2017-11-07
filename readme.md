# afinn-96 [![Build Status][travis-badge]][travis]

Easy access to [AFINN-96][afinn96].

AFINN 96 is the lightweight (1468 words/phrases), older, version of
[AFINN 165][afinn165] (3382 words/phrases).

## Installation

[npm][]:

```bash
npm install afinn-96
```

## Usage

```js
var afinn = require('afinn-96');

afinn.positive; //=> 2
afinn['fed up']; //=> -3
```

## API

### `afinn96`

**afinn-96** returns entries to valence ratings (`Object.<string, number>`).

> Note!  Be careful when accessing unknown properties on the
> **afinn-96** object, words such as “constructor” or “toString”
> might occur.  It’s recommended to use a `hasOwnProperty` check
> beforehand.

## Musings

Note the AFINN entries are:

*   All lower case
*   Can contain spaces (cases: `can't stand`, `cashing in`,
    `cool stuff`, `does not work`, `dont like`, `fed up`, `green wash`,
    `green washing`, `messing up`, `no fun`, `not good`, `not working`,
    `right direction`, `screwed up`, `some kind`)
*   Can contain apostrophes (only case: `can't stand`)
*   Can contain dashes (cases: `cover-up`, `made-up`, `short-sighted`,
    `short-sightedness`, `son-of-a-bitch`)

## Related

*   [`afinn-111`](https://github.com/words/afinn-111)
    — AFINN list from 2011, containing 2477 entries
*   [`afinn-165`](https://github.com/words/afinn-165)
    — AFINN list from 2015, containing 3382 entries
*   [`emoji-emotion`](https://github.com/words/emoji-emotion)
    — Like AFINN, but for emoji
*   [`polarity`](https://github.com/words/polarity)
    — Detect the polarity of text, based on `afinn-169` and `emoji-emotion`

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/afinn-96.svg

[travis]: https://travis-ci.org/words/afinn-96

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[afinn96]: http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010

[afinn165]: https://github.com/words/afinn-165
