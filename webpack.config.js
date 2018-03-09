// Deps ==========================================
const { resolve } = require('path');
const webpack = require('webpack');

// Export Config =================================
module.exports = {
  devtool: 'eval',
  // context: resolve(__dirname, 'src'),
  devServer: {
    contentBase: resolve(__dirname),
    port: 9999,
    hot: true,
    watchOptions: {
      poll: 500
    }
    // noInfo: true
  },
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-saga',
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      // ES6
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: resolve(__dirname, 'src/'),
        loader: "babel-loader"
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: "warning",
    assetFilter: assetFilename => !(/vendor|(\.map)$/.test(assetFilename))
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          minSize: 1,
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    modules: [
      resolve('./src'),
      resolve('./node_modules'),
    ],
  }
};
