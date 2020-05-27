/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ready */ \"./src/js/utils/ready.js\");\n/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/process */ \"./src/js/utils/process.js\");\n\n\n\nwindow.processYouTubeEmbedHelper = _utils_process__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nObject(_utils_ready__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  Object(_utils_process__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/addClass.js":
/*!**********************************!*\
  !*** ./src/js/utils/addClass.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addClass; });\n/**\n * Add Class\n *\n * @source http://youmightnotneedjquery.com/#add_class\n * @param el\n * @param className\n */\nfunction addClass(el, className) {\n  el.classList.add(className);\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/addClass.js?");

/***/ }),

/***/ "./src/js/utils/addVideo.js":
/*!**********************************!*\
  !*** ./src/js/utils/addVideo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addVideo; });\n/* harmony import */ var _getPlayerVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPlayerVars */ \"./src/js/utils/getPlayerVars.js\");\n\n\nfunction addVideo(el, videoId, playerVars, onReady, onStateChange) {\n  let player = new YT.Player(el, {\n    videoId: videoId,\n    host: 'https://www.youtube.com',\n    playerVars: playerVars || Object(_getPlayerVars__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el),\n    events: {\n      'onReady': onPlayerReady,\n      'onStateChange': onPlayerStateChange\n    }\n  });\n\n  // 4. The API will call this function when the video player is ready.\n  function onPlayerReady(event) {\n    onReady && onReady(event, player);\n  }\n\n  function onPlayerStateChange(event) {\n    onStateChange && onStateChange(event, player);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/addVideo.js?");

/***/ }),

/***/ "./src/js/utils/each.js":
/*!******************************!*\
  !*** ./src/js/utils/each.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return each; });\n/**\n * Each (IE9+)\n *\n * @source http://youmightnotneedjquery.com/#each\n * @param selector\n * @param callback\n */\nfunction each(selector, callback) {\n  Array.prototype.forEach.call(document.querySelectorAll(selector), callback);\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/each.js?");

/***/ }),

/***/ "./src/js/utils/getCustomEvent.js":
/*!****************************************!*\
  !*** ./src/js/utils/getCustomEvent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCustomEvent; });\n/**\n * Creates and return a custom event\n *\n * @source http://youmightnotneedjquery.com/#trigger_custom\n *\n * @param eventName\n * @param data\n * @returns {*}\n * @constructor\n */\nfunction getCustomEvent(eventName, data) {\n  let event;\n  if (window.CustomEvent && typeof window.CustomEvent === 'function') {\n    event = new CustomEvent(eventName, {detail: data});\n  } else {\n    event = document.createEvent('CustomEvent');\n    event.initCustomEvent(eventName, true, true, data);\n  }\n  return event;\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/getCustomEvent.js?");

/***/ }),

/***/ "./src/js/utils/getData.js":
/*!*********************************!*\
  !*** ./src/js/utils/getData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\nfunction getData(el, key, def) {\n  return el.hasAttribute('data-' + key) ? el.getAttribute('data-' + key) : def;\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/getData.js?");

/***/ }),

/***/ "./src/js/utils/getPlayerVars.js":
/*!***************************************!*\
  !*** ./src/js/utils/getPlayerVars.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPlayerVars; });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/js/utils/getData.js\");\n\n\nfunction getPlayerVars(el) {\n  return {\n    autoplay: Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'autoplay', 1),\n    modestbranding: Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'modestbranding', 1),\n    rel: Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'rel', 0),\n    showinfo: Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'showinfo', 0),\n    controls: Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'controls', 1),\n    mute: Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'mute', 0)\n  };\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/getPlayerVars.js?");

/***/ }),

/***/ "./src/js/utils/getYoutubeId.js":
/*!**************************************!*\
  !*** ./src/js/utils/getYoutubeId.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getYoutubeId; });\nfunction getYoutubeId(url) {\n  let match = url.match(/(?:https?:\\/{2})?(?:w{3}\\.)?youtu(?:be)?\\.(?:com|be)(?:\\/watch\\?v=|\\/)([^\\s&]+)/);\n\n  if (match && match[1]) {\n    return match[1];\n  }\n\n  return 0;\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/getYoutubeId.js?");

/***/ }),

