const isDev = process.env.NODE_ENV === "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  output: {
    filename: "[name].js",
    // path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "asset/[name][ext]",
  },
  module: {
    rules: [
      {
        // 画像やフォントファイル
        test: /\.(ico|png|svg|ttf|otf|jpg|eot|woff?2?)$/,
        type: "asset/resource",
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 2,
          },
        },
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      scriptLoading: "defer",
      favicon: "./src/favicon.ico",
    }),
  ],
};
