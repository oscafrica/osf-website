exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "babel-loader": require.resolve("babel-loader"),
      },
    },
  });
};
