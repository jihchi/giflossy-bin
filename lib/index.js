'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');

var url = 'https://raw.githubusercontent.com/jihchi/giflossy-bin/v' + pkg.version + '/vendor/';

module.exports = new BinWrapper()
	.src(url + 'macos/giflossy', 'darwin')
	.src(url + 'linux/x86/giflossy', 'linux', 'x86')
	.src(url + 'linux/x64/giflossy', 'linux', 'x64')
	.src(url + 'freebsd/x86/giflossy', 'freebsd', 'x86')
	.src(url + 'freebsd/x64/giflossy', 'freebsd', 'x64')
	.src(url + 'win/x86/giflossy.exe', 'win32', 'x86')
	.src(url + 'win/x64/giflossy.exe', 'win32', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'giflossy.exe' : 'giflossy');
