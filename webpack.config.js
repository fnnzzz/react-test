var webpack = require("webpack");
var path = require('path');
var sourceDir = path.join(__dirname, './src');
var destDir = path.join(__dirname, './dist');


// ---------------
var nodeEnv = process.env.NODE_ENV || 'development';
var isProd = nodeEnv === 'production';
// ---------------


module.exports = {
  
  // devtool: isProd ? 'hidden-source-map' : 'eval-source-map',

  // devtool: 'eval-source-map',
  // devtool: 'hidden-source-map',

  context: path.join(sourceDir, './js'),
  entry: {
    js: [
      path.join(sourceDir, './js/entry.js'),
    ],
    vendor: [
      'react', 
      'react-dom',
    ]
  },
  output: {
    path: path.join(destDir),
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
      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      }, 
      {
        test: /\.php$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },      
      {
        test: /\.css$/, loader: "style!css"
      },
      // {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'bower_components'],
    modules: [
      path.resolve('./js/'),
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
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,  
        
        compress: {
          warnings: false
        }

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
  ],
  devServer: {
    contentBase: path.join(sourceDir),
    noInfo: true
  }
};