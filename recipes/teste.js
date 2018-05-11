const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.recipe = {
  name: 'example-app',
  version: '0.0.1',
  description: 'Sample App',
  scope: 'development'
};

module.exports.webpackConfig = function (argv) {
  return {
    entry: {
      app: path.resolve('./src/index.js')
    },

    output: {
      path: path.resolve('./dist'),
      publicPath: '/',
      filename: 'assets/js/[name].[hash:8].js',
      chunkFilename: 'assets/js/[id].[hash:8].js'
    },

    plugins: [
      new HtmlWebpackPlugin({
        chunks: ['app'],
        template: './src/index.html'
      }),
    ],

  }
};
