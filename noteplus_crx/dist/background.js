!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(/*! ./common/db */1),i=o(r);chrome.contextMenus.create({title:"Save into Noteplus",contexts:["frame","selection","link","editable"],onclick:function(t){var e=t.selectionText,n=t.pageUrl;i.default.insert({text:e,url:n,id:(new Date).getTime()+parseInt(1e4*Math.random()),createTime:(new Date).getTime()})}})},/*!**************************!*\
  !*** ./src/common/db.js ***!
  \**************************/
function(t,e){"use strict";function n(){var t=localStorage.getItem(a);try{return JSON.parse(t)}catch(t){return{}}}function o(t){var e="";e="object"==("undefined"==typeof t?"undefined":c(t))?JSON.stringify(t):t,localStorage.setItem(a,e)}function r(){var t=n()||{},e=t.list||[];return e}function i(t){var e=n()||{},r=e.list||[];r.unshift(t),e.list=r,o(e)}function u(t){var e=n()||{},r=e.list||[],i=[];r.forEach(function(e,n){e.id!=t&&i.push(e)}),e.list=i,o(e)}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a="NOTEPLUS";e.default={insert:i,removeItemById:u,getList:r}}]);
//# sourceMappingURL=background.js.map