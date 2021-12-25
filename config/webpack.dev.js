const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

/** @type {import('webpack').Configuration} */
const devConfig = {
	mode: 'development',
	devServer: {
		port: 3000,
		// static: '../dist',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
	},
	plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /.(css|sass|scss)$/,
			},
		],
	},
};

module.exports = merge(common, devConfig);
