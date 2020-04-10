const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './game/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Game Demo',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.js'
  },
};
