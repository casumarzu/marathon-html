var NODE_ENV = process.env.NODE_ENV;
var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var colors = require('colors');
var plugins;

if(NODE_ENV === 'development'){
  plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'D.App',
      favicon: path.join(__dirname, '..', '/src', 'favicon.ico'),
      template: path.join(__dirname, '..', '/src', '/templates/index.html'),
      chunks: ['common', 'alpha', 'vendors']
    }),
    // new NpmInstallPlugin(),
    new ExtractTextPlugin(),
    new CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(function(percentage, msg) {
      var percentage = (percentage * 100) + '%';
      console.log(percentage.cyan, msg.green);
    }),
    new webpack.NoErrorsPlugin()
  ];
}else if(NODE_ENV === 'production'){
  plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      title: 'P.App',
      favicon: path.join(__dirname, '..', '/src', 'favicon.ico'),
      template: path.join(__dirname, '..', '/src', '/templates/index.html'),
      chunks: ['common', 'beta', 'vendors'],
    }),
    new CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
    new ExtractTextPlugin('bundle.[hash].css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    // new NpmInstallPlugin()
  ];
}

module.exports = plugins;
