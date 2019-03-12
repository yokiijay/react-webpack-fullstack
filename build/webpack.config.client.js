const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name]-[hash:4]-bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html',
      disableDotRule: true
    },
    overlay: {
      warning: true,
      error: true
    }
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../client/template.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
