/**
 * Created by Justin on 2016-02-03.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var PORT = process.env.PORT || 4000;
var _ = require('lodash');
var argv = require('yargs')
  .alias('s', 'sourceMaps')
  .argv;

if (argv.sourceMaps) console.log('Using full source maps');

const parametricConfig = {
  devtool: argv.sourceMaps ? 'source-map' : config.devtool,
};

const conf = _.assign(config, parametricConfig);

new WebpackDevServer(webpack(conf), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    color: true,
  },
}).listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Leonardo Development Server Started.');
  console.log('Listening at localhost:' + PORT);
});
