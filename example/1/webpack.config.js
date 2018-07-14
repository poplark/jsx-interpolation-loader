const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './app.jsx'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../../dist/example/1')
  },
  resolve: {
    extensions: ['js', 'jsx']
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx|mjs)$/,
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  compact: true,
                  presets: [
                    'env',
                    'react',
                  ],
                }
              }, {
                loader: require.resolve('../../index'),
                options: {
                  rules: [
                    {
                      filename: /app.jsx/,
                      interpolations: {
                        foo: 'foo',
                        bar: 'bar'
                      }
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
