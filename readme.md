# giflossy-bin [![Build Status](https://travis-ci.org/jihchi/giflossy-bin.svg?branch=master)](https://travis-ci.org/jihchi/giflossy-bin)

> [giflossy](https://github.com/pornel/giflossy) is an encoder (based on gifsicle) which implements lossy LZW compression. It can reduce animgif file sizes by 30%—50% at a cost of some dithering/noise..

## Install

```
$ npm install --save giflossy
```


## Usage

```js
var execFile = require('child_process').execFile;
var giflossy = require('giflossy');

execFile(giflossy, ['-O3' '--lossy=80', '-o', 'output.gif', 'input.gif'], function (err) {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global giflossy
```

```
$ giflossy --help
```


## License

MIT © [Jih-Chi Lee](https://github.com/jihchi)
