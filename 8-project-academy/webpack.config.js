const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// loaders
const _cssLoader = {
  loader: 'css-loader',
};

const _sassLoader = {
  loader: 'sass-loader',
};

// const _styleLoader = {
//   loader: 'style-loader',
// };
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

const _imageLoaders = {
  test: /.(png|jpeg|gif|svg)$/,
  type: 'asset/resource',
};

const _fontLoaders = {
  test: /.(ttf|woff|woff2)$/,
  type: 'asset/resource',
};

// plugins
const htmlWebpackPluginIndex = new HtmlWebpackPlugin({
  template: './src/index.html',
  chunks: ['index'],
  filename: 'index.html',
});

const htmlWebpackPluginCourses = new HtmlWebpackPlugin({
  template: './src/pages/courses.html',
  chunks: ['courses'],
  filename: 'courses.html',
});

const copyPluginInstance = new CopyPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, 'src/assets/images/*'),
      to: path.resolve(__dirname, 'dist'),
      context: 'src',
    },
  ],
});

const bundleAnalyzerPluginInstance = new BundleAnalyzerPlugin({});

const miniCssExtractPluginInstance = new MiniCssExtractPlugin({});

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [_cssLoaders, _sassLoaders, _imageLoaders, _fontLoaders],
  },
  plugins: [
    htmlWebpackPluginIndex,
    htmlWebpackPluginCourses,
    copyPluginInstance,
    bundleAnalyzerPluginInstance,
    miniCssExtractPluginInstance,
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
