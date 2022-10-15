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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Alcon/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/nav */ \"./src/js/nav.js\");\n/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_mobile_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mobile-nav */ \"./src/js/mobile-nav.js\");\n/* harmony import */ var _js_mobile_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/dialog */ \"./src/js/dialog.js\");\n/* harmony import */ var _js_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_dialog__WEBPACK_IMPORTED_MODULE_3__);\n// styles\r\n\r\n\r\n// js\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Alcon/./src/index.js?");

/***/ }),

/***/ "./src/js/dialog.js":
/*!**************************!*\
  !*** ./src/js/dialog.js ***!
  \**************************/
/***/ (() => {

eval("\r\n// const fbModal = document.querySelector('#fb-modal')\r\n// const openModal = document.querySelector('#open-modal')\r\n// const closeModal = document.querySelector('#fb-close')\r\n\r\n// openModal.addEventListener('click', ()=>{\r\n//     fbModal.showModal();\r\n// })\r\n\r\n// closeModal.addEventListener('click', ()=>{\r\n//     fbModal.close();\r\n// })\r\n\r\n\r\n// const newModal = document.querySelector('#new-modal')\r\n// const openModalNew = document.querySelector('#open-modal-new')\r\n// const closeModalNew = document.querySelector('#new-close')\r\n\r\n// openModalNew.addEventListener('click', ()=>{\r\n//     newModal.showModal();\r\n// })\r\n\r\n// closeModalNew.addEventListener('click', ()=>{\r\n//     newModal.close();\r\n// })\r\n\r\n// function visitPage(){\r\n//     window.location=\"https://a11y-dialog.netlify.app/installation\"\r\n// }\r\n\r\n\n\n//# sourceURL=webpack://Alcon/./src/js/dialog.js?");

/***/ }),

/***/ "./src/js/mobile-nav.js":
/*!******************************!*\
  !*** ./src/js/mobile-nav.js ***!
  \******************************/
/***/ (() => {

eval("const bank = document.querySelector('#bank');\r\n\r\nbank.addEventListener('click', ()=>{\r\n    bank.classList.toggle('active')\r\n})\n\n//# sourceURL=webpack://Alcon/./src/js/mobile-nav.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ (() => {

eval("const hamburger = document.querySelector('.hamburger')\r\nconst navBar = document.querySelector('.navbar')\r\n\r\nconst header = document.querySelector('.header')\r\n\r\n//PX offset when the navbar activates\r\nconst offset = 50;\r\n\r\nhamburger.addEventListener('click', ()=>{\r\n    hamburger.classList.toggle('active')\r\n\r\n    navBar.classList.toggle('active')\r\n})\r\n\r\n\r\n//Add scroll event listener to the page\r\nwindow.addEventListener(\"scroll\", () => {\r\n    //If the page is scrolled by 50px or more\r\n    if (pageYOffset > offset) {\r\n      //Activate navbar\r\n      header.classList.add('header-active');  \r\n    } else {\r\n      //Deactivate navbar\r\n      header.classList.remove('header-active');\r\n    }\r\n  });\n\n//# sourceURL=webpack://Alcon/./src/js/nav.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;