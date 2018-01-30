const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'axios',

  'lodash',
  'moment',
  'node-fetch',
  'prop-types',
  'react',
  'react-dom',
  'react-intercom',
  'react-modal',
  'react-print',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-logger',
  'redux-thunk',
];

const config = {
  devtool: 'inline-source-map',
  entry: {
    bundle: ['./client/index.js', 'webpack-hot-middleware/client'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve('public'),
    filename: '[name].[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '/client'),
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

if (process.env.NODE_ENV === 'production') {
  const prodPlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ];

  prodPlugins.forEach(function(plugin) {
    config.plugins.push(plugin);
  });
}

module.exports = config;
