/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(1);
	console.log('Wassap');
	console.log(actions.views.home());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var views_ts_1 = __webpack_require__(2);
	exports.views = views_ts_1.views;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var views;
	(function (views) {
	    var HOME = 'HOME';
	    var BOOK = 'BOOK';
	    function home() {
	        return { type: HOME };
	    }
	    views.home = home;
	    function book() {
	        return { type: BOOK };
	    }
	    views.book = book;
	})(views = exports.views || (exports.views = {}));


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map