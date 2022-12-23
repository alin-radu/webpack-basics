const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginIndex = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  chunks: ['index'],
  inject: true,
  filename: 'index.html',
});

const HtmlWebpackPluginProducts = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/products.html'),
  chunks: ['product'],
  inject: true,
  filename: 'products.html',
});

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
    port: 8080,
  },
  plugins: [HtmlWebpackPluginIndex, HtmlWebpackPluginProducts],
};
