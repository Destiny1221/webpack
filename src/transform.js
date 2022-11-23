const fs = require('fs')
var str = "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tmpPrint = () => {\n  console.log('tmp.js print')\n}\n\nconst str = \"tempPrint\"\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  tmpPrint,\n  str\n});\n\n//# sourceURL=webpack://webpack-bundle-analysis/./src/temp/temp.js?"
var outputFilePath = './transform/temp.js'
function writeToFile() {
  fs.writeFile(outputFilePath,str,'utf-8',(error, data) => {
     if (error) throw error;
     console.log('写入成功', data)
  })
}
writeToFile()