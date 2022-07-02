/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  devtool: "source-map", // または 'inline-source-map' など
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
};
