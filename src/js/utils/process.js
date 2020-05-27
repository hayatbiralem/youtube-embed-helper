import each from './each';
import loadAPI from './loadAPI';
import addVideo from './addVideo';
import getYoutubeId from './getYoutubeId';
import addClass from './addClass';
import removeClass from './removeClass';
import getData from './getData';
import getPlayerVars from './getPlayerVars';
import getCustomEvent from './getCustomEvent';

const selector = '.o-youtube-embed';
const classes = {
  l: 'is-loading',
  p: 'is-playing'
};

const eventPrefix = 'youtube-embed-';

const getEventName = function (key) {
  return eventPrefix + key;
};

let prefetchEventName = getEventName('prefetch');
let prefetchEvent = getCustomEvent(prefetchEventName);

export default function process() {
  each(selector, function (el) {
    if (!el.isYouTubeEmbedHelperProcessed) {

      el.isYouTubeEmbedHelperProcessed = true;

      el.prefetchEvent = prefetchEvent;

      let youtubeId = getYoutubeId(getData(el, 'url'));

      if (youtubeId) {

        let video = el.querySelector(selector + '__video');
        let play = el.querySelector(selector + '__play');
        let iframe = el.querySelector(selector + '__iframe');

        let playOnReady = true;

        if (window.getComputedStyle(video, null).getPropertyValue('background-image') === 'none') {
          video.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + youtubeId + '/' + ( getData(el, 'thumbnail', 'hqdefault')) + '.jpg)';
        }

        let onPaused = function (pause, goToStart, element) {
          element = element || el;

          if (pause && element.player) {
            element.player.pauseVideo();
          }

          removeClass(element, classes.p);

          if (goToStart && element.player) {
            element.player.seekTo(0);
          }
        };

        let stopOtherPlayers = function () {
          each(selector + '.is-playing', function (element) {
            if (element !== el) {
              onPaused(true, false, element);
            }
          });
        };

        let onPlayed = function () {
          removeClass(el, classes.l);
          addClass(el, classes.p);
          stopOtherPlayers();
        };

        let onReady = function (event, player) {
          el.player = player;

          if (playOnReady) {
            el.player.playVideo();
            onPlayed();
          }
        };

        let onStateChange = function (response) {

          // Check if completed
          if (response.data === 0) {
            onPaused(true, true);
            document.exitFullscreen && document.exitFullscreen();
          }

          // Check if paused
          if (response.data === 2) {

            // Wait few second and if still paused show custom play icon and caption
            setTimeout(function () {
              if (el.player.getPlayerState() === 2) {
                onPaused();
              }
            }, 2000);
          }

          // Check if played
          if (response.data === 1) {
            onPlayed();
          }
        };

        let load = function () {
          loadAPI(function () {
            addVideo(
              iframe,
              youtubeId,
              getPlayerVars(el),
              onReady,
              onStateChange
            );
          });
        };

        play.addEventListener('click', function () {
          addClass(el, classes.l);
          if (el.player) {
            el.player.playVideo();
          } else {
            load();
          }
        });

        el.addEventListener(prefetchEventName, function () {
          if(!el.player) {
            playOnReady = false;
            el.setAttribute('data-autoplay', '0');
            load();
          }
        });

        // Do not wait click, add the iframe immediately
        // It is not optimal but when you need to play at the first click on mobile, you could consider it
        if (parseInt(getData(el, 'prefetch'))) {
          el.dispatchEvent(prefetchEvent);
        }
      }
    }
  });
}
