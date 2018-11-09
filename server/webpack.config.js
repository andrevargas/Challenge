const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
};
