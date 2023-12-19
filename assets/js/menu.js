import { addClass, getElement, removeClass, toggleClass } from "./utils.js";

const menuWrapper = getElement(".main-menu-wrapper");

function timeout(){

}

export function openMenu() {
  toggleClass(menuWrapper, "hidden");
  setTimeout(() => {
    toggleClass(menuWrapper, "fade-in");
  }, 200);
}

export function closeMenu() {
  toggleClass(menuWrapper, "fade-in");
  setTimeout(() => {
    toggleClass(menuWrapper, "hidden");
  }, 200);
}

export function displayMenu() {
  window.matchMedia("(min-width: 1024px)").matches
    ? removeClass(menuWrapper, "hidden")
    : addClass(menuWrapper, "hidden");
}
