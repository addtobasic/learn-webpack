const isDev = process.env.NODE_ENV === "development";

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : undefined,
  entry: "./src/index.jsx",
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
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: isDev } },
          "css-loader",
        ],
      },
    ],
  },
};
