m.flatten
===
[![ci](https://img.shields.io/travis/ivoputzer/m.flatten.svg?style=flat-square)](https://travis-ci.org/ivoputzer/m.flatten) [![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json) [![style](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![Coverage Status](https://img.shields.io/coveralls/ivoputzer/m.flatten.svg?style=flat-square)](https://coveralls.io/github/ivoputzer/m.flatten?branch=master) [![quality](http://npm.packagequality.com/shield/m.flatten.svg?style=flat-square&colorB=44CC11)](http://packagequality.com/#?package=m.flatten) [![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=flat-square)](https://nodejs.org/docs/v6.0.0/api) [![version](https://img.shields.io/npm/v/m.flatten.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/m.flatten) [![license](https://img.shields.io/npm/l/m.flatten.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/MIT)

**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[flatten](https://github.com/ivoputzer/m.flatten)** is a simple array flatten implementation written in es6+

### install
```sh
npm install m.flatten
```

### usage
```javascript
const {flatten} = require('.')
flatten(['a', [ 'b', 'c' ]]) // => [ 'a', 'b', 'c' ]
```
