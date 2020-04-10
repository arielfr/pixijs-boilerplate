const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './game/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Game Demo',
      template: './templates/index.html',
      production: isProduction,
      inject: false,
    }),
    new CopyPlugin([
      { from: 'public', to: 'dest' },
    ]),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.js'
  },
};
