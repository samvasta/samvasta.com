/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');

const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(
  {
    mode: 'production',
    devtool: 'source-map',

    watch: false,

    output: {
      path: path.join(__dirname, '../public/js'),
      filename: '[name].bundle.js',
    },

    plugins: [],
  },
  base,
);
