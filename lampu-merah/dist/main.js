/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lampu-merah/./src/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Font Weight Needed */\\n/* 300,  */\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\nbody {\\n    background-color: rgb(20, 20, 20);\\n    color: white;\\n}\\n\\n@keyframes fade-up {\\n    0% {\\n        top: 40px;\\n        opacity: 1;\\n    }\\n    100% {\\n        top: -100px;\\n        opacity: 0;\\n    }\\n}\\n\\n.fade-up {\\n    position: absolute;\\n    top: -100px;\\n    left: 44.5%;\\n    animation: animate-up .5s;\\n}\\n\\n.fade-down {\\n    position: absolute;\\n    top: 40px;\\n    left: 44.5%;\\n    animation: animate-down .5s;\\n}\\n\\n@keyframes animate-up {\\n    0% {\\n        top: 40px;\\n    }\\n    100% {\\n        top: -100px;\\n    }\\n}\\n\\n@keyframes animate-down {\\n    0% {\\n        top: -100px;\\n    }\\n    100% {\\n        top: 40px;\\n    }\\n}\\n\\n\\n.auto-alert-on {\\n\\n    font-weight: 600;\\n    color: rgb(255, 255, 255);\\n    background-color: rgba(19, 224, 4, 0.826);\\n    padding: 10px 20px;\\n    border-radius: 10px;\\n    border: 1.5px solid rgb(22, 255, 5);\\n    \\n}\\n\\n.auto-alert-off {\\n    font-weight: 600;\\n    color: rgb(255, 255, 255);\\n    background-color: rgba(224, 4, 4, 0.812);\\n    padding: 10px 20px;\\n    border-radius: 10px;\\n    border: 1.5px solid rgb(255, 5, 5);\\n}\\n\\nmain {\\n    width: 80%;\\n    height: 100vh;\\n    margin: auto;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nmain .desc {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin-bottom: 50px;\\n}\\n\\nmain .desc h1 {\\n    margin-bottom: 10px;\\n}\\n\\nmain .desc p {\\n    font-weight: 300;\\n}\\n\\nmain .lampu {\\n    position: relative;\\n}\\n\\nmain img {\\n    margin-bottom: 140px;\\n}\\n\\nmain .buttons {\\n    width: fit-content;\\n    /* border: 1px solid red; */\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n}\\n\\nmain .buttons button {\\n    cursor: pointer;\\n    margin: 0 20px;\\n    border-radius: 20px;\\n}\\n\\nmain .buttons .red {\\n    padding: 10px 20px;\\n    border: none;\\n    color: white;\\n    background-color: red;\\n}\\n\\nmain .buttons .yellow {\\n    padding: 10px 20px;\\n    border: none;\\n    color: black;\\n    background-color: yellow;\\n}\\n\\nmain .buttons .green {\\n    padding: 10px 20px;\\n    border: none;\\n    color: black;\\n    background-color: rgb(19, 255, 35);\\n}\\n\\n.buttons .auto {\\n    margin-top: 20px;\\n    padding: 10px 20px;\\n    box-sizing: border-box;\\n    color: white;\\n    background-color: rgb(20, 20, 20);\\n    border: 1px solid rgb(40, 40, 40);\\n    transition: .2s all;\\n}\\n\\n.buttons .auto:hover {\\n    background-color: rgb(40, 40, 40);\\n}\\n\\nmain .lampu .red-light {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n    background-color: red;\\n    position: absolute;\\n    top: 44px;\\n    left: 37%;\\n\\n    box-shadow: 0px -1px 108px 10px rgba(255,0,0,0.75);\\n}\\n\\nmain .lampu .yellow-light {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n    background-color: yellow;\\n    position: absolute;\\n    top: 150px;\\n    left: 37%;\\n\\n    box-shadow: 0px -1px 108px 10px rgba(255,255,0,0.75);\\n}\\n\\nmain .lampu .green-light {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n    background-color: rgb(19, 255, 35);\\n    position: absolute;\\n    top: 255px;\\n    left: 37%;\\n\\n    box-shadow: 0px -1px 108px 10px rgba(19, 255, 35,0.75);\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\nmain .buttons .active {\\n    background-color: rgb(40, 40, 40);\\n}\\n\\n.hidup {\\n    opacity: 1;\\n}\\n\\n.redup {\\n    opacity: .3;\\n    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);\\n}\\n\\n@media (min-width: 320px) and (max-width: 500px) {\\n  \\n    main .desc p {\\n        font-size: .8em;\\n    }\\n\\n    .red-light {\\n        top: 210px;\\n    }\\n\\n    .yellow-light {\\n        top: 315px;\\n    }\\n\\n    .green-light {\\n        top: 420px;\\n    }\\n\\n    main .buttons {\\n        /* flex-direction: column; */\\n        width: 100%;\\n        margin-bottom: 30px;\\n    }\\n\\n    main .buttons button {\\n        width: 100%;\\n        margin: 10px 10px;\\n        border-radius: 7px;\\n    }\\n\\n    main .desc h1 {\\n        margin-top: 50px;\\n    }\\n    \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lampu-merah/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://lampu-merah/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/fonts.css":
/*!***********************!*\
  !*** ./src/fonts.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://lampu-merah/./src/fonts.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://lampu-merah/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lampu-merah/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/AutoOn.js":
/*!***********************!*\
  !*** ./src/AutoOn.js ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Deleting local variable in strict mode (8:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     var index = 0;\\n|     if(status === \\\"off\\\"){\\n>         delete(index);\\n|     }\\n| \");\n\n//# sourceURL=webpack://lampu-merah/./src/AutoOn.js?");

/***/ }),

