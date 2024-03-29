const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "jtab.js",
    library: {
      name: "jtab",
      type: "var"
    },
  },
  externals:{
    "jquery": "jQuery",
    "raphael": "Raphael"
  },
};
