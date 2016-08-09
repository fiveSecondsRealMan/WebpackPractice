/**
  webpack 开发环境配置文件
**/

'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

/**
  域名
  协议、主机、端口
**/

let protocol = 'http://';
let host = 'localhost';
let port = process.env.Port || 8080;
let domain = protocol + host + ':' + port;

/**
  增加开发环境webpack的配置
**/

let devWebpackConfig = Object.assign({}, webpackConfig);

// 输出文件名
devWebpackConfig.output.filename = 'bundle.js';

// 静态资源目录
devWebpackConfig.output.publicPath = '/';

// 热替换
devWebpackConfig.devServer = { hot: true };

// 断点调试
devWebpackConfig.debug = true;
devWebpackConfig.devtool = 'eval-source-map';

// 增加eslint检测代码规范
devWebpackConfig
  .module
  .preLoaders
  .push({
    test: /\.jsx?$/i,
    loader: 'eslint',
    exclude: /node_modules/
  });

devWebpackConfig.eslint = { configFile: '../.eslintrc.js' };  

(new WebpackDevServer(
  webpack(devWebpackConfig),
  {
    hot: true,
    inline: true,
    compress: true,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    historyApiFallback: true
   }
)).listen(port, host, () => {
  console.log('server is runing');
});
