const path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
	entry: {
		'server': './server.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: `[name].js`,
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}, ]
	},
	target: 'node', // in order to ignore built-in modules like path, fs, etc. 
	externals: [nodeExternals()],
};