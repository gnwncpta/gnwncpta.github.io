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

/***/ "./src/fonts.css":
/*!***********************!*\
  !*** ./src/fonts.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lampu-merah/./src/fonts.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Font Weight Needed */\\n/* 300,  */\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n    background-color: rgb(20, 20, 20);\\n    color: white;\\n}\\n\\n@keyframes fade-up {\\n    0% {\\n        top: 40px;\\n        opacity: 1;\\n    }\\n    100% {\\n        top: -100px;\\n        opacity: 0;\\n    }\\n}\\n\\n.fade-up {\\n    position: absolute;\\n    top: -100px;\\n    left: 44.5%;\\n    animation: animate-up .5s;\\n}\\n\\n.fade-down {\\n    position: absolute;\\n    top: 40px;\\n    left: 44.5%;\\n    animation: animate-down .5s;\\n}\\n\\n@keyframes animate-up {\\n    0% {\\n        top: 40px;\\n    }\\n    100% {\\n        top: -100px;\\n    }\\n}\\n\\n@keyframes animate-down {\\n    0% {\\n        top: -100px;\\n    }\\n    100% {\\n        top: 40px;\\n    }\\n}\\n\\n\\n.auto-alert-on {\\n\\n    font-weight: 600;\\n    color: rgb(255, 255, 255);\\n    background-color: rgba(19, 224, 4, 0.826);\\n    padding: 10px 20px;\\n    border-radius: 10px;\\n    border: 1.5px solid rgb(22, 255, 5);\\n    \\n}\\n\\n.auto-alert-off {\\n    font-weight: 600;\\n    color: rgb(255, 255, 255);\\n    background-color: rgba(224, 4, 4, 0.812);\\n    padding: 10px 20px;\\n    border-radius: 10px;\\n    border: 1.5px solid rgb(255, 5, 5);\\n}\\n\\nmain {\\n    width: 80%;\\n    height: 100vh;\\n    margin: auto;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nmain .desc {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin-bottom: 50px;\\n}\\n\\nmain .desc h1 {\\n    margin-bottom: 10px;\\n}\\n\\nmain .desc p {\\n    font-weight: 300;\\n}\\n\\nmain .lampu {\\n    position: relative;\\n}\\n\\nmain img {\\n    margin-bottom: 140px;\\n}\\n\\nmain .buttons {\\n    width: fit-content;\\n    /* border: 1px solid red; */\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n}\\n\\nmain .buttons button {\\n    cursor: pointer;\\n    margin: 0 20px;\\n    border-radius: 20px;\\n}\\n\\nmain .buttons .red {\\n    padding: 10px 20px;\\n    border: none;\\n    color: white;\\n    background-color: red;\\n}\\n\\nmain .buttons .yellow {\\n    padding: 10px 20px;\\n    border: none;\\n    color: black;\\n    background-color: yellow;\\n}\\n\\nmain .buttons .green {\\n    padding: 10px 20px;\\n    border: none;\\n    color: black;\\n    background-color: rgb(19, 255, 35);\\n}\\n\\n.buttons .auto {\\n    margin-top: 20px;\\n    padding: 10px 20px;\\n    box-sizing: border-box;\\n    color: white;\\n    background-color: rgb(20, 20, 20);\\n    border: 1px solid rgb(40, 40, 40);\\n    transition: .2s all;\\n}\\n\\n.buttons .auto:hover {\\n    background-color: rgb(40, 40, 40);\\n}\\n\\nmain .lampu .red-light {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n    background-color: red;\\n    position: absolute;\\n    top: 44px;\\n    left: 37%;\\n\\n    box-shadow: 0px -1px 108px 10px rgba(255,0,0,0.75);\\n}\\n\\nmain .lampu .yellow-light {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n    background-color: yellow;\\n    position: absolute;\\n    top: 150px;\\n    left: 37%;\\n\\n    box-shadow: 0px -1px 108px 10px rgba(255,255,0,0.75);\\n}\\n\\nmain .lampu .green-light {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n    background-color: rgb(19, 255, 35);\\n    position: absolute;\\n    top: 255px;\\n    left: 37%;\\n\\n    box-shadow: 0px -1px 108px 10px rgba(19, 255, 35,0.75);\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\nmain .buttons .active {\\n    background-color: rgb(40, 40, 40);\\n}\\n\\n.hidup {\\n    opacity: 1;\\n}\\n\\n.redup {\\n    opacity: .3;\\n    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);\\n}\\n\\n@media (min-width: 320px) and (max-width: 500px) {\\n  \\n    main .desc p {\\n        font-size: .8em;\\n    }\\n\\n    .red-light {\\n        top: 210px;\\n    }\\n\\n    .yellow-light {\\n        top: 315px;\\n    }\\n\\n    .green-light {\\n        top: 420px;\\n    }\\n\\n    main .buttons {\\n        /* flex-direction: column; */\\n        width: 100%;\\n        margin-bottom: 30px;\\n    }\\n\\n    main .buttons button {\\n        width: 100%;\\n        margin: 10px 10px;\\n        border-radius: 7px;\\n    }\\n\\n    main .desc h1 {\\n        margin-top: 50px;\\n    }\\n    \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lampu-merah/./src/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://lampu-merah/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/Execute.js":
/*!************************!*\
  !*** ./src/Execute.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Buttons Selection\nconst buttons = document.querySelectorAll('button');\n\n// Lights Selection\nconst redLight = document.querySelector('.red-light');\nconst yellowLight = document.querySelector('.yellow-light');\nconst greenLight = document.querySelector('.green-light');\n\n// Alert Selection\nconst autoAlertOn = document.querySelector('.auto-alert-on');\nconst autoAlertOff = document.querySelector('.auto-alert-off');\n\n// Array contains Node\nlet hidup = [];\n\nfunction Execute(){\n    // Looping the Buttons\n    buttons.forEach(button =>  {\n        // Event Listener\n        button.addEventListener('click', (e) => {\n\n            let raw = e.target; // contains raw target element\n            let value = e.target.textContent; // contains textContent of the clicked element\n\n            // if users click contains \"Red\"\n            if(value === \"Red\"){\n                redLight.classList.remove('redup'); // nyalakan lampu merah\n\n                if(hidup.length === 0){\n                    redLight.classList.add('hidup');\n                    hidup.push(redLight);\n\n                } else if(hidup.length > 0){\n                    hidup[0].classList.remove('hidup');\n                    hidup[0].classList.add('redup');\n                    hidup.length = 0;\n\n                    if(hidup.length === 0){\n                        redLight.classList.add('hidup');\n                        let lifeLight = redLight;\n                        hidup.push(lifeLight);\n                    }\n                }\n\n            // If users click contains \"Yellow\"\n            } else if(value == \"Yellow\"){\n                yellowLight.classList.remove('redup'); // nyalakan lampu kuning\n\n                if(hidup.length === 0){\n                    yellowLight.classList.add('hidup');\n                    hidup.push(yellowLight);\n\n                } else if(hidup.length > 0){\n                    hidup[0].classList.remove('hidup');\n                    hidup[0].classList.add('redup');\n                    hidup.length = 0;\n\n                    if(hidup.length === 0){\n                        yellowLight.classList.add('hidup');\n                        let lifeLight = yellowLight;\n                        hidup.push(lifeLight);\n                    }\n                }\n\n            // If users click contains \"Green\"\n            } else if(value == \"Green\"){\n                greenLight.classList.remove('redup'); // nyalakan lampu hijau\n                \n                if(hidup.length === 0){\n                    greenLight.classList.add('hidup');\n                    hidup.push(greenLight);\n\n                } else if(hidup.length > 0){\n                    hidup[0].classList.remove('hidup');\n                    hidup[0].classList.add('redup');\n                    hidup.length = 0;\n\n                    if(hidup.length === 0){\n                        greenLight.classList.add('hidup');\n                        let lifeLight = greenLight;\n                        hidup.push(lifeLight);\n                    }\n                }\n\n            // If users click contains \"Auto\"\n            } else if(raw.classList.contains('auto')){\n\n\n                if(value === \"Auto On\"){\n                    console.log('Auto On Running.');\n\n                    raw.innerHTML = \"Auto Off\";\n                    raw.classList.toggle('active');\n                    // console.log(raw)\n                    autoAlertOn.classList.remove('hidden');\n                    autoAlertOn.classList.remove('fade-up');\n                    autoAlertOn.classList.add('fade-down');\n                    \n                    setTimeout(() => {\n                        // autoAlertOn.classList.add('hidden');\n                        autoAlertOn.classList.remove('fade-down');\n                        autoAlertOn.classList.add('fade-up');\n                    }, 1500);\n                    \n                    if(hidup.length > 0){\n                        hidup[0].classList.remove('hidup');\n                        hidup[0].classList.add('redup');\n                        hidup.length = 0;\n                    }\n\n                    // Timing function to get movement on Traffic Light\n                    let timingLights = {\n                        timingOn: setInterval(() => {\n                            console.log('RUNNING MAN')\n                        }, 2000)\n                    }\n\n\n                } else if(value === \"Auto Off\"){\n                    console.log('Auto Off Running.');\n                    clearInterval(timingLights.timingOn);\n\n                    raw.innerHTML = \"Auto On\";\n                    raw.classList.toggle('active');\n                    // console.log(raw)\n                    autoAlertOff.classList.remove('hidden');\n                    autoAlertOff.classList.remove('fade-up');\n                    autoAlertOff.classList.add('fade-down');\n                    \n                    setTimeout(() => {\n                        autoAlertOff.classList.remove('fade-down');\n                        autoAlertOff.classList.add('fade-up');\n                    }, 1500);\n                    \n                    if(hidup.length > 0){\n                        hidup[0].classList.add('redup');\n                        hidup[0].classList.remove('hidup');\n                        hidup.length = 0;\n                    }\n\n                }\n            }\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Execute);\n\n//# sourceURL=webpack://lampu-merah/./src/Execute.js?");

/***/ }),

/***/ "./src/assets/img/TrafficLight.png":
/*!*****************************************!*\
  !*** ./src/assets/img/TrafficLight.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e15238dee8ae289df82.png\";\n\n//# sourceURL=webpack://lampu-merah/./src/assets/img/TrafficLight.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts.css */ \"./src/fonts.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_img_TrafficLight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/TrafficLight.png */ \"./src/assets/img/TrafficLight.png\");\n/* harmony import */ var _Execute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Execute.js */ \"./src/Execute.js\");\n\n\n\n\n\n(0,_Execute_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://lampu-merah/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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