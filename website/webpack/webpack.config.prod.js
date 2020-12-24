/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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

    plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin({ mode: 'static' })],

    optimization: {
      removeAvailableModules: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            compress: {
              drop_console: true,
              keep_fargs: false,
              toplevel: true,
            },
          },
        }),
      ],
    },
  },
  base,
);
