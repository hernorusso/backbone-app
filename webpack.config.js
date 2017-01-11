var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  externals: {
    jquery: 'jQuery',
    backbone: 'Backbone',
    underscore: '_'
  },
  plugins: [
    new webpack.ProvidePlugin({
       $: 'jquery',
       _: 'underscore'
    })
  ]
};
