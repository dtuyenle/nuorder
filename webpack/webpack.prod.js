/* eslint-disable */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const TerserPlugin = require('terser-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/* eslint-enable */

const serverConfig = merge(common.serverConfig, {
  mode: 'production',
  // optimization: {
  //   minimizer: [new TerserPlugin({ parallel: false })],
  // },
});

const plugins = [];
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined';
// to turn BundleAnalyzerPlugin on run `BUNDLE_ANALYZE=true npm run build:prod`
if (isAnalyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

const browserConfigs = [];

common.browserConfigs.forEach((browserConfig) => {
  browserConfigs.push(merge(browserConfig, {
    mode: 'production',
    // optimization: {
    //   minimizer: [new TerserPlugin({ parallel: false })],
    // },
    output: {
      filename: '[name].[hash].js',
    },
    plugins,
  }));
});

module.exports = [
  ...browserConfigs,
  serverConfig,
];
