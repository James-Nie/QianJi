var path = require("path");
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicPath = '/app';

const baseConfig = {
  mode: 'production',
  entry: "./main.ts",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.js",
    publicPath: publicPath
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    alias: {
      QianJi: path.resolve(__dirname, 'QianJi/index')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
     }
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        use: ["ts-loader"]
      },
      {
        test: /\.([cm]?tsx)$/,
        use: ["./build/loaders/web-component-css-loader"]
      },
      {
        test: /\.js?$/,
        use: ["source-map-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};

const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      publicPath: publicPath,
      directory: path.join(__dirname, './')
    },
    hot: true,
    compress: false,
    port: 3335,
  },
}

var config = baseConfig;

if(process.env.NODE_ENV === 'development'){
  config = merge(config, devConfig)
}


module.exports = config ;