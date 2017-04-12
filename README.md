<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-04-10T17:45:02+02:00
@Email:  me@andreeray.se
@Filename: README.md
@Last modified by:   develdoe
@Last modified time: 2017-04-12T15:33:37+02:00
-->



=========

    A small npm library providing an API for storing arrays in localStorage 

## Installation

    npm install devel-localstorage --save

## Usage

```js
    var localstorage = require('devel-localstorage')

    localstorage.set(['devel','doe'])
    res = localstorage.get()

    console.log('res:', res);
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.

## Release History

* 0.1.0 Initial release
