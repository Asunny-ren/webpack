var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './entry.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js'
	},
	// 指定可以被import的文件后缀
	resolve: {
        extensions: ['.js', '.jsx']
    },
	module: {
		loaders: [
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{ test: /\.js|jsx$/, loaders: ["babel-loader"] }
		]
	},
	plugins: [
		// 在打包形成的文件头加入
		new webpack.BannerPlugin('This file is created by rjd'),
		// 自动生成index.html文件
	    new htmlWebpackPlugin({
	        filename: 'index.html',
	        template: "index.html"
	    })
	],
	// resolve: {fallback: path.join(__dirname, 'node_modules')},
	// resolveLoader: {fallback: path.join(__dirname, 'node_modules')}
}
