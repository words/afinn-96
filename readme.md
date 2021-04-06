# afinn-96

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Easy access to [AFINN-96][afinn96].

AFINN 96 is the lightweight (1468 words/phrases) and older version of
[AFINN 165][afinn165] (3382 words/phrases).

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install afinn-96
```

## Use

```js
import {afinn96} from 'afinn-96'

afinn96.positive // => 2
afinn96['fed up'] // => -3
```

## API

This package exports the following identifiers: `afinn96`.
There is no default export.

### `afinn96`

`afinn-96` returns entries to valence ratings (`Object.<number>`).

> Note!
> Be careful when accessing unknown properties on the `afinn-96` object, words
> such as `constructor` or `toString` might occur.
> It’s recommended to use a `hasOwnProperty` check beforehand.

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
    — Detect the polarity of text, based on `afinn-165` and `emoji-emotion`

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/afinn-96/workflows/main/badge.svg

[build]: https://github.com/words/afinn-96/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/afinn-96.svg

[coverage]: https://codecov.io/github/words/afinn-96

[downloads-badge]: https://img.shields.io/npm/dm/afinn-96.svg

[downloads]: https://www.npmjs.com/package/afinn-96

[size-badge]: https://img.shields.io/bundlephobia/minzip/afinn-96.svg

[size]: https://bundlephobia.com/result?p=afinn-96

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[afinn96]: https://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010

[afinn165]: https://github.com/words/afinn-165
