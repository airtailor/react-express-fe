const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

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
  devtool: 'source-map',
  entry: {
    bundle: ['./client/index.js'],
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
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.scss$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ];

  prodPlugins.forEach(function(plugin) {
    config.plugins.push(plugin);
  });
} else {
  config.entry.bundle.push(
    'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr'
  );
}

module.exports = config;
