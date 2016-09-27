module.exports = {
  entry: './web/app.ts',
  output: {
    filename: 'build/bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
