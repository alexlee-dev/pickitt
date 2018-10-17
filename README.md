# Pickitt

[![Pickitt][pick-img]] [](www.pickitt.netlify.com)

[![NPM Version][npm-image]][npm-url]     [![NPM Total Downloads][npm-downloads]][npm-url]     [![npm bundle size (minified + gzip)][size-image]][npm-url]

> When you need you need a computer to just pick it, reach for Pickitt!

**Pickitt** is a simple utility function designed to help you pick an element from an array.

## Requirements
Pickitt has no dependencies other than itself!

## Installation
```sh
npm install pickitt
```

## Usage
```js
import { pickitt } from 'pickitt'

const testArray = ['item1', 'item2', 'item3']

const randomElement = pickitt(testArray) // <-- 'item1', 'item2', or 'item3'
```

## Similar Projects
- [lodash/sample](https://www.npmjs.com/package/lodash.sample)

## Attribution
- Pick Icon by [freepik](http://www.freepik.com) from [www.flaticon.com](www.flaticon.com).
- Concept from [lodash/sample](https://www.npmjs.com/package/lodash.sample).

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/pickitt.svg
[npm-downloads]: https://img.shields.io/npm/dt/pickitt.svg
[npm-url]: https://www.npmjs.com/package/pickitt
[size-image]: https://img.shields.io/bundlephobia/minzip/pickitt.svg
[pick-img]: https://github.com/alexlee-dev/pickitt/blob/master/documentation/images/pick.svg
