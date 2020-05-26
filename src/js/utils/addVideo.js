import getData from './getData';

export default function addVideo(el, videoId, onReady, onStateChange) {
  let player = new YT.Player(el, {
    videoId: videoId,
    host: 'https://www.youtube.com',
    playerVars: {
      autoplay: getData(el, 'autoplay', 1),
      modestbranding: getData(el, 'modestbranding', 1),
      rel: getData(el, 'rel', 0),
      showinfo: getData(el, 'showinfo', 0),
      controls: getData(el, 'controls', 1),
      mute: getData(el, 'mute', 0)
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    onReady && onReady(event, player);
  }

  function onPlayerStateChange(event) {
    onStateChange && onStateChange(event, player);
  }
}
