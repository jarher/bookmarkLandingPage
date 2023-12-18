import { toggleAccordion } from "./accordion.js";
import { formValidation, isValid } from "./formValidator.js";
import { loadIcons } from "./load.js";
import { closeMenu, displayMenu, openMenu } from "./menu.js";
import { panel_active } from "./tabs.js";

export function event() {
  const d = document;

  d.addEventListener("DOMContentLoaded", e => {
    loadIcons();
    displayMenu();
  });

  d.addEventListener("click", (e) => {
    e.preventDefault();
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

  d.addEventListener("keyup", (e) => {
    !isValid(e.target)
      ? formValidation({ isAdd: false, isDisabled: true })
      : formValidation({ isAdd: true, isDisabled: false });
    if (e.target.value === "")
      formValidation({ isAdd: true, isDisabled: true });
  });

  d.addEventListener("resize", displayMenu);

}
