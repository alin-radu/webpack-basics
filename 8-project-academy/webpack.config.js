const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// individual loaders
const _styleLoader = {
  loader: 'style-loader',
};

const _cssLoader = {
  loader: 'css-loader',
};

const _scssLoader = {
  loader: 'sass-loader',
};

// loaders
const _cssLoaders = {
  test: /\.(css)$/i,
  use: [_styleLoader, _cssLoader],
};

const _scssLoaders = {
  test: /.s[ac]ss$/i,
  use: [_styleLoader, _cssLoader, _scssLoader],
};

const _imageLoaders = {
  test: /.(png|jpeg|gif|svg)$/,
  type: 'asset/resource',
};

const _fontLoaders = {
  test: /.(ttf|woff|woff2)$/,
  type: 'asset/resource',
};

// htmlPlugin
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

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [_cssLoaders, _scssLoaders, _imageLoaders, _fontLoaders],
  },
  plugins: [htmlWebpackPluginIndex, htmlWebpackPluginCourses, copyPluginInstance],
};
