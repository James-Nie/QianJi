'use strict';
const path = require('path');
const fs = require('fs');

module.exports = function (tsxContent) {
  const options = this.getOptions();
  const { name="index.css" } = options;
  try {
    // const relPath = path.resolve(__dirname, this.resourcePath).replace(/\\/g, '/');
    let cssPath = this.resourcePath.split('/');
    cssPath.pop();
    cssPath = cssPath.join('/') + `/${name}`;
    const isExists = fs.existsSync(cssPath)

    if(isExists) {
      let cssContent = fs.readFileSync(cssPath, 'utf8');
      cssContent = cssContent.toString().replace(/\r\n/g, "").replace(/\s+/g, ' '); // 去掉换行和空格

      const resContent = tsxContent.substring(0, tsxContent.lastIndexOf('}')) + `_styles() { return "${cssContent}" }}`;

      return resContent;
    }

    return tsxContent;
  } catch (error) {
    console.log(error);
    return tsxContent;
  }
  
};