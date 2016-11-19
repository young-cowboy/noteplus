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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _vue = __webpack_require__(/*! vue */ 2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _app = __webpack_require__(/*! ./mods/app.vue */ 3);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	addEventListener('DOMContentLoaded', function () {
	    new _vue2.default(_app2.default).$mount("app");
	});

/***/ },
/* 1 */
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

/***/ },
/* 2 */
/*!*****************************!*\
  !*** external "window.Vue" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = window.Vue;

/***/ },
/* 3 */
/*!**************************!*\
  !*** ./src/mods/app.vue ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(/*! !./../../~/extract-text-webpack-plugin/loader.js?{"remove":true}!css!./../../~/vue-loader/lib/style-rewriter.js!less!./../../~/vue-loader/lib/selector.js?type=style&index=0!./app.vue */ 4)
	__vue_script__ = __webpack_require__(/*! !babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./../../~/vue-loader/lib/selector.js?type=script&index=0!./app.vue */ 6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/mods/app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(/*! !vue-html-loader!./../../~/vue-loader/lib/selector.js?type=template&index=0!./app.vue */ 8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-472246d7/app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./~/extract-text-webpack-plugin/loader.js?{"remove":true}!./~/css-loader!./~/vue-loader/lib/style-rewriter.js!./~/less-loader!./~/vue-loader/lib/selector.js?type=style&index=0!./src/mods/app.vue ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */
/*!**********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./src/mods/app.vue ***!
  \**********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _db = __webpack_require__(/*! ../common/db */ 1);
	
	var _db2 = _interopRequireDefault(_db);
	
	var _utils = __webpack_require__(/*! ../common/utils */ 7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: {},
	    data: function data() {
	        return {
	            list: [],
	            selected: {},
	            showDetail: false
	        };
	    },
	    created: function created() {},
	    ready: function ready() {
	        var list = _db2.default.getList();
	
	        this.list = list;
	    },
	
	    methods: {
	        del: function del(index) {
	            var item = this.list[index];
	            var id = item.id;
	
	            _db2.default.removeItemById(id);
	            this.list.splice(index, 1);
	        },
	        view: function view(index) {
	            var item = this.list[index];
	
	            this.selected = item;
	            this.showDetail = true;
	        },
	        close: function close() {
	            this.showDetail = false;
	        }
	    },
	    watch: {},
	    filters: {
	        filterTime: function filterTime(time) {
	            return _utils2.default.formatTime(time);
	        },
	        filterDate: function filterDate(time) {
	            return _utils2.default.formatDate(time);
	        }
	    }
	};

/***/ },
/* 7 */
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function padLeft(val) {
	    if (val >= 10) {
	        return val.toString();
	    }
	
	    return "0" + val;
	}
	
	function formatDate(time) {
	    var date = new Date(time);
	    var year = date.getFullYear();
	    var month = padLeft(date.getMonth() + 1);
	    var day = padLeft(date.getDate());
	    var hour = padLeft(date.getHours());
	    var min = padLeft(date.getMinutes());
	    var sec = padLeft(date.getSeconds());
	
	    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
	}
	
	function _formatDate(time) {
	    var date = new Date(parseInt(time));
	    var month = padLeft(date.getMonth() + 1);
	    var day = padLeft(date.getDate());
	
	    return "{month}-{day}".replace("{month}", month).replace("{day}", day);
	}
	
	function formatTime(createTime) {
	    if (!createTime) {
	        return "";
	    }
	
	    var division = new Date().getTime() - createTime;
	    var MINUTE = 60 * 1000;
	    var HOUR = MINUTE * 60;
	    var DAY = HOUR * 24;
	
	    if (division < MINUTE) {
	        return Math.ceil(division / 1000) + " sec";
	    }
	
	    if (division < HOUR) {
	        return Math.floor(division / MINUTE) + " min";
	    }
	
	    if (division < DAY) {
	        return Math.floor(division / HOUR) + " hour";
	    }
	
	    return _formatDate(createTime);
	}
	
	exports.default = { formatTime: formatTime, formatDate: formatDate };

/***/ },
/* 8 */
/*!***************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./src/mods/app.vue ***!
  \***************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"wrap\">\n    <ul v-if=\"list.length > 0\">\n        <li v-for=\"(index, item) in list\" class=\"list-item\">\n            <div class=\"info\">\n                <span class=\"date\" v-if=\"item.createTime\">{{item.createTime | filterTime}}</span>\n                <span class=\"text\">{{item.text}}</span>\n            </div>\n            <div class=\"handler\">\n                <span class=\"btn\" @click=\"view(index)\">&#xe63e;</span>\n                <span class=\"btn\" @click=\"del(index)\">&#xe61e;</span>\n            </div>\n        </li>\n    </ul>\n    <div v-if=\"list.length == 0\">\n        <ul class=\"note-list\">\n            <li>1. Select a text on the web page.</li>\n            <li>2. Click right mouse button and click \"Save into Noteplus\" option on the right click menu.</li>\n            <li><img src=\"/assets/image/intro_1.png\"></li>\n            <li>3. You can see the text that you just \"Save into Noteplus\" in the Chrome Extension popup page. </li>\n            <li><img src=\"/assets/image/intro_2.png\"></li>\n            <li>4. Just have fun and manager your note.</li>\n            <li><img src=\"/assets/image/intro_3.png\"></li>\n        </ul>\n    </div>\n    <div class=\"detail-wrap\" v-if=\"showDetail\">\n        <div class=\"detail\">\n            <span class=\"close-btn\" @click=\"close\">&#xe61e;</span>\n            <h2>Create Time : {{selected.createTime | filterDate}}</h2>\n            <input class=\"controls\" value=\"{{selected.url}}\">\n            <textarea class=\"controls textarea\">{{selected.text}}</textarea>\n        </div>\n    </div>\n</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map