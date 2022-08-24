import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
  port: 9000,
};

const exampleConfig: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'example/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist-example/'),
    filename: 'index.js',
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'example/public/index.html')
    }),
    new CopyPlugin({
      patterns: [
        { from: 'example/public/favicon.ico', to: 'favicon.ico' },
        { from: 'example/public/favicon.png', to: 'favicon.png' },
        { from: 'example/public/manifest.json', to: 'manifest.json' },
      ]})
  ],
  devServer,
}

export default exampleConfig
