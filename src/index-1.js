__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _num_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./num.js */ "./src/num.js");
/**
 * 入口文件，引入 print 方法，并执行
 * 定义了一个 button 方法，为页面添加一个按钮，并为按钮设置了一个 onclick 事件，负责动态引入一个文件
 */


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