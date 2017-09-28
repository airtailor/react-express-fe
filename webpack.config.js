const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const VENDOR_LIBS = [
  'axios',
  'lodash',
  'moment',
  'node-fetch',
  'react',
  'react-dom',
  'react-intercom',
  'react-modal',
  'react-print',
  'react-redux',
  'redux-logger',
  'redux-thunk',
];

const config = {
  devtool: 'source-map',
  entry: {
    bundle: './client/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
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
        options: {
          // limit: 10000,
        },
      },
    ],
    // rules: [{
    //  test: /\.scss$/,
    //  use: [{
    //      loader: "style-loader" // creates style nodes from JS strings
    //    }, {
    //      loader: "css-loader" // translates CSS into CommonJS
    //    }, {
    //      loader: "sass-loader" // compiles Sass to CSS
    //  }]
    // }]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new UglifyJSPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
  ],
};

module.exports = config;

//
// // 8/30/17
// import path from 'path';
// import webpack from 'webpack';
//
// export default {
//   devtool: 'eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     path.join(__dirname, '/client/index.js')
//   ],
//   output: {
//     path: '/',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         include: path.join(__dirname, '/client'),
//         exclude: /node_modules/,
//         loaders: ['react-hot-loader', 'babel-loader']
//       },
//       {
//         test: /\.scss$/,
//         loaders: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.(jpg|png|svg)$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//         }
//       }
//     ],
//     //rules: [{
//     //  test: /\.scss$/,
//     //  use: [{
//     //      loader: "style-loader" // creates style nodes from JS strings
//     //    }, {
//     //      loader: "css-loader" // translates CSS into CommonJS
//     //    }, {
//     //      loader: "sass-loader" // compiles Sass to CSS
//     //  }]
//     //}]
//   },
//   resolve: {
//     extensions: [
//       '.js'
//     ]
//   }
// };
//
// // end 8/30/17
//
// // import path from 'path';
// // const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// // export default = {
// //   entry: './src/index.js',
// //   output: {
// //     path: path.resolve(__dirname, 'build'),
// //     filename: 'bundle.js'
// //   },
// //   module: {
// //     loaders: [
// //       { //         test: /\.jsx?$/,
// //         exclude: /node_modules/,
// //         loader: 'react-hot-loader!babel-loader'
// //        }
// //     ],
// //     rules: [
// //       {
// //         use: 'babel-loader',
// //         test: /\.js$/
// //       },
// //       {
// //         //use: ['style-loader', 'css-loader'],
// //         use: ExtractTextPlugin.extract({
// //           use: 'css-loader'
// //         }),
// //         test: /\.css$/
// //       }
// //     ]
// //   },
// //   plugins: [
// //     new ExtractTextPlugin('style.css')
// //   ]
// // }
