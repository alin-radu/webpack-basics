const path = require('path');

// individual loaders
const _styleLoader = {
  loader: 'style-loader',
};

const _cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
  },
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

// exports
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
    clean: true,
  },
  module: {
    rules: [_cssLoaders, _scssLoaders, _imageLoaders, _fontLoaders],
  },
};
