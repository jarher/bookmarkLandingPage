const d = document;
export const getElement = (selector) => d.querySelector(selector);
export const getElements = (selector) => d.querySelectorAll(selector);
export const toggleClass = (element, className) =>
  element.classList.toggle(className);
export const addClass = (element, className) =>
  element.classList.add(className);
export const removeClass = (element, className) =>
  element.classList.remove(className);
