const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    counter: "./src/views/components/counter/index.tsx",
    sample: "./src/views/components/sample/index.tsx"
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};