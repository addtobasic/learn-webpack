module.exports = {
  entry: `./src/index.js`,
  mode: "development",
  devServer: {
    static: "dist",
    open: true,
  },

  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
};
