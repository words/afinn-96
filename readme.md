# afinn-96

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[AFINN-96][].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`afinn96`](#afinn96)
*   [Musings](#musings)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package gives you easy access to [AFINN-96][].

## When should I use this?

You should likely use [`afinn-165`][afinn-165] instead.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install afinn-96
```

In Deno with [`esm.sh`][esmsh]:

```js
import {afinn96} from 'https://esm.sh/afinn-96@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {afinn96} from 'https://esm.sh/afinn-96@2?bundle'
</script>
```

## Use

```js
import {afinn96} from 'afinn-96'

afinn96.positive // => 2
afinn96['fed up'] // => -3
```

## API

This package exports the identifier `afinn96`.
There is no default export.

### `afinn96`

`afinn-96` maps entries to valence ratings (`Record<string, number>`).

> 👉 **Note**:
> Be careful when accessing unknown properties on the `afinn-96` object, words
> such as `constructor` or `toString` might occur.
> It’s recommended to use a `hasOwnProperty` check beforehand.

## Musings

Note the AFINN entries are:

*   all lower case
*   can contain spaces (cases: `can't stand`, `cashing in`,
    `cool stuff`, `does not work`, `dont like`, `fed up`, `green wash`,
    `green washing`, `messing up`, `no fun`, `not good`, `not working`,
    `right direction`, `screwed up`, `some kind`)
*   can contain apostrophes (only case: `can't stand`)
*   can contain dashes (cases: `cover-up`, `made-up`, `short-sighted`,
    `short-sightedness`, `son-of-a-bitch`)

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+, 16.0+, and 18.0+.
It also works in Deno and modern browsers.

## Related

*   [`afinn-111`](https://github.com/words/afinn-111)
    — AFINN list from 2011, containing 2477 entries
*   [`afinn-165`](https://github.com/words/afinn-165)
    — AFINN list from 2015, containing 3382 entries
*   [`emoji-emotion`](https://github.com/words/emoji-emotion)
    — like AFINN, but for emoji
*   [`polarity`](https://github.com/words/polarity)
    — detect the polarity of text, based on `afinn-165` and `emoji-emotion`

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[afinn-96]: https://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010

[afinn-165]: https://github.com/words/afinn-165
