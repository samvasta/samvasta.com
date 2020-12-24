/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { config } = require('process');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
  },

  entry: {
    main: [path.join(__dirname, '../src/index')],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/, /\.{spec|test}\.(ts|js)x?$/],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
};
