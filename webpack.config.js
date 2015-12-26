var webpack = require('webpack');
var minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
var plugins = minimize
  ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })]
  : [];

module.exports = {
  entry: './src/ttkeymirror.js',
  output: {
    path: './dist',
    filename: minimize ? 'ttkeymirror.min.js' : 'ttkeymirror.js',
    libraryTarget: 'umd',
    library: 'TTKeyMirror'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  plugins: plugins
};
