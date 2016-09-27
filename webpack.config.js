module.exports = {
  entry: './web/app.ts',
  output: {
    filename: 'build/bundle.js'
  },

  // Turn on sourcemaps
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
