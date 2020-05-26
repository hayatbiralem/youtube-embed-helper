export default function getYoutubeId(url) {
  let match = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

  if (match && match[1]) {
    return match[1];
  }

  return 0;
}
