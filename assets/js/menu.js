const menuWrapper = document.querySelector(".main-menu-wrapper");

export function openMenu() {
  menuWrapper.classList.toggle("hidden");
  setTimeout(() => {
    menuWrapper.classList.toggle("fade-in");
  }, 200);
}

export function closeMenu() {
  menuWrapper.classList.toggle("fade-in");
  setTimeout(() => {
    menuWrapper.classList.toggle("hidden");
  }, 200);
}

export function displayMenu() {
  window.matchMedia("(min-width: 1024px)").matches
    ? menuWrapper.classList.remove("hidden")
    : menuWrapper.classList.add("hidden");
}
