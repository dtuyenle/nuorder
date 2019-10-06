const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  target: 'web',
  optimization: {
    usedExports: true,
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/assets']),
    new ManifestPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({ __isBrowser__: 'true' }),
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
            plugins: ['babel-plugin-transform-async-to-promises', 'source-map-support', 'babel-plugin-root-import', 'babel-plugin-styled-components'],
            ignore: ['node_modules/is_js'],
          },
        },
        exclude: /node_modules\/(?!cap-ui|lambchop|react-rasta|query-string|strict-uri-encode)/,
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)/,
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
