const path = require('path');


module.exports = {
	entry: {
		'server': './index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: `[name].js`,
	}
};