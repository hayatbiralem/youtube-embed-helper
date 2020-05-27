export default function exitFullScreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
    document.exitFullscreen();
  }
}
