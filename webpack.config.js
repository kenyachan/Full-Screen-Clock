const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devServer: {
		static: './dist',
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Full Screen Clock',
            template: './src/index.html'
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		runtimeChunk: 'single',
	},
};