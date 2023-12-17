import { toggleAccordion } from "./accordion.js";
import { loadIcons } from "./load.js";
import { closeMenu, openMenu } from "./menu.js";
import { panel_active } from "./tabs.js";

export function event() {
  document.addEventListener("DOMContentLoaded", loadIcons);

  document.addEventListener("click", (e) => {
   
    if (e.target.className === "menu-icon") {
      openMenu();
    }
    if (e.target.className === "main-menu-icon-close") {
      closeMenu();
    }
    if (e.target.classList.contains("tab-button")) {
      panel_active(Number.parseInt(e.target.dataset.index));
    }
    toggleAccordion(e.target);
  });
}
