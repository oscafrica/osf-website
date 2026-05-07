exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "babel-loader": require.resolve("babel-loader")
      }
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: "asset/resource"
        }
      ]
    }
  });
};
