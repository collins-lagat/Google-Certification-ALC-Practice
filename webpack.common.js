module.exports = {
	entry: {
		app: './src/index.js',
		vendor: './src/vendor.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules',
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader-srcset',
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'assets'
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'assets'
					}
				}
			}
		]
	}
}
