/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  devtool: "source-map", // または 'inline-source-map' など
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
    ],
  },
};
