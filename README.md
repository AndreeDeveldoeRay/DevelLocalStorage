<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-04-10T17:45:02+02:00
@Email:  me@andreeray.se
@Filename: README.md
@Last modified by:   develdoe
@Last modified time: 2017-04-19T12:59:36+02:00
-->



=========

    A small npm library providing an API for storing arrays in localStorage

## Installation

    `npm install devel-localstorage --save`

## Usage

```js
    import develLS from  'devel-localstorage'

    // set
    develLS.set('user',[{ user: "develdoe"}])

    // get
    var res = develLS.get('store')
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0 Initial setup
* 0.1 Set method
* 0.2 Get method
* 0.3 Callback pattern
* 0.4 Filter method
* 0.5 Tests
---------------------
* 1.0  move to ES2015
