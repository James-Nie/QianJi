'use strict';

const pluginName = 'StylesLoadPlugin';

class StylesLoadPlugin {
  options;
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {

    // compiler.hooks.compilation.tap(pluginName, (compilation, callback) => {
    //   // console.log('assets', compilation.assets);
    //   Object.keys(compilation.assets).forEach(filename => {
    //       const sourceText = compilation.assets[filename].source();
    //       console.log('sourceText', sourceText)
    //       const rgx = /,console.log\(['|"](.*?)['|"]\)/;
    //       const newData = sourceText.replace(rgx, "");
    //       compilation.assets[filename] = {
    //           source: function() {
    //               return newData;
    //           },
    //           size: function() {
    //               return newData.length;
    //           }
    //       }
    //   })
    //   callback();
    // })
  }
}

module.exports = StylesLoadPlugin;