const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, { mode }) => ({
  target: 'web',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  entry: './src',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: mode === 'production' ? '/react-suspense-example/' : '/'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-import')({ addDependencyTo: 'webpack' }),
                require('postcss-cssnext')()
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-object-rest-spread'
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
    // new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })
  ]
})
