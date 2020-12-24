/* eslint-disable @typescript-eslint/no-var-requires */
const webpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const startApp = require('../app');
const webpackConfigDev = require('../../webpack/webpack.config.dev');

const compiler = webpack(webpackConfigDev);

const middlewares = [
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfigDev.output.publicPath,
  }),
  WebpackHotMiddleware(compiler),
];

const port = process.env.PORT || 3000;
startApp(port, middlewares);


