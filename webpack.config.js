module.exports = {
  entry: './src/js/react_entry.js',
  output: {
    filename: './dist/js/common.min.js'
  },
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
    ]
  }
};