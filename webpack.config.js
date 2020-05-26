const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const devMode = process.env.NODE_ENV !== 'production';
const mode = devMode ? 'development' : 'production';

module.exports = {
  mode: mode,
  entry: {
    "youtube-embed-helper": [
      './src/js/index.js',
      './src/scss/youtube-embed-helper.scss',
      './src/scss/demo.scss',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            }
          },
          'extract-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from: 'src/copy'},
      ],
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['dist']}
    }),
  ],
};
