!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(3),n(1),e.exports=n(2)},function(e,t,n){"use strict";n.r(t),t.default=n.p+"css/youtube-embed-helper.css"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"css/demo.css"},function(e,t,n){"use strict";function o(e,t){Array.prototype.forEach.call(document.querySelectorAll(e),t)}function r(e,t,n){return e.hasAttribute("data-"+t)?e.getAttribute("data-"+t):n}function u(e){return{autoplay:r(e,"autoplay",1),modestbranding:r(e,"modestbranding",1),rel:r(e,"rel",0),showinfo:r(e,"showinfo",0),controls:r(e,"controls",1),mute:r(e,"mute",0)}}function i(e,t){e.classList.add(t)}function c(e,t){e.classList.remove(t)}n.r(t);const a=".o-youtube-embed",l="is-loading",s="is-playing";let d="youtube-embed-"+"prefetch";let f=function(e,t){let n;return window.CustomEvent&&"function"==typeof window.CustomEvent?n=new CustomEvent(e,{detail:t}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(e,!0,!0,t)),n}(d);function p(){o(a,(function(e){if(!e.isYouTubeEmbedHelperProcessed){e.isYouTubeEmbedHelperProcessed=!0,e.prefetchEvent=f;let t=function(e){let t=e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return t&&t[1]?t[1]:0}(r(e,"url"));if(t){let n=e.querySelector(a+"__video"),p=e.querySelector(a+"__play"),y=e.querySelector(a+"__iframe"),m=!0;"none"===window.getComputedStyle(n,null).getPropertyValue("background-image")&&(n.style.backgroundImage="url(https://i.ytimg.com/vi/"+t+"/"+r(e,"thumbnail","hqdefault")+".jpg)");let b=function(t,n,o){o=o||e,t&&o.player&&o.player.pauseVideo(),c(o,s),n&&o.player&&o.player.seekTo(0)},g=function(){o(a+".is-playing",(function(t){t!==e&&b(!0,!1,t)}))},v=function(){c(e,l),i(e,s),g()},w=function(t,n){e.player=n,m&&(e.player.playVideo(),v())},h=function(t){console.log("onStateChange"),console.log(e),console.log(t),0===t.data&&(b(!0,!0),document.exitFullscreen&&document.exitFullscreen()),2===t.data&&setTimeout((function(){2===e.player.getPlayerState()&&b()}),2e3),1===t.data&&v()},E=function(){!function(e){if(document.querySelector("script[id=youtube-api]"))e&&e();else{window.onYouTubeIframeAPIReady=function(){e&&e()};let t=document.createElement("script");t.id="youtube-api",t.src="https://www.youtube.com/iframe_api";let n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}((function(){!function(e,t,n,o,r){let i=new YT.Player(e,{videoId:t,host:"https://www.youtube.com",playerVars:n||u(e),events:{onReady:function(e){o&&o(e,i)},onStateChange:function(e){r&&r(e,i)}}})}(y,t,u(e),w,h)}))};p.addEventListener("click",(function(){i(e,l),e.player?e.player.playVideo():E()})),e.addEventListener(d,(function(){e.player||(m=!1,e.setAttribute("data-autoplay","0"),E())})),r(e,"prefetch")&&e.dispatchEvent(f)}}}))}var y;window.processYouTubeEmbedHelper=p,y=function(){p()},"loading"!=document.readyState?y():document.addEventListener("DOMContentLoaded",y)}]);