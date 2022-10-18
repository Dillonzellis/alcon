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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/nav */ \"./src/js/nav.js\");\n/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_mobile_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mobile-nav */ \"./src/js/mobile-nav.js\");\n/* harmony import */ var _js_mobile_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_currentYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/currentYear */ \"./src/js/currentYear.js\");\n/* harmony import */ var _js_currentYear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_currentYear__WEBPACK_IMPORTED_MODULE_3__);\n// styles\r\n\r\n\r\n// js\r\n\r\n\r\n// import './js/dialog';\r\n\r\n\n\n//# sourceURL=webpack://Alcon/./src/index.js?");

/***/ }),

/***/ "./src/js/currentYear.js":
/*!*******************************!*\
  !*** ./src/js/currentYear.js ***!
  \*******************************/
/***/ (() => {

eval("const years = document.querySelectorAll('.year');\r\n\r\nconst yearsArr = [...years];\r\n\r\nyearsArr.map((year) =>{\r\n    // innerHTML = new Date().getFullYear();\r\n    document.write(new Date().getFullYear());\r\n})\n\n//# sourceURL=webpack://Alcon/./src/js/currentYear.js?");

/***/ }),

/***/ "./src/js/mobile-nav.js":
/*!******************************!*\
  !*** ./src/js/mobile-nav.js ***!
  \******************************/
/***/ (() => {

eval("const bank = document.querySelector('#bank');\r\nconst borrow = document.querySelector('#borrow');\r\nconst solutions = document.querySelector('#solutions');\r\nconst rates = document.querySelector('#rates');\r\nconst about = document.querySelector('#about');\r\nconst apply = document.querySelector('#apply');\r\nconst login = document.querySelector('#login');\r\n\r\nconst menuItemsArr = document.querySelectorAll('.menu-item')\r\n\r\n\r\nconst arr = [...menuItemsArr]\r\nconsole.log(arr);\r\n\r\nbank.addEventListener('click', () => {\r\n    bank.classList.toggle('active')\r\n\r\n    arr.forEach((item) => {\r\n        if (item.classList.contains('bank')) {\r\n            console.log('bank class');\r\n        } else {\r\n            item.classList.remove('active')\r\n        }\r\n    })\r\n})\r\n\r\nborrow.addEventListener('click', () => {\r\n    borrow.classList.toggle('active')\r\n\r\n    arr.forEach((item) => {\r\n        if (item.classList.contains('borrow')) {\r\n            console.log('borrow class');\r\n        } else {\r\n            item.classList.remove('active')\r\n        }\r\n    })\r\n})\r\n\r\nsolutions.addEventListener('click', () => {\r\n    solutions.classList.toggle('active')\r\n\r\n    arr.forEach((item) => {\r\n        if (item.classList.contains('solutions')) {\r\n            console.log('solutions class');\r\n        } else {\r\n            item.classList.remove('active')\r\n        }\r\n    })\r\n})\r\n\r\nrates.addEventListener('click', () => {\r\n    rates.classList.toggle('active')\r\n\r\n    arr.forEach((item) => {\r\n        if (item.classList.contains('rates')) {\r\n            console.log('rates class');\r\n        } else {\r\n            item.classList.remove('active')\r\n        }\r\n    })\r\n})\r\n\r\nabout.addEventListener('click', () => {\r\n    about.classList.toggle('active')\r\n\r\n    arr.forEach((item) => {\r\n        if (item.classList.contains('about')) {\r\n            console.log('about class');\r\n        } else {\r\n            item.classList.remove('active')\r\n        }\r\n    })\r\n})\r\n\r\napply.addEventListener('click', () => {\r\n    apply.classList.toggle('active')\r\n\r\n    arr.forEach((item) => {\r\n        if (item.classList.contains('apply')) {\r\n            console.log('apply class');\r\n        } else {\r\n            item.classList.remove('active')\r\n        }\r\n    })\r\n})\r\n\r\nlogin.addEventListener('click', () => {\r\n    login.classList.toggle('active')\r\n\r\n    arr.forEach((item) => {\r\n        if (item.classList.contains('login')) {\r\n            console.log('login class');\r\n        } else {\r\n            item.classList.remove('active')\r\n        }\r\n    })\r\n})\r\n\r\n\r\n\r\n\r\n// const allDropdowns = document.querySelectorAll('.sub-menu-1')\r\n// const DROP_CLASS = 'drop';\r\n// const navbar = document.querySelector('.navbar');\r\n\r\n\r\n// navbar.addEventListener('click', ({\r\n//     target\r\n// }) => {\r\n//     if (!target.classList.contains('menu-item')) return;\r\n\r\n//     const parent = target.parentNode;\r\n//     const navItems = parent\r\n//         .querySelector('.sub-menu-1');\r\n\r\n//     allDropdowns.forEach(el => el !== navItems && el.classList.remove(DROP_CLASS));\r\n\r\n//     if (navItems) {\r\n//         navItems.classList.toggle(DROP_CLASS);\r\n//     }\r\n// });\n\n//# sourceURL=webpack://Alcon/./src/js/mobile-nav.js?");

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