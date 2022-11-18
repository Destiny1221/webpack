/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
  /**
   * __unused_webpack_module:{exports:{}}
   * __webpack_exports__:__unused_webpack_module.exports即{}
   * __webpack_require__:__webpack_require__函数
   */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    __webpack_require__.r(__webpack_exports__);
    // webpack解析import { print } from './num.js'语法，内部还是调用__webpack_require__递归逐层解析依赖
/* harmony import */ var _num_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./num.js */ "./src/num.js");
/**
 * 入口文件，引入 print 方法，并执行
 * 定义了一个 button 方法，为页面添加一个按钮，并为按钮设置了一个 onclick 事件，负责动态引入一个文件
 */

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

    /***/ }),
    
    /***/ "./src/num.js":
    /*!********************!*\
      !*** ./src/num.js ***!
      \********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */   "print": () => (/* binding */ print)
        /* harmony export */ });
        /* harmony import */ var _temp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp.js */ "./src/temp.js");
        
        function print () {
          (0,_temp_js__WEBPACK_IMPORTED_MODULE_0__.tmpPrint)() 
          console.log('我是 num.js 的 print 方法')
        }
        
        
        //# sourceURL=webpack://webpack-bundle-analysis/./src/num.js?
    
    /***/ }),
    
    /***/ "./src/temp.js":
    /*!*********************!*\
      !*** ./src/temp.js ***!
      \*********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */   "tmpPrint": () => (/* binding */ tmpPrint)
        /* harmony export */ });
        function tmpPrint () {
            console.log('tmp.js print')
          }
          
        
        //# sourceURL=webpack://webpack-bundle-analysis/./src/temp.js?
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
                // 定义模块缓存
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
                /**
                 * 文件路径，比如./src/index.js
                 * @param {*} moduleId 
                 * @returns 
                 */
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
                    // 检查模块缓存对象上是否存在该moduldeId，如果存在使用缓存
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
                    // 定义一个模块并把它放入缓存对象中，模块是一个包含exports属性的对象
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
                    // __webpack_modules__是一个根据模块之间的依赖关系，webpack内部处理成一个对象，
                    // 对象的key是模块的路径，value是一个可执行函数
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module，返回对象的exports属性
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = __webpack_modules__;
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
                    /**
                     * 在exports对象上定义一个key、value，key为模块名称,value为可执行函数
                     * @param {*} exports 
                     * @param {*} definition 
                     */
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/ensure chunk */
    /******/ 	(() => {
    /******/ 		__webpack_require__.f = {};
    /******/ 		// This file contains only the entry chunk.
    /******/ 		// The chunk loading function for additional chunks
    /******/ 		__webpack_require__.e = (chunkId) => {
    /******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
    /******/ 				__webpack_require__.f[key](chunkId, promises);
    /******/ 				return promises;
    /******/ 			}, []));
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/get javascript chunk filename */
    /******/ 	(() => {
    /******/ 		// This function allow to reference async chunks
    /******/ 		__webpack_require__.u = (chunkId) => {
    /******/ 			// return url for filenames based on template
    /******/ 			return "" + chunkId + ".main.js";
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/global */
    /******/ 	(() => {
    /******/ 		__webpack_require__.g = (function() {
    /******/ 			if (typeof globalThis === 'object') return globalThis;
    /******/ 			try {
    /******/ 				return this || new Function('return this')();
    /******/ 			} catch (e) {
    /******/ 				if (typeof window === 'object') return window;
    /******/ 			}
    /******/ 		})();
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
                    // 检查对象自由属性值是否存在
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/load script */
    /******/ 	(() => {
    /******/ 		var inProgress = {};
    /******/ 		var dataWebpackPrefix = "webpack-bundle-analysis:";
    /******/ 		// loadScript function to load a script via script tag
    /******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
    /******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
    /******/ 			var script, needAttach;
    /******/ 			if(key !== undefined) {
    /******/ 				var scripts = document.getElementsByTagName("script");
    /******/ 				for(var i = 0; i < scripts.length; i++) {
    /******/ 					var s = scripts[i];
    /******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
    /******/ 				}
    /******/ 			}
    /******/ 			if(!script) {
    /******/ 				needAttach = true;
    /******/ 				script = document.createElement('script');
    /******/ 		
    /******/ 				script.charset = 'utf-8';
                    // 设置超时时间
    /******/ 				script.timeout = 120;
    /******/ 				if (__webpack_require__.nc) {
    /******/ 					script.setAttribute("nonce", __webpack_require__.nc);
    /******/ 				}
    /******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
    /******/ 				script.src = url;
    /******/ 			}
    /******/ 			inProgress[url] = [done];
    /******/ 			var onScriptComplete = (prev, event) => {
    /******/ 				// avoid mem leaks in IE.
    /******/ 				script.onerror = script.onload = null;
    /******/ 				clearTimeout(timeout);
    /******/ 				var doneFns = inProgress[url];
    /******/ 				delete inProgress[url];
                    // 加载完成之后去除头部的script标签
    /******/ 				script.parentNode && script.parentNode.removeChild(script);
    /******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
    /******/ 				if(prev) return prev(event);
    /******/ 			};
                  // 超时定时器，超时以后执行
    /******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
                  // 加载出错或者加载成功的处理函数
    /******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
    /******/ 			script.onload = onScriptComplete.bind(null, script.onload);
                  // 将 script 标签添加到 head 标签尾部
    /******/ 			needAttach && document.head.appendChild(script);
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
                    /**
                     * 定义__esModule属性在exports对象上，值为true
                     * @param {*} exports {}
                     */
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/publicPath */
    /******/ 	(() => {
                // 获取公共路径
    /******/ 		var scriptUrl;
    /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    /******/ 		var document = __webpack_require__.g.document;
    /******/ 		if (!scriptUrl && document) {
                  // 返回当前正在运行的脚本所属的<script>元素
    /******/ 			if (document.currentScript)
                    // 比如：http://127.0.0.1:5500/dist/main.js
    /******/ 				scriptUrl = document.currentScript.src
    /******/ 			if (!scriptUrl) {
    /******/ 				var scripts = document.getElementsByTagName("script");
    /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
    /******/ 			}
    /******/ 		}
    /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
                // 通过正则表达式获取公共路径上面的scriptSrc=>http://127.0.0.1:5500/dist/
    /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    /******/ 		__webpack_require__.p = scriptUrl;
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/jsonp chunk loading */
    /******/ 	(() => {
    /******/ 		// no baseURI
    /******/ 		
    /******/ 		// object to store loaded and loading chunks
    /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ 		var installedChunks = {
    /******/ 			"main": 0
    /******/ 		};
    /******/ 		
    /******/ 		__webpack_require__.f.j = (chunkId, promises) => {
    /******/ 				// JSONP chunk loading for javascript
                    // 从缓存中寻找该模块
    /******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
    /******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
    /******/ 		      // 说明该模块没有安装
    /******/ 					// a Promise means "currently loading".
                      // 表示该模块正在loading加载
    /******/ 					if(installedChunkData) {
    /******/ 						promises.push(installedChunkData[2]);
    /******/ 					} else {
    /******/ 						if(true) { // all chunks have JS
    /******/ 							// setup Promise in chunk cache
                          // 设置chunk缓存，该chunk的值为一个数组，第一项和第二项为resolve和reject函数
    /******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
                          // 该chunk的值的第三项将promise对象加进去
    /******/ 							promises.push(installedChunkData[2] = promise);
    /******/ 							// start chunk loading
                          // 获取到chunk的地址：http://127.0.0.1:5500/dist/src_info_js.main.js
    /******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
    /******/ 							// create error before stack unwound to get useful stacktrace later
    /******/ 							var error = new Error();
    /******/ 							var loadingEnded = (event) => {
    /******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
    /******/ 									installedChunkData = installedChunks[chunkId];
                              // 如果chunk状态不为0，说明加载出问题了，直接调用installedChunks[chunkId][1]，将错误reject出去
    /******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
    /******/ 									if(installedChunkData) {
    /******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
    /******/ 										var realSrc = event && event.target && event.target.src;
    /******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
    /******/ 										error.name = 'ChunkLoadError';
    /******/ 										error.type = errorType;
    /******/ 										error.request = realSrc;
    /******/ 										installedChunkData[1](error);
    /******/ 									}
    /******/ 								}
    /******/ 							};
    /******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
    /******/ 						} else installedChunks[chunkId] = 0;
    /******/ 					}
    /******/ 				}
    /******/ 		};
    /******/ 		
    /******/ 		// no prefetching
    /******/ 		
    /******/ 		// no preloaded
    /******/ 		
    /******/ 		// no HMR
    /******/ 		
    /******/ 		// no HMR manifest
    /******/ 		
    /******/ 		// no on chunks loaded
    /******/ 		
    /******/ 		// install a JSONP callback for chunk loading
    /******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
    /******/ 			var [chunkIds, moreModules, runtime] = data;
    /******/ 			// add "moreModules" to the modules object,
    /******/ 			// then flag all "chunkIds" as loaded and fire callback
    /******/ 			var moduleId, chunkId, i = 0;
    /******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
    /******/ 				for(moduleId in moreModules) {
    /******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
                        // 将异步加载模块挂在到__webpack_modules__对象上
    /******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
    /******/ 					}
    /******/ 				}
    /******/ 				if(runtime) var result = runtime(__webpack_require__);
    /******/ 			}
    /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
    /******/ 			for(;i < chunkIds.length; i++) {
    /******/ 				chunkId = chunkIds[i];
    /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                      // 调用resolve函数
    /******/ 					installedChunks[chunkId][0]();
    /******/ 				}
                    // 修改installedChunks[chunkId]为0表示加载成功
    /******/ 				installedChunks[chunkId] = 0;
    /******/ 			}
    /******/ 		
    /******/ 		}
    /******/ 		
    /******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_bundle_analysis"] = self["webpackChunkwebpack_bundle_analysis"] || [];
                console.log('chunkLoadingGlobal:',chunkLoadingGlobal)
    /******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/ 	})();
    /******/ 	
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
    /******/ 	
    /******/ })()
    ;