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
      path: path.join(__dirname, '../public/js'),
      filename: '[name].bundle.js',
      publicPath: '/js/',
      hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
      hotUpdateMainFilename: '.hot/[hash].hot-update.json',
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  base,
);
