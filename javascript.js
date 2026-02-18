const openBtn = document.querySelector("#menu-open-button");
const closeBtn = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");
const orderbutton = document.querySelector(".button")
const contact = document.querySelector(".contact-us")

openBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

