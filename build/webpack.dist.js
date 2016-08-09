/**
  webpack 开发环境配置文件
**/

'use strict';

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var distWebpackConfig = Object.assign({}, webpackConfig);
distWebpackConfig.output.filename = 'xx.js';
console.log(distWebpackConfig);
// distWebpackConfig.plugins.push(
//   new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warning: true
//     }
//   })
// );

//new webpack(distWebpackConfig);
