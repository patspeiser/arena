const path 			= require('path');
const webpack 		= require('webpack');

//app
const inPath        = path.join(__dirname, 'src', 'build');
const outPath       = path.join(__dirname, 'dist');
const outName       = 'bundle.js';

//vendors
const vendorInPath   = path.join(__dirname, 'src', 'vendor');
const vendorOutName  = 'vendor.bundle.js';

//tests
const inPathTest        = path.join(__dirname, 'src', 'test');
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
		path: 		outPath,
		filename: 	outNameTest,
	}
}, 
/*
{
	mode: 'none',
	entry: vendorInPath, 
	watch: true,
	output: {
		path: outPath,
		filename: vendorOutName
	}
}*/];

console.log(module.exports);