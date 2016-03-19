var path = require('path');
var webpack = require('webpack');
var PORT = process.env.PORT || 4000;

module.exports = {
  cache: true,
  context: __dirname,
  devtool: 'eval-cheap-module-source-map',

  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:' + PORT,
      'webpack/hot/only-dev-server',
      './index.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/',
    filename: '[name].js',
  },

  resolve: {
    modulesDirectories: [
      './node_modules',
    ],
    fallback: path.resolve(__dirname, 'node_modules'),
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot!babel-loader?cacheDirectory,presets[]=es2015,presets[]=react', exclude: /(node_modules|vendor)/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg|jpg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ],
  },

  resolveLoader: {
    fallback: __dirname + '/node_modules',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
};
