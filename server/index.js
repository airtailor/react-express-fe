const express = require('express');
const bodyParser = require('body-parser');
// const webpack = require('webpack');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpackConfig = require('../webpack.config.js');
//
//
// const compiler = webpack(webpackConfig);
//
// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: true
// }));

const app = express();
const PORT = process.env.PORT || 8080;
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json({limit: '1000mb'}));
app.use(express.static('build'));
app.use(require('./router'));

app.listen(PORT, () => {
  console.log('alive on port', PORT)
});
