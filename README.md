<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-04-10T17:45:02+02:00
@Email:  me@andreeray.se
@Filename: README.md
@Last modified by:   develdoe
@Last modified time: 2017-04-11T14:16:50+02:00
-->



=========

    A small library providing an API for localStorage

## Installation

    npm install devel-localstorage --save

## Usage

```js
    var localstorage = require('devel-localstorage')

    localstorage.set(['devel','doe'])
    res = localstorage.get()

    console.log('res:', res);
```

## Tests

npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0 Initial release
