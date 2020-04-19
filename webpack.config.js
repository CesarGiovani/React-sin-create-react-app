const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_module/',
				use: [ 'babel-loader', 'eslint-loader' ]
			},
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
		]
	},
	plugins: [ htmlPlugin, new DotEnv() ]
};
