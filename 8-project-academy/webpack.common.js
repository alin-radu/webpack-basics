const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// loaders
const _imageLoaders = {
  test: /.(png|jpeg|gif|svg)$/,
  type: 'asset/resource',
};

const _fontLoaders = {
  test: /.(ttf|woff|woff2)$/,
  type: 'asset/resource',
};

// plugins
const htmlWebpackPluginInstances = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    chunks: ['index'],
    filename: 'index.html',
  }),
  new HtmlWebpackPlugin({
    template: './src/pages/courses.html',
    chunks: ['courses'],
    filename: 'courses.html',
  }),
];

// const providerPluginInstance = new webpack.ProvidePlugin({
//   $: 'jquery',
//   _: 'lodash',
// });

// module.exports
module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [_imageLoaders, _fontLoaders],
  },
  plugins: [...htmlWebpackPluginInstances],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
