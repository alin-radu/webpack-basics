const path = require('path');

const _cssLoaders = {
  test: /\.(css)$/i,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    },
  ],
};

const _scssLoaders = {
  test: /.s[ac]ss$/i,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    },
    {
      loader: 'sass-loader',
    },
  ],
};

const _imageLoaders = {
  test: /.(png|jpeg|gif|svg)$/,
  type: 'asset/resource',
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
    clean: true,
  },
  module: {
    rules: [_cssLoaders, _scssLoaders, _imageLoaders],
  },
};
