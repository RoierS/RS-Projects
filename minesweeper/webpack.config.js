const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|wav)$/,
        type: 'asset/resource',
        generator: {
          filename: 'audio/[name][ext]',
        },
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Minesweeper',
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    port: 8080,
  },
};
