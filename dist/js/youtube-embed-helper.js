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

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n    root.PubSub = PubSub;\n\n    var define = root.define;\n\n    factory(PubSub);\n\n    // AMD support\n    if (typeof define === 'function' && define.amd){\n        define(function() { return PubSub; });\n\n        // CommonJS and Node.js module support\n    } else if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1;\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( obj.hasOwnProperty(key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !messages.hasOwnProperty( matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( subscribers.hasOwnProperty(s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n        };\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !messages.hasOwnProperty( message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n        \n        // return token for unsubscribing\n        return token;\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /** \n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        var count = 0;\n        for (m in messages){\n            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){\n                count++;\n            }\n        }\n        return count;\n    };\n\n    \n    /** \n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( messages.hasOwnProperty( m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (message.hasOwnProperty(t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addVideo; });\nfunction addVideo(el, videoId, onReady, onStateChange) {\n  let player = new YT.Player(el, {\n    videoId: videoId,\n    host: 'https://www.youtube.com',\n    playerVars: {autoplay: 1, modestbranding: 1, rel: 0, showinfo: 0, controls: 1},\n    events: {\n      'onReady': onPlayerReady,\n      'onStateChange': onPlayerStateChange\n    }\n  });\n\n  // 4. The API will call this function when the video player is ready.\n  function onPlayerReady(event) {\n    event.target.playVideo();\n    onReady && onReady(event, player);\n  }\n\n  function onPlayerStateChange(event) {\n    onStateChange && onStateChange(event, player);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/addVideo.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadAPI; });\nfunction loadAPI(cb) {\n  if (!document.querySelector('script[id=youtube-api]')) {\n\n    // Listen ready\n    window.onYouTubeIframeAPIReady = function () {\n      cb && cb();\n    };\n\n    // Call the youtube api\n    let tag = document.createElement('script');\n    tag.id = 'youtube-api';\n    tag.src = 'https://www.youtube.com/iframe_api';\n    let firstScriptTag = document.getElementsByTagName('script')[0];\n    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n  } else {\n    cb && cb();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/loadAPI.js?");

/***/ }),

/***/ "./src/js/utils/process.js":
/*!*********************************!*\
  !*** ./src/js/utils/process.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return process; });\n/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each */ \"./src/js/utils/each.js\");\n/* harmony import */ var _loadAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadAPI */ \"./src/js/utils/loadAPI.js\");\n/* harmony import */ var _addVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addVideo */ \"./src/js/utils/addVideo.js\");\n/* harmony import */ var _getYoutubeId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getYoutubeId */ \"./src/js/utils/getYoutubeId.js\");\n/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addClass */ \"./src/js/utils/addClass.js\");\n/* harmony import */ var _removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeClass */ \"./src/js/utils/removeClass.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconst selector = '.o-youtube-embed';\nconst classes = {\n  l: 'is-loading',\n  p: 'is-playing'\n};\n\nconst pubSubEventName = 'youtube-embed-played';\n\nfunction process() {\n  Object(_each__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector, function (el) {\n    if (!el.isYouTubeEmbedHelperProcessed) {\n\n      el.isYouTubeEmbedHelperProcessed = true;\n\n      let youtubeId = Object(_getYoutubeId__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el.getAttribute('data-url'));\n\n      if (youtubeId) {\n\n        let video = el.querySelector(selector + '__video');\n        let play = el.querySelector(selector + '__play');\n        let iframe = el.querySelector(selector + '__iframe');\n\n        if (window.getComputedStyle(video, null).getPropertyValue('background-image') === 'none') {\n          video.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + youtubeId + '/' + (el.getAttribute('data-thumbnail') || 'hqdefault') + '.jpg)';\n        }\n\n        let onPaused = function (pause, goToStart) {\n          if (pause && el.player) {\n            el.player.pauseVideo();\n          }\n\n          Object(_removeClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(el, classes.p);\n\n          if (goToStart && el.player) {\n            el.player.seekTo(0);\n          }\n        };\n\n        let onPlayed = function () {\n          Object(_addClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(el, classes.p);\n          pubsub_js__WEBPACK_IMPORTED_MODULE_6___default.a.publish(pubSubEventName, {\n            el: el\n          });\n        };\n\n        let onOtherPlayerPlayed = function (message, data) {\n          if (data.el !== el) {\n            onPaused(true);\n          }\n        };\n\n        pubsub_js__WEBPACK_IMPORTED_MODULE_6___default.a.subscribe(pubSubEventName, onOtherPlayerPlayed);\n\n        let onReady = function (event, player) {\n          el.player = player;\n          onPlayed();\n        };\n\n        let onStateChange = function (response) {\n          // Check if paused\n          if (response.data === 2) {\n\n            // Wait few second and if still paused show custom play icon and caption\n            setTimeout(function () {\n              if (el.player.getPlayerState() === 2) {\n                onPaused();\n              }\n            }, 2000);\n          }\n\n          // Check if completed\n          if (response.data === 0) {\n            onPaused(true, true);\n            document.exitFullscreen && document.exitFullscreen();\n          }\n        };\n\n        play.addEventListener('click', function () {\n          if (el.player) {\n            el.player.playVideo();\n            onPlayed();\n          } else {\n            Object(_addClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(el, 'is-loading');\n            Object(_loadAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n              Object(_addVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n                iframe,\n                youtubeId,\n                onReady,\n                onStateChange\n              );\n              setTimeout(function () {\n                Object(_removeClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(el, classes.l);\n                Object(_addClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(el, classes.p);\n              }, 500);\n            });\n          }\n        });\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/process.js?");

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