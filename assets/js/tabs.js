const tab_buttons = Array.from(document.querySelectorAll(".tab-button"));
const tab_panels = Array.from(document.querySelectorAll(".tab-panel"));

function tab_button_active(index) {
  tab_buttons.forEach((button) => {
    Number.parseInt(button.dataset.index) === index
      ? button.classList.add("tab-button-active")
      : button.classList.remove("tab-button-active");
  });
}

function tab_panel_active(index) {
  tab_panels.forEach((panel) => {
    Number.parseInt(panel.dataset.index) === index
      ? panel.classList.add("fade-in")
      : panel.classList.remove("fade-in");
  });
}

export function panel_active(index) {
  tab_button_active(index);
  tab_panel_active(index);
}
