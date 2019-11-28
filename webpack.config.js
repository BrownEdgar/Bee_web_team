const path = require('path');
const nodeExternals = require('webpack-node-externals');


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
			 include: [
				/\/mongoose\//i,
				/\/kareem\//i  
			],
			exclude: path.resolve(__dirname, "node_modules"),
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}, ]
	},
	node: {
		// Replace these Node.js native modules with empty objects, Mongoose's
		// browser library does not use them.
		// See https://webpack.js.org/configuration/node/
		dns: 'empty',
		fs: 'empty',
		'module': 'empty',
		net: 'empty',
		tls: 'empty'
	},
	target: 'node', // in order to ignore built-in modules like path, fs, etc. 
	externals: [nodeExternals()],

};