/***/ "./src/Execute.js":
/*!************************!*\
  !*** ./src/Execute.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AutoOn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoOn */ \"./src/AutoOn.js\");\n/* harmony import */ var _AutoOn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AutoOn__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Lights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lights */ \"./src/Lights.js\");\n\n\n\n// Buttons Selection\nconst buttons = document.querySelectorAll('button');\n\n// Alert Selection\nconst autoAlertOn = document.querySelector('.auto-alert-on');\nconst autoAlertOff = document.querySelector('.auto-alert-off');\n\n// Array contains Node\nlet hidup = [];\n\nfunction Execute(){\n    // Looping the Buttons\n    buttons.forEach(button =>  {\n        // Event Listener\n        button.addEventListener('click', (e) => {\n\n            let raw = e.target; // contains raw target element\n            let value = e.target.textContent; // contains textContent of the clicked element\n\n            // if users click contains \"Red\"\n            if(value === \"Red\"){\n                _Lights__WEBPACK_IMPORTED_MODULE_1__.redLight.classList.remove('redup'); // nyalakan lampu merah\n\n                if(hidup.length === 0){\n                    _Lights__WEBPACK_IMPORTED_MODULE_1__.redLight.classList.add('hidup');\n                    hidup.push(_Lights__WEBPACK_IMPORTED_MODULE_1__.redLight);\n\n                } else if(hidup.length > 0){\n                    hidup[0].classList.remove('hidup');\n                    hidup[0].classList.add('redup');\n                    hidup.length = 0;\n\n                    if(hidup.length === 0){\n                        _Lights__WEBPACK_IMPORTED_MODULE_1__.redLight.classList.add('hidup');\n                        let lifeLight = _Lights__WEBPACK_IMPORTED_MODULE_1__.redLight;\n                        hidup.push(lifeLight);\n                    }\n                }\n\n            // If users click contains \"Yellow\"\n            } else if(value == \"Yellow\"){\n                _Lights__WEBPACK_IMPORTED_MODULE_1__.yellowLight.classList.remove('redup'); // nyalakan lampu kuning\n\n                if(hidup.length === 0){\n                    _Lights__WEBPACK_IMPORTED_MODULE_1__.yellowLight.classList.add('hidup');\n                    hidup.push(_Lights__WEBPACK_IMPORTED_MODULE_1__.yellowLight);\n\n                } else if(hidup.length > 0){\n                    hidup[0].classList.remove('hidup');\n                    hidup[0].classList.add('redup');\n                    hidup.length = 0;\n\n                    if(hidup.length === 0){\n                        _Lights__WEBPACK_IMPORTED_MODULE_1__.yellowLight.classList.add('hidup');\n                        let lifeLight = _Lights__WEBPACK_IMPORTED_MODULE_1__.yellowLight;\n                        hidup.push(lifeLight);\n                    }\n                }\n\n            // If users click contains \"Green\"\n            } else if(value == \"Green\"){\n                _Lights__WEBPACK_IMPORTED_MODULE_1__.greenLight.classList.remove('redup'); // nyalakan lampu hijau\n                \n                if(hidup.length === 0){\n                    _Lights__WEBPACK_IMPORTED_MODULE_1__.greenLight.classList.add('hidup');\n                    hidup.push(_Lights__WEBPACK_IMPORTED_MODULE_1__.greenLight);\n\n                } else if(hidup.length > 0){\n                    hidup[0].classList.remove('hidup');\n                    hidup[0].classList.add('redup');\n                    hidup.length = 0;\n\n                    if(hidup.length === 0){\n                        _Lights__WEBPACK_IMPORTED_MODULE_1__.greenLight.classList.add('hidup');\n                        let lifeLight = _Lights__WEBPACK_IMPORTED_MODULE_1__.greenLight;\n                        hidup.push(lifeLight);\n                    }\n                }\n\n            // If users click contains \"Auto\"\n            } else if(raw.classList.contains('auto')){\n\n\n                if(value === \"Auto On\"){\n                    console.warn('Auto: On');\n\n                    raw.innerHTML = \"Auto Off\";\n                    raw.classList.toggle('active');\n\n                    autoAlertOn.classList.remove('hidden');\n                    autoAlertOn.classList.remove('fade-up');\n                    autoAlertOn.classList.add('fade-down');\n                    \n                    setTimeout(() => {\n                        autoAlertOn.classList.remove('fade-down');\n                        autoAlertOn.classList.add('fade-up');\n                    }, 1500);\n                    \n                    if(hidup.length > 0){\n                        hidup[0].classList.remove('hidup');\n                        hidup[0].classList.add('redup');\n                        hidup.length = 0;\n                    }\n\n                    _AutoOn__WEBPACK_IMPORTED_MODULE_0___default()(2000, \"on\");\n\n                } else if(value === \"Auto Off\"){\n                    _AutoOn__WEBPACK_IMPORTED_MODULE_0___default()(2000, \"off\");\n\n                    console.warn('Auto: Off');\n\n                    raw.innerHTML = \"Auto On\";\n                    raw.classList.toggle('active');\n\n                    autoAlertOff.classList.remove('hidden');\n                    autoAlertOff.classList.remove('fade-up');\n                    autoAlertOff.classList.add('fade-down');\n                    \n                    setTimeout(() => {\n                        autoAlertOff.classList.remove('fade-down');\n                        autoAlertOff.classList.add('fade-up');\n                    }, 1500);\n                    \n                    if(hidup.length > 0){\n                        hidup[0].classList.add('redup');\n                        hidup[0].classList.remove('hidup');\n                        hidup.length = 0;\n                    }\n\n                }\n            }\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Execute);\n\n//# sourceURL=webpack://lampu-merah/./src/Execute.js?");

/***/ }),

/***/ "./src/Lights.js":
/*!***********************!*\
  !*** ./src/Lights.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"redLight\": () => (/* binding */ redLight),\n/* harmony export */   \"yellowLight\": () => (/* binding */ yellowLight),\n/* harmony export */   \"greenLight\": () => (/* binding */ greenLight)\n/* harmony export */ });\nconst redLight = document.querySelector('.red-light');\nconst yellowLight = document.querySelector('.yellow-light');\nconst greenLight = document.querySelector('.green-light');\n\n\n\n//# sourceURL=webpack://lampu-merah/./src/Lights.js?");

/***/ }),

/***/ "./src/assets/img/TrafficLight.png":
/*!*****************************************!*\
  !*** ./src/assets/img/TrafficLight.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0e15238dee8ae289df82.png\";\n\n//# sourceURL=webpack://lampu-merah/./src/assets/img/TrafficLight.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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