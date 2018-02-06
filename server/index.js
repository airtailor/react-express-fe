const express = require('express');
const bodyParser = require('body-parser');
const sslRedirect = require('heroku-ssl-redirect');
const gzipStatic = require('connect-gzip-static');

const PORT = process.env.PORT || 8080;
const app = express();

// enable ssl redirect
app.use(sslRedirect());

// build webpack in development, use minified files in production
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.js');
  const compiler = webpack(webpackConfig);

  app.use(
    webpackMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    })
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {
      cache: true,
      quiet: true,
      heartbeat: 200,
    })
  );
} else {
  app.use(express.static('public'));
}

// handle gzip files
const oneDay = 86400000;
connect().use(gzipStatic(__dirname + '/public'));
connect().use(gzipStatic(__dirname + '/public', { maxAge: oneDay }));

app.use(bodyParser.json({ limit: '1000mb' }));
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log('alive on port', PORT);
});
