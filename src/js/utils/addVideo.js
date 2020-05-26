export default function addVideo(el, videoId, onReady, onStateChange) {
  let player = new YT.Player(el, {
    videoId: videoId,
    host: 'https://www.youtube.com',
    playerVars: {autoplay: 1, modestbranding: 1, rel: 0, showinfo: 0, controls: 1},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
    onReady && onReady(event, player);
  }

  function onPlayerStateChange(event) {
    onStateChange && onStateChange(event, player);
  }
}
