const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  fallback: {
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
    "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
  },
  plugins: [new CleanWebpackPlugin(), new NodePolyfillPlugin()],
}