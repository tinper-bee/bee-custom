var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',

  devtool: "source-map",

  output: {
    path: path.join(__dirname, "./dist"),
      libraryTarget: 'umd',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg|woff)/,
        loader: 'url?limit=10240'
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        loader: 'url?limit=10240'
      }
    ]
  },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'tinper-bee': 'tinper-bee',
        'react-router': 'ReactRouter',
        'redux': 'Redux',
        'react-redux': 'ReactRedux'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html")
    }),
    new ExtractTextPlugin("index.css")
  ]

}
