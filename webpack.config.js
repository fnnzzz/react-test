var webpack = require("webpack");
var path = require('path');

module.exports = {
  // devtool: 'inline-source-map',
  context: path.join(__dirname, './src/js'),
  entry: {
    js: [
      path.join(__dirname, './src/js/entry.js'),
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',
    ],
    vendor: [
      'react', 
      'react-dom',
    ]
  },
  output: {
    path: path.join(__dirname, './dist/js'),
    filename: 'common.min.js'
  },
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
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src/js/'),
      'node_modules'
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
      }),
      // new webpack.LoaderOptionsPlugin({
      //   minimize: false,
      //   debug: true
      // }),
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false
      //   },
      //   output: {
      //     comments: false
      //   },
      //   sourceMap: false
      // }),
  ]
};