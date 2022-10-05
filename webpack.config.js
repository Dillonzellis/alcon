const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [{
      test: /\.(s[ac]|c)ss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    }]
  }
};