# webpack学习笔记 

### webpack install 

    全局安装webpack

    npm install webpack -g

    初始化项目

    npm init 
    
    安装 webpack 依赖

    npm install webpack --save-dev

    查看webpack版本信息

    npm info webpack

    安装指定版本

    npm install webpack@3.0.x --save-dev 

    需要使用webpack开发工具，要单独安装

    npm install webpack-dev-server --save-dev

    安装loader

    npm install css-loader style.loader --save-dev

---------------------------------------------------------------------------------------
### windows命令行一点小常识

创建一个文件夹 md 文件名
创建一个文件 echo>index.html

移除一个文件夹 rd/s/q 文件位置
移除一个文件 del/f/s/q 文件位置

---------------------------------------------------------------------------------------

### webpack config(配置)

  在根目录下webpack.json添加webpack需要的依赖，添加完后可以通过

  $ npm install 来安装依赖
  
  ```
  {
    "name": "webpack-example",
    "version": "1.0.0",
    "description": "A simple webpack example.",
    "main": "bundle.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "webpack"
    ],
    "author": "zhaoda",
    "license": "MIT",
    "devDependencies": {
      "css-loader": "^0.21.0",
      "style-loader": "^0.13.0",
      "webpack": "^1.12.2"
    }
  }
  ```

  然后再创建一个配置文件webpack.config.js

  ```
  var webpack = require('webpack')

  module.exports = {
    entry: './entry.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        { test: /\.js|jsx$/, loaders: ['babel'] }
      ]
    }
  }
  ```


### webpack loader

  安装loader

  npm install css-loader style-loader

  npm install babel-loader --save-dev

  ```
    require('!style-loader!css-loader!./style.css')

    $ webpack entry.js bundle.js

    or

    require('./style.css')

    $ webpack entry.js bundle.js --module-bind "css=style-loader!css-loader"
  ```

  * Loader 可以通过管道方式链式调用，每个 loader 可以把资源转换成任意格式并传递给下一个 loader ，但是最后一个 loader 必须返回 JavaScript。
  
  * Loader 可以同步或异步执行。

  * Loader 运行在 node.js 环境中，所以可以做任何可能的事情。

  * Loader 可以接受参数，以此来传递配置项给 loader。

  * Loader 可以通过文件扩展名（或正则表达式）绑定给不同类型的文件。
  
  * Loader 可以通过 npm 发布和安装。

  * 除了通过 package.json 的 main 指定，通常的模块也可以导出一个 loader 来使用。
   
  * Loader 可以访问配置。

  * 插件可以让 loader 拥有更多特性。
   
  * Loader 可以分发出附加的任意文件。

### webpack plugin(插件)

在配置文件webpack.config.js中添加plugin

```
  var webpack = require('webpack')

  // 注意webpack2中需要path
  var path = require('path')

  module.exports = {
    entry: './entry.js',
    output: {
      path: path.resolve(__dirname, './dist'), // webpack2
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {test: /\.css$/, loader: 'style-loader!css-loader'}
      ]
    },
    plugins: [
      // 在打包文件头部加入作者名
      new webpack.BannerPlugin('This file is created by rjd'),
      // webpack自带压缩
      new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // 
    ]
  }
```


### webpack 开发环境

  $ webpack --progress --colors

  $ webpack --progress --colors -w/--watch

  添加开发服务,通过socket.io服务实时监听变化自动刷新页面

  ```
  // 安装

  $ npm install webpack-dev-server -g 

  // 运行

  $ webpack-dev-server --progress --colors


  ```

### webpack error handle(故障处理)

  打印错误详情

  $ webpack --display-error-details 

