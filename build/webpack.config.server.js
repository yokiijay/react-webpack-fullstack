const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css&/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, '../node_modules'),
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        use: ['file-loader?name=img/[name].[ext]']
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'React',
    //   filename: 'index.html',
    //   template: './client/index.html'
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
