const path = require('path');
const nodeExternals = require('webpack-node-externals');



module.exports = {
	entry: {
		'server': './server.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: 'dist/',
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
	 optimization: {
	 	minimize: false
	 },
	 devServer: {
	 	publicPath: "dist/",
	 	contentBase: path.join(__dirname, './dist'),
	 	compress: true,
	 	port: 9000,
		 hot: true,
		 overlay: true
	 },
	target: 'node', // in order to ignore built-in modules like path, fs, etc. 
	externals: [nodeExternals()],
};