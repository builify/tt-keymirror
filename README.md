# TTKeyMirror
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Based on array input, create an object with values equal to its key names or symbol. Inspired by `react/lib/keyMirror`.

## Installation
```shell
npm install ttkeymirror
```

## Usage
```javascript
import keyMirror from 'ttkeymirror';

const ACTIONS = keyMirror([
  'ACTION01',
  'ACTION02',
  'ACTION03'
]);

const action01 = ACTIONS.ACTION01;
const action02 = ACTIONS.ACTION02;
const action03 = ACTIONS.ACTION03;
```

If you want to use `Symbol`, simply add argument `true` after array.

```javascript
const ACTIONS = keyMirror([
  'ACTION01',
  'ACTION02',
  'ACTION03'
], true);

/*
This will return following:
{
  ACTION01: Symbol('ACTION01'),
  ACTION02: Symbol('ACTION02'),
  ACTION03: Symbol('ACTION03')
}
*/
```

## Contributions & Issues
Contributions are welcome. Please clearly explain the purpose of the PR and follow the current style.

Issues can be resolved quickest if they are descriptive and include both a reduced test case and a set of steps to reproduce.

## Licence
Licensed under the [MIT License](LICENSE) © Trip-Trax - 2015.
