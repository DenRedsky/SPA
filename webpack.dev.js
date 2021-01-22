const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { seo } = require('./package.json');

const stats = {
  assets: true,
  colors: true,
  errors: true,
  errorDetails: true,
  modules: false,
  performance: true,
  hash: false,
  version: false,
  timings: true,
  warnings: true,
  children: false
};

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src', 'index.jsx')
  },
  resolve: {
    alias: {
      'services': path.resolve('src', 'services'),
      'styles': path.resolve('src', 'constants.styl'),
      'constants': path.resolve('src', 'constants.js'),
      'api': path.resolve('src', 'api.js'),
      'router': path.resolve('src', 'router.js')
    },
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.styl', '.svg']
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    stats,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: /src/
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        include: /src/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory',
        include: /src/
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ],
        include: /src/
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ],
        include: /src/
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: 'file-loader',
        include: /src/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('src', 'template.hbs'),
      seo
    })
  ]
};
