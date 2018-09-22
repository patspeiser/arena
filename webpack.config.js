const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: "development",
	entry:'./src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	watch: true,
	devServer: {
		watchOptions: {
			poll: 1000,
			aggregateTimeout: 300
		},
	},
	plugins: [
		new webpack.WatchIgnorePlugin([
			path.join(__dirname, "node_modules")
		]),
	],
};