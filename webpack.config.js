const path = require('path');
const webpack = require('webpack');

//  Plugins
const jQueryProvider = new webpack.ProvidePlugin({
   $: 'jquery'
});

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
    jquery: 'jQuery'
  },
  plugins: [
    jQueryProvider
  ]
};
