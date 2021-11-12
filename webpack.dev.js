// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './museum-dom/app.js',
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.(?:ico|gif|jpg|png|mp4)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './museum-dom/index.html',
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  },
};
