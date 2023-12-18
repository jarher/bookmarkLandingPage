import { toggleAccordion } from "./accordion.js";
import { isValid } from "./formValidator.js";
import { loadIcons } from "./load.js";
import { closeMenu, displayMenu, openMenu } from "./menu.js";
import { panel_active } from "./tabs.js";

export function event() {
  const d = document;

  function formValidation({ isAdd, isDisabled }) {
    const errorMessage = d.querySelector(".input-error");
    const button = d.querySelector("form button");
    if (isAdd) {
      errorMessage.classList.add("hidden");
      button.disabled = isDisabled;
    } else {
      errorMessage.classList.remove("hidden");
      button.disabled = isDisabled;
    }
  }

  d.addEventListener("DOMContentLoaded", e => {
    loadIcons();
    displayMenu();
  });

  d.addEventListener("click", (e) => {
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
