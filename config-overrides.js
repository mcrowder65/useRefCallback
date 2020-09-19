const { override, addBabelPlugin, disableEsLint } = require("customize-cra")
const { addReactRefresh } = require("customize-cra-react-refresh")

/* config-overrides.js */
module.exports = override(
  disableEsLint(),
  addBabelPlugin("babel-plugin-emotion"),
  addReactRefresh(),
)
