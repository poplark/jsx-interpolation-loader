const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

config['entry'].unshift('webpack-dev-server/client?http://localhost:3000/', 'webpack/hot/dev-server');

const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
  contentBase: [path.resolve(__dirname, '../../dist/example/3'), path.resolve(__dirname)],
  // By default files from `contentBase` will not trigger a page reload.
  watchContentBase: true,
  // publicPath: '/assets/',
  hot: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
});

server.listen(3000);
