var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  entry: './src/js/react_entry.js',
  output: {
    filename: './dist/js/common.min.js'
  },
  plugins: [
    // new BowerWebpackPlugin({
    //   modulesDirectories: ["bower_components"],
    //   manifestFiles:      "bower.json",
    //   includes:           /.*/,
    //   excludes: '/.*\.less/',
    // }),
    // new webpack.ProvidePlugin({
    //   $:      "jquery",
    //   jQuery: "jquery",
    // })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  }
};
