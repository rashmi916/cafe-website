const openBtn = document.querySelector("#menu-open-button");
const closeBtn = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

openBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
