export default function getData(el, key, def) {
  return el.hasAttribute('data-' + key) ? el.getAttribute('data-' + key) : def;
}
