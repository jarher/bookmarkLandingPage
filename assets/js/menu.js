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
