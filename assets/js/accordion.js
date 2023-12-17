const dropdownItem = Array.from(
  document.querySelectorAll(".dropdown-description")
);

function changeClass(id) {
  dropdownItem.forEach((item) => {
    Number.parseInt(item.dataset.id) === id
      ? item.classList.toggle("moveDown")
      : item.classList.remove("moveDown");
  });
  document.querySelectorAll(".arrow-icon")[id].classList.toggle("rotate-arrow");
}
export function toggleAccordion(target) {
  if (target.className === "questions-dropdown-heading") {
    changeClass(Number.parseInt(target.dataset.id));
  }
  if (target.classList.contains("arrow-icon")) {
    changeClass(Number.parseInt(target.parentElement.dataset.id));
  }
  
}
