var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './entry.js',
	output: {
		// path: path.resolve(__dirname, './dist'),
		// filename: 'index.js'
		path: './asset/build/', // 文件编译输出路径改成 build
    publicpath: 'http://yourweb.com/asset/build/', // 这里替换成线上实际地址，可以修改 css 中对图片资源的引用路径。
    filename: '[name]_[hash:5].js' // 生成的文件名字，加上了5位的 hash值。当然了，位数和加hash的位置，你可以自己定义，比如 '[name].js?[hash]'.
	},
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





module.exports = {
    
    // 其它配置...
};
