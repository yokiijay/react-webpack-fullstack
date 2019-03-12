const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, '../node_modules'),
        use: ['babel-loader']
      },
    ]
  }
}
