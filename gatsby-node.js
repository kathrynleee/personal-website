exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // With SSR enabled during development, we capture this
  // in development and during production build.
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@splidejs/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}