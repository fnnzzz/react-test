var webpack = require("webpack");
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/js/entry.js'
  ],
  output: {
    filename: './dist/js/common.min.js'
  },
  // resolve: {
  //   modulesDirectories: ['node_modules', 'src/js'],
  //   extensions: ['', '.js']
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['react-html-attrs'],
        }
      },
      // {test: /\.css$/, loader: "style!css"},
      // {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ]
};