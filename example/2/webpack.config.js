const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/example/2')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            loader: require.resolve('../../index'),
            options: {
              rules: [
                {
                  filename: /app.jsx/,
                  interpolations: {
                    foo: 'foo2',
                    bar: 'bar2'
                  }
                }
              ]
            }
          }
        ]
      }, {
        oneOf: [
          {
            test: /\.(js|jsx|mjs)$/,
            use: [
              {
                loader: require.resolve('babel-loader'),
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
    }),
  ]
}
