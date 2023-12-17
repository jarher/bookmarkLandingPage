import { loadIcons } from "./load.js";
import { closeMenu, openMenu } from "./menu.js";

export function event() {
  document.addEventListener("DOMContentLoaded", loadIcons);

  document.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.className === "menu-icon") {
      openMenu();
    }
    if (e.target.className === "main-menu-icon-close") {
      closeMenu();
    }
  });
}
