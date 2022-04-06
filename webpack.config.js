const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		polyfill: 'babel-polyfill',
		main: path.resolve(__dirname, './src/index.js'),
	},
	context: path.resolve(__dirname, 'src'),
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		host: 'localhost',
		open: true,
		compress: true,
		// hot: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',

						options: {
							importLoaders: 1,
							sourceMap: true,
						},
					},
					// {
					//   loader: 'postcss-loader',
					//   options: {
					//     plugins: () => [precss, autoprefixer],
					//   },
					// },
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	mode: 'development',
}