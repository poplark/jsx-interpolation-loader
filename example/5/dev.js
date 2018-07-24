const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const HOST = 'localhost',
  PORT = 3000;

config['entry'].unshift(`webpack-dev-server/client?http://${HOST}:${PORT}/`, 'webpack/hot/dev-server');

const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
  contentBase: [path.resolve(__dirname, '../../dist/example/5'), path.resolve(__dirname)],
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

server.listen(PORT, HOST, err => {
  if (err) {
      return console.error(err);
  }
  console.log('Starting...');
  console.log(`Please visit at ${HOST}:${PORT} after building`);
});
