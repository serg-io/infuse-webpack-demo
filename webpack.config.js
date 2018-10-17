const path = require('path');

module.exports = {
	context: __dirname,
	devServer: {
		contentBase: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'dist'),
		],
	},
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [{
			test: /\.html$/,
			use: [{
				options: {
					tags: ['i18n'],
				},
				loader: 'infuse-loader',
			}],
		}],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};