/***/ "./src/js/utils/loadAPI.js":
/*!*********************************!*\
  !*** ./src/js/utils/loadAPI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadAPI; });\nlet keyCallbacks = 'YouTubeEmbedHelper_API_Callbacks';\nlet keyFetched = 'YouTubeEmbedHelper_API_Fetched';\nlet keyLoaded = 'YouTubeEmbedHelper_API_Loaded';\n\nwindow[keyCallbacks] = window[keyCallbacks] || [];\n\nconst addCallback = function(cb){\n  if(cb) {\n    window[keyCallbacks].push(cb);\n  }\n};\n\nconst runCallbacks = function(){\n  if(window[keyCallbacks].length > 0) {\n    window[keyCallbacks].forEach(function(cb){\n      cb();\n    });\n  }\n};\n\nfunction loadAPI(cb) {\n\n  if(window[keyLoaded]) {\n    cb && cb();\n  } else {\n    addCallback(cb);\n\n    if (!window[keyFetched]) {\n      window[keyFetched] = true;\n\n      // Listen ready\n      window.onYouTubeIframeAPIReady = function () {\n        window[keyLoaded] = true;\n        runCallbacks();\n      };\n\n      // Call the youtube api\n      let tag = document.createElement('script');\n      tag.id = 'youtube-api';\n      tag.src = 'https://www.youtube.com/iframe_api';\n      let firstScriptTag = document.getElementsByTagName('script')[0];\n      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n    }\n\n\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/loadAPI.js?");

/***/ }),

/***/ "./src/js/utils/process.js":
/*!*********************************!*\
  !*** ./src/js/utils/process.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return process; });\n/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each */ \"./src/js/utils/each.js\");\n/* harmony import */ var _loadAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadAPI */ \"./src/js/utils/loadAPI.js\");\n/* harmony import */ var _addVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addVideo */ \"./src/js/utils/addVideo.js\");\n/* harmony import */ var _getYoutubeId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getYoutubeId */ \"./src/js/utils/getYoutubeId.js\");\n/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addClass */ \"./src/js/utils/addClass.js\");\n/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeClass */ \"./src/js/utils/removeClass.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getData */ \"./src/js/utils/getData.js\");\n/* harmony import */ var _getPlayerVars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getPlayerVars */ \"./src/js/utils/getPlayerVars.js\");\n/* harmony import */ var _getCustomEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getCustomEvent */ \"./src/js/utils/getCustomEvent.js\");\n\n\n\n\n\n\n\n\n\n\nconst selector = '.o-youtube-embed';\nconst classes = {\n  l: 'is-loading',\n  p: 'is-playing'\n};\n\nconst eventPrefix = 'youtube-embed-';\n\nconst getEventName = function (key) {\n  return eventPrefix + key;\n};\n\nlet prefetchEventName = getEventName('prefetch');\nlet prefetchEvent = Object(_getCustomEvent__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(prefetchEventName);\n\nfunction process() {\n  Object(_each__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector, function (el) {\n    if (!el.isYouTubeEmbedHelperProcessed) {\n\n      el.isYouTubeEmbedHelperProcessed = true;\n\n      el.prefetchEvent = prefetchEvent;\n\n      let youtubeId = Object(_getYoutubeId__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_getData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(el, 'url'));\n\n      if (youtubeId) {\n\n        let video = el.querySelector(selector + '__video');\n        let play = el.querySelector(selector + '__play');\n        let iframe = el.querySelector(selector + '__iframe');\n\n        let playOnReady = true;\n\n        let showCoverOnPause = parseInt(Object(_getData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(el, 'show-cover-on-pause'));\n\n        if (window.getComputedStyle(video, null).getPropertyValue('background-image') === 'none') {\n          video.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + youtubeId + '/' + ( Object(_getData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(el, 'thumbnail', 'hqdefault')) + '.jpg)';\n        }\n\n        let onPaused = function (pause, goToStart, element) {\n          element = element || el;\n\n          if (pause && element.player) {\n            element.player.pauseVideo();\n          }\n\n          if(showCoverOnPause) {\n            Object(_removeClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(element, classes.p);\n          }\n\n          if (goToStart && element.player) {\n            element.player.seekTo(0);\n          }\n        };\n\n        let stopOtherPlayers = function () {\n          Object(_each__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector + '.is-playing', function (element) {\n            if (element !== el) {\n              onPaused(true, false, element);\n            }\n          });\n        };\n\n        let onPlayed = function () {\n          Object(_removeClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(el, classes.l);\n          Object(_addClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(el, classes.p);\n          stopOtherPlayers();\n        };\n\n        let onReady = function (event, player) {\n          el.player = player;\n\n          if (playOnReady) {\n            el.player.playVideo();\n            onPlayed();\n          }\n        };\n\n        let onStateChange = function (response) {\n\n          // Check if completed\n          if (response.data === 0) {\n            onPaused(true, true);\n            document.exitFullscreen && document.exitFullscreen();\n          }\n\n          // Check if paused\n          if (response.data === 2) {\n\n            // Wait few second and if still paused show custom play icon and caption\n            setTimeout(function () {\n              if (el.player.getPlayerState() === 2) {\n                onPaused();\n              }\n            }, 2000);\n          }\n\n          // Check if played\n          if (response.data === 1) {\n            onPlayed();\n          }\n        };\n\n        let load = function () {\n          Object(_loadAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n            Object(_addVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n              iframe,\n              youtubeId,\n              Object(_getPlayerVars__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(el),\n              onReady,\n              onStateChange\n            );\n          });\n        };\n\n        play.addEventListener('click', function () {\n          Object(_addClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(el, classes.l);\n          if (el.player) {\n            el.player.playVideo();\n          } else {\n            load();\n          }\n        });\n\n        el.addEventListener(prefetchEventName, function () {\n          if(!el.player) {\n            playOnReady = false;\n            el.setAttribute('data-autoplay', '0');\n            load();\n          }\n        });\n\n        // Do not wait click, add the iframe immediately\n        // It is not optimal but when you need to play at the first click on mobile, you could consider it\n        if (parseInt(Object(_getData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(el, 'prefetch'))) {\n          el.dispatchEvent(prefetchEvent);\n        }\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/process.js?");

