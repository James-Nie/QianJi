'use strict';

const pluginName = 'StylesLoadPlugin';

class StylesLoadPlugin {
  options;
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tapAsync(
        {
          name: pluginName,
          stage: compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE, // 在编译中添加额外的 asset。
        },
        (assets) => {
          console.log('=====List of assets and their sizes:');
          Object.entries(assets).forEach(([pathname, source]) => {
            console.log(11111111, `— ${pathname}: ${source.size()} bytes`);
          });
        }
      );
    })
  }
}

module.exports = StylesLoadPlugin;