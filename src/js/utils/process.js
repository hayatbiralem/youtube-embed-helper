import each from './each';
import loadAPI from './loadAPI';
import addVideo from './addVideo';
import getYoutubeId from './getYoutubeId';
import addClass from './addClass';
import removeClass from './removeClass';
import getData from './getData';
import getPlayerVars from './getPlayerVars';
import getCustomEvent from './getCustomEvent';
import exitFullScreen from './exitFullScreen';

const selector = '.o-youtube-embed';
const classes = {
  l: 'is-loading',
  p: 'is-playing'
};

const eventPrefix = 'youtube-embed-';

const getEventName = function (key) {
  return eventPrefix + key;
};

let eventNames = ['ready', 'played', 'paused', 'finished', 'stateChange'];
let attachEvents = function (el) {
  eventNames.forEach(function (eventName) {
    el['event_' + eventName] = getCustomEvent(eventName, {
      detail: {
        el: el
      }
    });
  });
};

let fireEvent = function (el, eventName) {
  el.dispatchEvent(el['event_' + eventName]);
};


export default function process() {
  each(selector, function (el) {
    if (!el.isYouTubeEmbedHelperProcessed) {

      el.isYouTubeEmbedHelperProcessed = true;

      let youtubeId = getYoutubeId(getData(el, 'url'));

      if (youtubeId) {

        attachEvents(el);

        let video = el.querySelector(selector + '__video');
        let play = el.querySelector(selector + '__play');
        let iframe = el.querySelector(selector + '__iframe');

        let playOnReady = true;

        let showCoverOnPause = parseInt(getData(el, 'show-cover-on-pause'));
        let showCoverOnFinish = parseInt(getData(el, 'show-cover-on-pause', 1));
        let showCoverDelay = parseInt(getData(el, 'show-cover-delay', 2000));

        if (window.getComputedStyle(video, null).getPropertyValue('background-image') === 'none') {
          video.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + youtubeId + '/' + ( getData(el, 'thumbnail', 'hqdefault')) + '.jpg)';
        }

        let onPaused = function (pause, goToStart, element) {
          element = element || el;

          if (pause && element.player) {
            element.player.pauseVideo();
          }

          if (showCoverOnPause) {
            removeClass(element, classes.p);
          }

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

          fireEvent(el, 'ready');

          if (playOnReady) {
            el.player.playVideo();
            onPlayed();
          }
        };

        let onStateChange = function (response) {

          el.state = response.data;

          fireEvent(el, 'stateChange');

          // Check if completed
          if (response.data === 0) {
            onPaused(true, true);

            exitFullScreen();

            if (showCoverOnFinish) {
              removeClass(el, classes.p);
            }

            fireEvent(el, 'finished');
          }

          // Check if paused
          if (response.data === 2) {

            // Wait few second and if still paused show custom play icon and caption
            setTimeout(function () {
              if (el.player.getPlayerState() === 2) {
                onPaused();
              }
            }, showCoverDelay);

            fireEvent(el, 'paused');
          }

          // Check if played
          if (response.data === 1) {
            onPlayed();
            fireEvent(el, 'played');
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

        el.prefetchIframe = function () {
          if (!el.player) {
            playOnReady = false;
            el.setAttribute('data-autoplay', '0');
            load();
          }
        };

        // Do not wait click, add the iframe immediately
        // It is not optimal but when you need to play at the first click on mobile, you could consider it
        if (parseInt(getData(el, 'prefetch'))) {
          el.prefetchIframe();
        }
      }
    }
  });
}
