/** @format */

require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',

    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true, // Tree shaking
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin(['CHAT_SERVER_BASE_URL', 'ROUTER_BASENAME']),
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new WebpackPwaManifest({
      name: 'Chat App',
      short_name: 'ChatApp',
      description: 'Basic chat made with React/Typescript/NodeJS/Websockets.',
      filename: 'manifest.json',
      background_color: '#009688',
      theme_color: '#009688',
      display: 'fullscreen',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('./assets/logo.png'),
          sizes: [72, 96, 128, 144, 192, 384, 512],
        },
        {
          src: path.resolve('./assets/logo.png'),
          sizes: [120, 152, 167, 180],
          ios: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}
