const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let routes = require('./routes');

module.exports = {
  mode: 'development',
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/example/3')
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
                    routes: routes
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
    new webpack.HotModuleReplacementPlugin()
  ]
}
