const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  mode: env,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devtool: 'source-map',
  plugins: [
    new DotenvPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 4001,
    hot: true
  }
}
