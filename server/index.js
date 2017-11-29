const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('public'));
}

app.use(bodyParser.json({ limit: '1000mb' }));
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log('alive on port', PORT);
});
