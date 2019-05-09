const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  mode: 'production',
  entry: resolve(__dirname, './index.jsx'),
  output: {
    path: resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  chrome: '58',
                  ie: '11',
                },
                useBuiltIns: 'entry',
                corejs: 3,
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './index.html'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}

module.exports = config
