// Deps ==========================================
const { resolve } = require('path');
const webpack = require('webpack');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

// Export Config =================================
module.exports = {
  devtool: 'eval',
  // context: resolve(__dirname, 'src'),
  devServer: {
    contentBase: resolve(__dirname),
    port: 9999,
    hot: true,
    watchOptions: {
      poll: 500,
    },
    // noInfo: true
  },
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.jsx',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-saga',
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      // ES Lint
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      // ES6
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: resolve(__dirname, 'src/'),
        loader: 'babel-loader',
      },
      // CSS Modules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // "development" will need to escape doubled quotes, read:
      // https://stackoverflow.com/questions/30835213/react-from-npm-cannot-be-used-on-the-client-because-development-is-not-defined
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new StyleLintPlugin({
    //   configFile: resolve(__dirname, '.stylelintrc'),
    //   context: 'src',
    //   files: ['**/*.s?(a|c)ss'],
    // }),
  ],
  performance: {
    hints: 'warning',
    assetFilter: assetFilename => !(/vendor|(\.map)$/.test(assetFilename)),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          minSize: 1,
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      resolve('./src'),
      resolve('./node_modules'),
    ],
  },
};
