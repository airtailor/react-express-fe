import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '/client'),
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  },
  resolve: {
    extensions: [
      '.js'
    ]
  }
};



// import path from 'path';
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// export default = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'react-hot-loader!babel-loader'
//        },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'eslint-loader'
//       }
//     ],
//     rules: [
//       {
//         use: 'babel-loader',
//         test: /\.js$/
//       },
//       {
//         //use: ['style-loader', 'css-loader'],
//         use: ExtractTextPlugin.extract({
//           use: 'css-loader'
//         }),
//         test: /\.css$/
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin('style.css')
//   ]
// }
