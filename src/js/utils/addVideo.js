import getPlayerVars from './getPlayerVars';

export default function addVideo(el, videoId, playerVars, onReady, onStateChange) {
  let player = new YT.Player(el, {
    videoId: videoId,
    host: 'https://www.youtube.com',
    playerVars: playerVars || getPlayerVars(el),
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
