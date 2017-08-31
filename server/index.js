import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

const app = express();
const PORT = process.env.PORT || 8080;
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(express.static('build'));
app.use(require('./router'));

app.listen(PORT, () => {
  console.log('alive on port', PORT)
});
