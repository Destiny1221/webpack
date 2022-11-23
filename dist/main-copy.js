/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _num_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./num.js */ \"./src/num.js\");\n\n\n(0,_num_js__WEBPACK_IMPORTED_MODULE_0__.print)()\n\nfunction button() {\n    const button = document.createElement('button')\n    const text = document.createTextNode('click me')\n    button.appendChild(text)\n    button.onclick = e => __webpack_require__.e(/*! import() */ \"src_info_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./info.js */ \"./src/info.js\")).then(res => {\n        console.log(res)\n        console.log(res.log)\n    })\n    return button\n}\n\ndocument.body.appendChild(button())\n\n\n//# sourceURL=webpack://webpack-bundle-analysis/./src/index.js?");

  /***/ }),
  
  /***/ "./src/num.js":
  /*!********************!*\
    !*** ./src/num.js ***!
    \********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"print\": () => (/* binding */ print)\n/* harmony export */ });\n/* harmony import */ var _temp_temp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp/temp.js */ \"./src/temp/temp.js\");\n\n\nvar str = \"执行num.js中的同步代码\"\nconsole.log(str)\nfunction print() {\n  ;(0,_temp_temp_js__WEBPACK_IMPORTED_MODULE_0__.tmpPrint)()\n  console.log('我是 num.js 的 print 方法')\n}\n\n\n//# sourceURL=webpack://webpack-bundle-analysis/./src/num.js?");
  
  /***/ }),
  
  /***/ "./src/temp/temp.js":
  /*!**************************!*\
    !*** ./src/temp/temp.js ***!
    \**************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"str\": () => (/* binding */ str),\n/* harmony export */   \"tmpPrint\": () => (/* binding */ tmpPrint)\n/* harmony export */ });\nfunction tmpPrint() {\n  console.log('tmp.js print')\n}\n\nvar str = \"tempPrint\"\n\n//# sourceURL=webpack://webpack-bundle-analysis/./src/temp/temp.js?");
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache 定义模块缓存
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
            /**
             * 接收一个moduleId，其实就是一个模块的相对路径，然后查缓存(没有则添加缓存)
             * 然后执行模块代码，返回模块运行后的module.exports
             * 一句话总结就是 加载指定模块然后执行，返回执行结果（module.exports)
             * @param {*} moduleId 
             * @returns 
             */
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache  检查模块缓存对象上是否存在该moduldeId，如果存在使用缓存
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache) 创建一个模块并将他放入缓存中
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function 执行模块内的代码，通过eval函数实现
  /******/ 		// __webpack_modules__是一个根据模块之间的依赖关系，webpack内部处理成一个对象，key是模块的相对路径，value是一个可执行函数
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = __webpack_modules__;
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
              // 将每个模块中导出的属性定义到该模块的exports对象中
  /******/ 		// define getter functions for harmony exports
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
  /******/ 	/* webpack/runtime/get javascript chunk filename 获取webpack打包的各个chunk的文件名 */
  /******/ 	(() => {
  /******/ 		// This function allow to reference async chunks
  /******/ 		__webpack_require__.u = (chunkId) => {
  /******/ 			// return url for filenames based on template
  /******/ 			return "" + chunkId + ".main.js";
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/global 获取全局对象 */
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
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand 检查对象上是否存在某个属性*/
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/load script 加载异步脚本 */
  /******/ 	(() => {
  /******/ 		var inProgress = {};
  /******/ 		var dataWebpackPrefix = "webpack-bundle-analysis:";
  /******/ 		// loadScript function to load a script via script tag
              /**
              * url:http://127.0.0.1:5500/dist/src_info_js.main.js
              * key:chunk-src_info_js
              * chunkId:src_info_js
              */
  /******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
  /******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
  /******/ 			var script, needAttach;
  /******/ 			if(key !== undefined) {
                  // 如果页面上已经有该脚本文件了就使用该脚本文件否则创建script标签
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
  /******/ 				script.timeout = 120; // 设置超时时间
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
  /******/ 			  // 脚本加载完毕从head中删除
  /******/ 				script.parentNode && script.parentNode.removeChild(script);
  /******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
  /******/ 				if(prev) return prev(event);
  /******/ 			};
  /******/ 			// 超时定时器，超时以后执行
  /******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
  /******/ 			// 加载出错或者加载成功的处理函数
  /******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
  /******/ 			script.onload = onScriptComplete.bind(null, script.onload);
  /******/ 			// 添加脚本进head标签内，发起http请求，执行异步脚本
  /******/ 			needAttach && document.head.appendChild(script);
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports 定义__esModule属性在exports对象上，值为true
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/publicPath 获取公共路径 */
  /******/ 	(() => {
  /******/ 		var scriptUrl;
  /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
  /******/ 		var document = __webpack_require__.g.document;
  /******/ 		if (!scriptUrl && document) {
  /******/ 		  // 返回当前正在运行的脚本所属的<script>元素
  /******/ 			if (document.currentScript)
  /******/ 			  // 比如：http://127.0.0.1:5500/dist/main.js
  /******/ 				scriptUrl = document.currentScript.src
  /******/ 			if (!scriptUrl) {
  /******/ 				var scripts = document.getElementsByTagName("script");
  /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
  /******/ 			}
  /******/ 		}
  /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
  /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
  /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
  /******/ 		// 通过正则表达式获取公共路径上面的scriptSrc=>http://127.0.0.1:5500/dist/
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
  /******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
  /******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
  /******/ 		
  /******/ 					// a Promise means "currently loading".
  /******/ 					if(installedChunkData) {
  /******/ 						promises.push(installedChunkData[2]);
  /******/ 					} else {
  /******/ 						if(true) { // all chunks have JS
  /******/ 							// setup Promise in chunk cache 设置chunk缓存，该chunk的值为一个数组，第一项和第二项为resolve和reject函数
  /******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
  /******/ 							promises.push(installedChunkData[2] = promise); // 将promise对象添加到数组中
  /******/ 		
  /******/ 							// start chunk loading
  /******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId); // 获取到chunk的地址：http://127.0.0.1:5500/dist/src_info_js.main.js
  /******/ 							// create error before stack unwound to get useful stacktrace later
  /******/ 							var error = new Error();
  /******/ 							var loadingEnded = (event) => {
  /******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
  /******/ 									installedChunkData = installedChunks[chunkId];
  /******/ 									// 如果chunk状态不为0，说明加载出问题了，直接调用installedChunks[chunkId][1]，将错误reject出去
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
  /******/ 					 // 将异步加载模块挂在到__webpack_modules__对象上
  /******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
  /******/ 					}
  /******/ 				}
  /******/ 				if(runtime) var result = runtime(__webpack_require__);
  /******/ 			}
  /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
  /******/ 			for(;i < chunkIds.length; i++) {
  /******/ 				chunkId = chunkIds[i];
  /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
  /******/ 					installedChunks[chunkId][0](); // 调用resolve函数
  /******/ 				}
  /******/ 				installedChunks[chunkId] = 0; // 修改installedChunks[chunkId]为0表示加载成功
  /******/ 			}
  /******/ 		
  /******/ 		}
  /******/ 		
  /******/ 		// 设置全局函数，在异步脚本执行时，执行webpackJsonpCallback，类似于JSONP思想
  /******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_bundle_analysis"] = self["webpackChunkwebpack_bundle_analysis"] || [];
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