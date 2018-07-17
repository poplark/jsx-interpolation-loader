const path = require('path');
const webpack = require('webpack');

console.log('Start Building...');

const config = require(path.resolve(process.cwd(), `./webpack.config`));

const compiler = webpack(config);

compiler.run((err, stats) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(stats.toString({colors: true}), '\n');
});
