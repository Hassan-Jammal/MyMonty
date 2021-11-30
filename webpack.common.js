const path = require("path");

module.exports = {
  entry: {
    main: { import: "./src/index.js", dependOn: "shared" },
    shared: "lodash"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/i,
        type: "asset/resource"
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    assetModuleFilename: "images/[name].[contenthash][ext]"
  }
};