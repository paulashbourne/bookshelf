module.exports = {
  entry: './web/app.ts',
  output: {
    filename: 'static/js/app.js'
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
};