/***/ }),

/***/ "./src/js/utils/ready.js":
/*!*******************************!*\
  !*** ./src/js/utils/ready.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ready; });\n/**\n * Ready (IE9+)\n *\n * @source http://youmightnotneedjquery.com/#ready\n * @param fn\n */\n\nfunction ready(fn) {\n  if (document.readyState != 'loading') {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/ready.js?");

/***/ }),

/***/ "./src/js/utils/removeClass.js":
/*!*************************************!*\
  !*** ./src/js/utils/removeClass.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return removeClass; });\n/**\n * Remove Class\n *\n * @source http://youmightnotneedjquery.com/#remove_class\n * @param el\n * @param className\n */\nfunction removeClass(el, className) {\n  el.classList.remove(className);\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/removeClass.js?");

/***/ }),

/***/ "./src/scss/demo.scss":
/*!****************************!*\
  !*** ./src/scss/demo.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/demo.css\");\n\n//# sourceURL=webpack:///./src/scss/demo.scss?");

/***/ }),

/***/ "./src/scss/youtube-embed-helper.scss":
/*!********************************************!*\
  !*** ./src/scss/youtube-embed-helper.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/youtube-embed-helper.css\");\n\n//# sourceURL=webpack:///./src/scss/youtube-embed-helper.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/youtube-embed-helper.scss ./src/scss/demo.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n__webpack_require__(/*! ./src/scss/youtube-embed-helper.scss */\"./src/scss/youtube-embed-helper.scss\");\nmodule.exports = __webpack_require__(/*! ./src/scss/demo.scss */\"./src/scss/demo.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/youtube-embed-helper.scss_./src/scss/demo.scss?");

/***/ })

/******/ });