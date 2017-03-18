const path = require('path')
const BASE = path.resolve(__dirname)
const webpack = require('webpack')
const DotEnv = require('dotenv-webpack')

module.exports = {
  devtool: 'inline-cheap-module-source-map',
  entry: path.join(BASE, 'test', 'index.js'),
  output: {
    path: path.join(BASE, 'build/test'),
    filename: 'test.bundle.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  target: 'node',
  node: {
    fs: 'empty'
  },
  externals: [ /firebase/ ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new DotEnv({ path: path.resolve(BASE, '..', '.env') }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/react\/lib\/(?:ExecutionEnvironment|ReactContext)/),
    new webpack.IgnorePlugin(/react\/addons/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'testing'),
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: {
      warnings: false,
      drop_console: true,
      dead_code: true,
    },
      comments: false }),
  ]
}
