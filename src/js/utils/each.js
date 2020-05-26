/**
 * Each (IE9+)
 *
 * @source http://youmightnotneedjquery.com/#each
 * @param selector
 * @param callback
 */
export default function each(selector, callback) {
  Array.prototype.forEach.call(document.querySelectorAll(selector), callback);
}
