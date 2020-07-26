
const {
  override,
  addWebpackAlias,
  addBabelPlugin,
  disableEsLint
} = require("customize-cra");


const path = require('path');

module.exports = override(
  disableEsLint(),
  addBabelPlugin('transform-react-pug'),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "$": path.resolve(__dirname, "src/components"),
  })


);

// module.exports = function override(config, env) {
//   config = injectBabelPlugin('transform-react-pug', config);
  
//   config = rewireAliases.aliasesOptions({
// 		'@': path.resolve(__dirname, `${paths.appSrc}`)
//   })(config, env);
  
//   return config;
// }