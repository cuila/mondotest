const path = require("path")
const Html = require("html-webpack-plugin")

module.exports = {
  mode: "production",
  devtool: "hidden-source-map",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new Html({
      template: "public/index.html",
    })
  ]
}