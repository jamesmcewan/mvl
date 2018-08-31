const { injectBabelPlugin } = require('react-app-rewired');
const babelPluginStyledComponents = require('babel-plugin-styled-components')
  .default;

/* config-overrides.js */
module.exports = function override(config, env) {
  // add a plugin
  config = injectBabelPlugin(babelPluginStyledComponents, config, env);

  return config;
};
