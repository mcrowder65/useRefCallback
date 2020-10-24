const { override, addBabelPlugin, disableEsLint,addBundleVisualizer } = require("customize-cra")
const { addReactRefresh } = require("customize-cra-react-refresh")

let config = override(
  disableEsLint(),
  addBabelPlugin("babel-plugin-emotion"),
  addReactRefresh(),
  process.env.ANALYZE && addBundleVisualizer(),
)

/*eslint-disable no-param-reassign */
if (process.env.NODE_ENV === "test") {
  config = {
    ...config,
    babelrc: true,
    jest: (config) => {
      config.setupFilesAfterEnv = ["<rootDir>/test/setup-tests.js"]
      config.modulePaths = ["."]

      return config
    },
  }
}

module.exports = config
