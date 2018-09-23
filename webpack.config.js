const path 			= require('path');
const webpack 		= require('webpack');
const entryPath 	= path.join(__dirname, 'src');
const outputPath 	= path.join(__dirname, 'dist');
const filename   	= 'bundle.js';

module.exports = {
	mode: 'none',
	entry: entryPath,
	watch: true,
	output: {
		path: outputPath,
		filename: filename,
	},
};

console.log(module.exports);