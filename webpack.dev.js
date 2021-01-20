const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
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
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
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
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve('dist'),
    historyApiFallback: true,
    stats,
    port: 3000,
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  stats,
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/
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
        exclude: /node_modules/
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
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('src', 'template.hbs'),
      seo
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
