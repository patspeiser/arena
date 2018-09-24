const path 			= require('path');
const webpack 		= require('webpack');
const filename   	= 'bundle.js';

const inPath        = path.join(__dirname, 'src', 'build');
const outPath       = path.join(__dirname, 'dist');
const outName       = 'bundle.js';

const inPathTest        = path.join(__dirname, 'src', 'test');
const outPathTest       = path.join(__dirname, 'dist');
const outNameTest       = 'test.js';

module.exports = [{
	mode: 'none',
	entry: inPath,
	watch: true,
	output: {
		path: outPath,
		filename: outName,
	},
}, {
	mode: 'none',
	entry: inPathTest,
	watch: true,
	output: {
		path: 		outPathTest,
		filename: 	outNameTest,
	},
	target: 'node'
}];

console.log(module.exports);