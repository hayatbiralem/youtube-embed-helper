export default function getData(el, key, def) {
  return el.getAttribute('data-' + key) || def;
}
