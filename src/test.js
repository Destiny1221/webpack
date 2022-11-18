const fs = require('fs')
function writeToFile() {
    var str = "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"log\": () => (/* binding */ log)\n/* harmony export */ });\nconst log = \"log info\"\n\n\n//# sourceURL=webpack://webpack-bundle-analysis/./src/info.js?"
    fs.writeFile('./info-1.js', str, 'utf-8', (error, data) => {
        if (error) throw error;
        console.log('写入成功', data)
    })
}
writeToFile()