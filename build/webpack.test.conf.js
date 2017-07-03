// This is the webpack config used for unit tests.

var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader!ks-autobem-loader?type=css!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.(tpl|html)$/,
        loader: 'html'
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=./[name].[ext]?[hash:8]'
      }
    ]
  },

  vue: {
    loaders: {
      scss: 'vue-style-loader!css-loader!ks-autobem-loader?type=css!sass-loader',
      html: 'vue-html-loader!ks-autobem-loader?type=html'
    }
  },

  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },

  resolve:{
    extensions: ['', '.js', '.vue', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, '../src/ks'),
      'KsComponents': path.resolve(__dirname, '../src/ks/components')
    }
  }
};

module.exports = webpackConfig;
