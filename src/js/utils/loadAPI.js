export default function loadAPI(cb) {
  if (!document.querySelector('script[id=youtube-api]')) {

    // Listen ready
    window.onYouTubeIframeAPIReady = function () {
      cb && cb();
    };

    // Call the youtube api
    let tag = document.createElement('script');
    tag.id = 'youtube-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    cb && cb();
  }
}
