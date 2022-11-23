__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _num_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./num.js */ "./src/num.js");

// 这边使用的是逗号表达式可以转化成=>_num_js__WEBPACK_IMPORTED_MODULE_0__.print()
(0,_num_js__WEBPACK_IMPORTED_MODULE_0__.print)()

function button() {
    const button = document.createElement('button')
    const text = document.createTextNode('click me')
    button.appendChild(text)
    button.onclick = e => __webpack_require__.e(/*! import() */ "src_info_js").then(__webpack_require__.bind(__webpack_require__, /*! ./info.js */ "./src/info.js")).then(res => {
        console.log(res)
        console.log(res.log)
    })
    return button
}

document.body.appendChild(button())


//# sourceURL=webpack://webpack-bundle-analysis/./src/index.js?