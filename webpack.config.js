'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlPlugin = require('html-webpack-plugin');
let path = require('path');

// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import HtmlPlugin from 'html-webpack-plugin';
// import path from 'path';

/**
 开发路径和生产路径
**/

const __DEVPATH__ = path.join(__dirname, 'src');
const __DISTPATH__ = path.join(__dirname, 'dist');
const __ISDEV__ = process.env.NODE_ENV === 'dev';

/**
 主机地址和端口
**/

const __PROTOCOL__ = 'http://';
const __HOST__ = 'localhost';
const __PORT__ = 8080;

/**
 资源别名
**/

let resourceAlias = {};

Object.assign(resourceAlias, {
  components: path.join(__DEVPATH__, 'components')
});

let webpackConfig = {

  context: __DEVPATH__,

  entry: {
    'app': ['./app.js']
  },

  output: {
    path: __DISTPATH__,
    filename: 'bundle.js',
    publicPath: '/dist/',
    chunkFilename: '[name].min.js'
  },

  debug: __ISDEV__,
  devtool: __ISDEV__ ? 'eval-source-map' : false,

  devServer: {
    hot: true
  },

  resolve: {
    alias: resourceAlias,
    extensions: ['', '.js', '.css', '.html']
  },

  module: {
    preLoaders: [
      {
        test: /\.js/i,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/i,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style', 'css')
      }, {
        test: /\.html$/i,
        loader: 'html'
      }, {
        test: /\.(gif|png|svg|jpe?g)$/i,
        loader: 'url',
        query: {
          limit: 7000,
          name: '[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(__DEVPATH__, 'pages', 'index.html'),
      inject: true,
      files: {
        css: [ 'bundle.css' ]
      }
    })
  ]

};

// module.exports = webpackConfig;

// webpack(webpackConfig, (err, stat) => {
//   console.log(err);
// });

(new WebpackDevServer(webpack(webpackConfig), {
  hot: true,
  inline: true,
  compress: true,
  stats: {
    chunks: false,
    children: false,
    colors: true
  },
  historyApiFallback: true
})).listen(__PORT__, __HOST__);
