/* eslint-disable */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
/* eslint-enable */

const serverConfig = merge(common.serverConfig, {
  mode: 'development',
  // watch: true,
});

const browserConfigs = [];

common.browserConfigs.forEach((browserConfig) => {
  browserConfigs.push(merge(browserConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    // watch: true,
  }));
});

module.exports = [
  ...browserConfigs,
  serverConfig,
];
