const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[contenthash].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
			},
			{
				type: 'asset',
				test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './src/images',
					to: 'images',
				},
			],
		}),
	],
};
