const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  optimization: {
    usedExports: true,
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  devtool: 'source-map',
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({ __isBrowser__: 'false' }),
  ],
  module: {
    rules: [
      // We use raw-loader to load css as a string from cap-ui into inject_global
      // from styled-components
      {
        test: /\.css$/,
        use: 'raw-loader',
      },
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['airbnb'],
            plugins: ['source-map-support', 'babel-plugin-root-import', 'babel-plugin-styled-components'],
            ignore: ['node_modules/is_js'],
          },
        },
        exclude: /node_modules\/(?!cap-ui)/,
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ico)/,
        exclude: /node_modules\/(?!cap-ui)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[name]-[hash].[ext]',
          },
        }],
      },
    ],
  },
};
