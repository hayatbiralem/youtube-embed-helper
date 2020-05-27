let keyCallbacks = 'YouTubeEmbedHelper_API_Callbacks';
let keyFetched = 'YouTubeEmbedHelper_API_Fetched';
let keyLoaded = 'YouTubeEmbedHelper_API_Loaded';

window[keyCallbacks] = window[keyCallbacks] || [];

const addCallback = function(cb){
  if(cb) {
    window[keyCallbacks].push(cb);
  }
};

const runCallbacks = function(){
  if(window[keyCallbacks].length > 0) {
    window[keyCallbacks].forEach(function(cb){
      cb();
    });
  }
};

export default function loadAPI(cb) {

  if(window[keyLoaded]) {
    cb && cb();
  } else {
    addCallback(cb);

    if (!window[keyFetched]) {
      window[keyFetched] = true;

      // Listen ready
      window.onYouTubeIframeAPIReady = function () {
        window[keyLoaded] = true;
        runCallbacks();
      };

      // Call the youtube api
      let tag = document.createElement('script');
      tag.id = 'youtube-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }


  }

}
