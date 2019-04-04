const webpack = require('webpack');
const path = require('path');
const src_path = path.join(__dirname, './client/src');
const public_path = path.join(__dirname, './client/public');

module.exports = {
  entry: [src_path + '/index.js'],
  output: {
    path: public_path,
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: true,
              sourceMap: true,
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devServer: {
    port: process.env.PORT || 8000,
    compress: true,
    contentBase: path.join(__dirname, './client/public'),
    historyApiFallback: true,
  },
};
