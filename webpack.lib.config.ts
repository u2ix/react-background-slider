import webpack from 'webpack'
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const libraryConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, 'lib/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
    globalObject: 'this',
    library: {
      name: 'react-background-slider',
      type: 'umd',
    }
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js']
  }
}

export default libraryConfig
