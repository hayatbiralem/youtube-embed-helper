import each from './each';
import loadAPI from './loadAPI';
import addVideo from './addVideo';
import getYoutubeId from './getYoutubeId';
import addClass from './addClass';
import removeClass from './removeClass';

const selector = '.o-youtube-embed';
const classes = {
  l: 'is-loading',
  p: 'is-playing'
};

export default function process() {
  each(selector, function (el) {
    if (!el.isYouTubeEmbedHelperProcessed) {

      el.isYouTubeEmbedHelperProcessed = true;

      let youtubeId = getYoutubeId(el.getAttribute('data-url'));

      if (youtubeId) {

        let video = el.querySelector(selector + '__video');
        let play = el.querySelector(selector + '__play');
        let iframe = el.querySelector(selector + '__iframe');

        if (window.getComputedStyle(video, null).getPropertyValue('background-image') === 'none') {
          video.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + youtubeId + '/' + (el.getAttribute('data-thumbnail') || 'hqdefault') + '.jpg)';
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

        let stopOtherPlayers = function(){
          each(selector + '.is-playing', function(element){
            if(element !== el) {
              onPaused(true, false, element);
            }
          });
        };

        let onPlayed = function () {
          addClass(el, classes.p);
          stopOtherPlayers();
        };

        let onReady = function (event, player) {
          el.player = player;
          onPlayed();
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

        play.addEventListener('click', function () {
          if (el.player) {
            el.player.playVideo();
          } else {
            addClass(el, 'is-loading');
            loadAPI(function () {
              addVideo(
                iframe,
                youtubeId,
                onReady,
                onStateChange
              );
              setTimeout(function () {
                removeClass(el, classes.l);
                addClass(el, classes.p);
              }, 500);
            });
          }
        });
      }
    }
  });
}
