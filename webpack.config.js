// Deps ==========================================
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Export Config =================================
module.exports = {
  module: {
    rules: [
      // ES6
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // CSS Modules
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
