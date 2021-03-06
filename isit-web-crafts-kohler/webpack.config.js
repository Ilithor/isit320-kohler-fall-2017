var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './source/react-main.js',
	output: {
		path: __dirname,
		filename: 'public/javascripts/bundle.js'
	},
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['env', 'stage-0', 'react']
			}
		}]
	},
	devtool: "source-map"
};
