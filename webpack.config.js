const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack PWA',
    }),
    new CleanWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
    writeToDisk: true
  }
 };