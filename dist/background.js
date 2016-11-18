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
/******/ ({

/***/ 0:
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _db = __webpack_require__(/*! ./common/db */ 10);
	
	var _db2 = _interopRequireDefault(_db);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	chrome.contextMenus.create({
	    "title": "Save into Noteplus",
	    contexts: ["frame", "selection", "link", "editable"],
	    onclick: function onclick(e) {
	        var text = e.selectionText;
	        var url = e.pageUrl;
	
	        // chrome.runtime.sendMessage({selectionText, pageUrl},function(response){});
	
	        _db2.default.insert({
	            text: text,
	            url: url,
	            id: new Date().getTime() + parseInt(Math.random() * 10000),
	            createTime: new Date().getTime()
	        });
	    }
	});

/***/ },

/***/ 10:
/*!**************************!*\
  !*** ./src/common/db.js ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var DB_NAME = "NOTEPLUS";
	
	function getItem() {
	    var str = localStorage.getItem(DB_NAME);
	
	    try {
	        return JSON.parse(str);
	    } catch (e) {
	        return {};
	    }
	}
	
	function setItem(obj) {
	    var str = "";
	
	    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object") {
	        str = JSON.stringify(obj);
	    } else {
	        str = obj;
	    }
	
	    localStorage.setItem(DB_NAME, str);
	}
	
	function getList() {
	    var db = getItem() || {};
	    var list = db.list || [];
	
	    return list;
	}
	
	function insert(obj) {
	    var db = getItem() || {};
	    var list = db.list || [];
	
	    list.unshift(obj);
	    db.list = list;
	    setItem(db);
	}
	
	function removeItemById(id) {
	    var db = getItem() || {};
	    var list = db.list || [];
	    var newList = [];
	
	    list.forEach(function (item, index) {
	        if (item.id != id) {
	            newList.push(item);
	        }
	    });
	
	    db.list = newList;
	    setItem(db);
	}
	
	exports.default = { insert: insert, removeItemById: removeItemById, getList: getList };

/***/ }

/******/ });
//# sourceMappingURL=background.js.map