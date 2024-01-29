const navbar = document.getElementById("navbar");

const topBanner = document.getElementById("top-banner");

window.addEventListener("scroll", () => {
  if (scrollY > 40) {
    topBanner.classList.add("top-banner");
    navbar.classList.add("navbar");
    navbar.style.marginTop = "0";
  } else {
    topBanner.classList.remove("top-banner");
    navbar.classList.remove("navbar");
    navbar.style.marginTop = "5rem";
  }
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const cross = document.getElementById("cross");

hamburger.addEventListener("click", () => {
  menu.style.left = "0";
  cross.classList.remove("hidden");
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  menu.style.left = "105%";
});
