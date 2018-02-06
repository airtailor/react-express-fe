const express = require('express');
const bodyParser = require('body-parser');
const sslRedirect = require('heroku-ssl-redirect');

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
  app.get('*.js.gz', function(req, res, next) {
    res.set('Content-Encoding', 'gzip');
    next();
  });

  app.use(express.static('public'));
  // app.use((req, res, next) => {
  //   var originalPath = req.path;
  //   if (!originalPath.endsWith('.js')) {
  //     next();
  //     return;
  //   }
  //   try {
  //     const stats = fs.statSync(path.join('public', `${req.path}.gz`));
  //     res.append('Content-Encoding', 'gzip');
  //     res.setHeader('Vary', 'Accept-Encoding');
  //     res.setHeader('Cache-Control', 'public, max-age=512000');
  //     req.url = `${req.url}.gz`;
  //
  //     var type = mime.lookup(path.join('public', originalPath));
  //     if (typeof type != 'undefined') {
  //       var charset = mime.charsets.lookup(type);
  //       res.setHeader(
  //         'Content-Type',
  //         type + (charset ? '; charset=' + charset : '')
  //       );
  //     }
  //   } catch (e) {}
  //   next();
  // });
}

app.use(bodyParser.json({ limit: '1000mb' }));
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log('alive on port', PORT);
});
