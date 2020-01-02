const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'lib/BackgroundSlider.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules|bower_components|example/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
