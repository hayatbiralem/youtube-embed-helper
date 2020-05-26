/**
 * Has Class
 *
 * @source http://youmightnotneedjquery.com/#has_class
 *
 * @param el
 * @param className
 * @returns {boolean}
 */
export default function addClass(el, className) {
  return el.classList.contains(className);
}
