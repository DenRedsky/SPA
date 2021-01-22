const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CheckDuplicatePlugin = require('duplicate-package-checker-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const { seo } = require('./package.json');

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src', 'index.jsx')
  },
  output: {
    filename: 'js/[name].[contenthash].js'
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
  devtool: false,
  stats: {
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
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: /src/
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        include: /src/
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCss.loader,
            options: {
              esModule: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          'stylus-loader'
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
        test: /\.(png|jpg)$/,
        use: 'file-loader',
        include: /src/
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      minChunks: 2,
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('src', 'template.hbs'),
      seo,
      minify: true
    }),
    new MiniCss({ filename: 'css/[name].[contenthash].css', ignoreOrder: true }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: {
        zindex: false,
        discardComments: { removeAll: true }
      }
    }),
    new CheckDuplicatePlugin(),
    new UnusedFilesWebpackPlugin({ patterns: ['src/**/*.*'] })
  ]
};
