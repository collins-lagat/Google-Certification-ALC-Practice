const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge')
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/views/responsive-design.html',
			filename: 'responsive-design.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/views/responsive-images.html',
			filename: 'responsive-images.html'
		})
	]
})
