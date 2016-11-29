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

	'use strict';
	
	var _Greeter = __webpack_require__(1);
	
	var _Greeter2 = _interopRequireDefault(_Greeter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// var greeter = require('./Greeter.js');
	document.getElementById('root').appendChild((0, _Greeter2.default)());
	
	var arr = [1, 2, 3];
	
	// arr.forEach(function(value,index){
	// 	console.log(value);
	// });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var config = __webpack_require__(2);
	
	module.exports = function () {
	  var greet = document.createElement('div');
	  greet.textContent = config.greetText;
	  return greet;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"greetText": "Hi there and greetings from JSON!"
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmEyN2I1YjUxM2NjMzNhYThhNTMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dyZWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpZy5qc29uIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImFyciIsImNvbmZpZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JlZXQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJncmVldFRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUNDO0FBQ0RBLFVBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFdBQWhDLENBQTRDLHdCQUE1Qzs7QUFFQSxLQUFJQyxNQUFNLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQVY7O0FBR0E7QUFDQTtBQUNBLE87Ozs7Ozs7O0FDVEEsS0FBSUMsU0FBUyxtQkFBQUMsQ0FBUSxDQUFSLENBQWI7O0FBRUFDLFFBQU9DLE9BQVAsR0FBaUIsWUFBVztBQUMxQixPQUFJQyxRQUFRUixTQUFTUyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsU0FBTUUsV0FBTixHQUFvQk4sT0FBT08sU0FBM0I7QUFDQSxVQUFPSCxLQUFQO0FBQ0QsRUFKRCxDOzs7Ozs7QUNGQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJidW5kbGViYTI3YjViNTEzY2MzM2FhOGE1My5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJhMjdiNWI1MTNjYzMzYWE4YTUzIiwiaW1wb3J0IGdyZWV0ZXIgZnJvbSAnLi9HcmVldGVyJztcclxuIC8vIHZhciBncmVldGVyID0gcmVxdWlyZSgnLi9HcmVldGVyLmpzJyk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykuYXBwZW5kQ2hpbGQoZ3JlZXRlcigpKTtcclxuXHJcbnZhciBhcnIgPSBbMSwyLDNdO1xyXG5cclxuXHJcbi8vIGFyci5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLGluZGV4KXtcclxuLy8gXHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbi8vIH0pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiLCJ2YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanNvbicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgZ3JlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBncmVldC50ZXh0Q29udGVudCA9IGNvbmZpZy5ncmVldFRleHQ7XHJcbiAgcmV0dXJuIGdyZWV0O1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9HcmVldGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ3JlZXRUZXh0XCI6IFwiSGkgdGhlcmUgYW5kIGdyZWV0aW5ncyBmcm9tIEpTT04hXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29uZmlnLmpzb25cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==