import { getElements, removeClass, toggleClass } from "./utils.js";

const dropdownItem = Array.from(getElements(".dropdown-description"));
const arrowIcons = Array.from(getElements(".arrow-icon"));

function changeClass(id) {
  dropdownItem.forEach((item) => {
    if (Number.parseInt(item.dataset.id) === id) {
      toggleClass(item, "moveDown");
      toggleClass(arrowIcons[id], "rotate-arrow");
      return;
    }
    removeClass(item, "moveDown");
  });
  arrowIcons.forEach((item, i) => {
    if (i !== id) {
      removeClass(item, "rotate-arrow");
    }
  });
}
export function toggleAccordion(target) {
  if (target.className === "questions-dropdown-heading") {
    changeClass(Number.parseInt(target.dataset.id));
  }
  if (target.classList.contains("arrow-icon")) {
    changeClass(Number.parseInt(target.parentElement.dataset.id));
  }
}
