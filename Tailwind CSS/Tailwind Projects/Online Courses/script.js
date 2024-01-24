const navbar = document.getElementById("navbar");

const topBanner = document.getElementById("top-banner");

window.addEventListener("scroll", () => {
  if (scrollY > 40) {
    topBanner.classList.add("top-banner");
    navbar.classList.add("navbar");
  } else {
    topBanner.classList.remove("top-banner");
    navbar.classList.remove("navbar");
  }
});
