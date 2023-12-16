import { loadIcons } from "./load.js";

export function event() {
  document.addEventListener("DOMContentLoaded", loadIcons);
}
