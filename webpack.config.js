const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		module: './PlasmaCanvas.js',
		jquery_plugin: './jquery-plasma.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'plasma.[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	}
}
