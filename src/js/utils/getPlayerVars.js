import getData from './getData';

export default function getPlayerVars(el) {
  return {
    autoplay: getData(el, 'autoplay', 1),
    modestbranding: getData(el, 'modestbranding', 1),
    rel: getData(el, 'rel', 0),
    showinfo: getData(el, 'showinfo', 0),
    controls: getData(el, 'controls', 1),
    mute: getData(el, 'mute', 0)
  };
}
