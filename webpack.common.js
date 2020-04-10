const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: {
    'game': './game/index.js',
    'pixi': './resources/pixi.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Game',
      template: './templates/index.html',
      production: isProduction,
      inject: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
