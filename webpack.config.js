const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './client/main.tsx'
  },
  mode: "development",
  devtool: 'source-maps',
  cache: true,
  output: {
    publicPath: '/build',
    path: path.join(__dirname, './static/build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
  },
  devServer: {
    contentBase: './static'
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'},]},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'}
    ]
  }
};