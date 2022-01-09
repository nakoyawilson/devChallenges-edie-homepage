const menuButton = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-button");
const mobileNavigation = document.querySelector("#mobile-navigation");
const links = document.querySelectorAll(".mobile-nav-link");

menuButton.addEventListener("click", () => {
  mobileNavigation.classList.add("open");
});

closeButton.addEventListener("click", () => {
  mobileNavigation.classList.remove("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavigation.classList.remove("open");
  });
});
