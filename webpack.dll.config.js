const { resolve } = require('path');
const webpack = require('webpack');

module.exports = () => ({
  entry: {
    vendor: [resolve(__dirname, 'vendors.js')],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      context: resolve(__dirname, 'dist'),
      path: resolve(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
});
