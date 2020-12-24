/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');

const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(
  {
    mode: 'development',
    devtool: 'source-map',

    entry: {
      main: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      ],
    },

    watch: false,

    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: '[name].bundle.js',
      publicPath: '/js/',
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  base,
);
