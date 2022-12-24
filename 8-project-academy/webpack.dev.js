const { merge } = require('webpack-merge');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const commonConfig = require('./webpack.common');

// loaders
const _cssLoader = {
  loader: 'css-loader',
};

const _sassLoader = {
  loader: 'sass-loader',
};

const _styleLoader = {
  loader: 'style-loader',
};

// loaders
const _cssLoaders = {
  test: /\.(css)$/i,
  use: [_styleLoader, _cssLoader],
};

const _sassLoaders = {
  test: /.s[ac]ss$/i,
  use: [_styleLoader, _cssLoader, _sassLoader],
};

// plugins
const bundleAnalyzerPluginInstance = new BundleAnalyzerPlugin({});

const devConfig = {
  mode: 'development',
  devServer: {
    static: './dist',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [_cssLoaders, _sassLoaders],
  },
  plugins: [bundleAnalyzerPluginInstance],
};

module.exports = merge(commonConfig, devConfig);
