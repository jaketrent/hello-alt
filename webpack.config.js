var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [ 'babel/polyfill', './index.js' ],
  output: {
    filename: 'main.js',
    path: './dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel?stage=0' ] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'Hello, Alt',
      devServer: 'http://localhost:3000',
      appMountId: 'app'
    })
  ]
}
