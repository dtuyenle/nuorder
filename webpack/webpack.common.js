const path = require('path');
const serverCommonConfig = require('./common/webpack.common.server');
const browserCommonConfig = require('./common/webpack.common.browser');

const DIST = path.resolve(__dirname, '../dist');
const SRC = path.resolve(__dirname, '../src');

// Server
const serverConfig = Object.assign({}, serverCommonConfig, {
  entry: {
    nuorderLambda: `${SRC}/ui/server/nuorderLambda.js`,
  },
  output: {
    filename: '[name].js',
    path: `${DIST}/lambdas`,
    libraryTarget: 'commonjs2',
  },
});

// Browser
const browserConfigs = [
  Object.assign({}, browserCommonConfig, {
    entry: {
      nuorderBrowser: [
        'babel-polyfill',
        `${SRC}/ui/browser/nuorderBrowser.js`,
      ],
    },
    output: {
      path: `${DIST}/public/nuorder/assets`,
      filename: '[name].js',
    },
  })
];

module.exports = {
  browserConfigs,
  serverConfig,
};
