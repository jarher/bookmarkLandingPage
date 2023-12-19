import { addClass, removeClass } from "./utils.js";

const tab_buttons = Array.from(document.querySelectorAll(".tab-button"));
const tab_panels = Array.from(document.querySelectorAll(".tab-panel"));

function changeClass(array, index, className) {
  array.forEach((item) => {
    Number.parseInt(item.dataset.index) === index
      ? addClass(item, className)
      : removeClass(item, className);
  });
}
const tab_button_active = (index) => changeClass(tab_buttons, index, "tab-button-active");

const tab_panel_active = (index) => changeClass(tab_panels, index, "fade-in");

export function panel_active(index) {
  tab_button_active(index);
  tab_panel_active(index);
}
