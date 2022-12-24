const { merge } = require('webpack-merge');

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

const commonConfig = require('./webpack.common');

// loaders
const _cssLoader = {
  loader: 'css-loader',
};

const _sassLoader = {
  loader: 'sass-loader',
};

const _styleLoader = MiniCssExtractPlugin.loader;

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
const copyPluginInstance = new CopyPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, 'src/assets/images/*'),
      to: path.resolve(__dirname, 'dist'),
      context: 'src',
    },
  ],
});

const miniCssExtractPluginInstance = new MiniCssExtractPlugin({ filename: '[name].css' });

const PATHS = {
  src: path.join(__dirname, 'src'),
};

const purgeCSSPluginInstance = new PurgeCSSPlugin({
  paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
});

// const bundleAnalyzerPluginInstance = new BundleAnalyzerPlugin({});

const prodConfig = {
  mode: 'production',
  module: {
    rules: [_cssLoaders, _sassLoaders],
  },
  plugins: [copyPluginInstance, miniCssExtractPluginInstance, purgeCSSPluginInstance],
};

module.exports = merge(commonConfig, prodConfig);
