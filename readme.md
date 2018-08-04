m.flatten
===
**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[flatten](https://github.com/ivoputzer/m.flatten) is a simple array flatten implementation written in es6+**

[![travis](https://img.shields.io/travis/ivoputzer/m.flatten.svg?style=for-the-badge)](https://travis-ci.org/ivoputzer/m.flatten)
[![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=for-the-badge&colorB=44CC11)](package.json)
[![coverage status](https://img.shields.io/coveralls/ivoputzer/m.flatten.svg?style=for-the-badge)](https://coveralls.io/github/ivoputzer/m.flatten?branch=master)
[![linter](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=for-the-badge)](http://standardjs.com/)

[![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=for-the-badge)](https://nodejs.org/docs/v6.0.0/api)
[![version](https://img.shields.io/npm/v/m.flatten.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.flatten)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&colorB=007EC6)](https://spdx.org/licenses/MIT)
[![minzip](https://img.shields.io/bundlephobia/minzip/m.flatten.svg?style=for-the-badge)](https://bundlephobia.com/scan-results?packages=m.find)
[![downloads](https://img.shields.io/npm/dt/m.args.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.flatten)

## install
```sh
npm install m.flatten
```

## usage
```js
const {flatten} = require('m.flatten')

flatten(['a', [ 'b', 'c' ]]) // [ 'a', 'b', 'c' ]
```
