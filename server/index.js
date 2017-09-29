const express = require('express');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json({limit: '1000mb'}));
app.use(express.static('public'));
app.use(require('./router'));

app.listen(PORT, () => {
  console.log('alive on port', PORT);
});
