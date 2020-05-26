/**
 * Creates and return a custom event
 *
 * @source http://youmightnotneedjquery.com/#trigger_custom
 *
 * @param eventName
 * @param data
 * @returns {*}
 * @constructor
 */
export default function getCustomEvent(eventName, data) {
  let event;
  if (window.CustomEvent && typeof window.CustomEvent === 'function') {
    event = new CustomEvent(eventName, {detail: data});
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, data);
  }
  return event;
}
