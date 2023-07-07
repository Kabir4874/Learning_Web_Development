export const scrollToSection = (goto) => {
  document.querySelector("#" + goto).scrollIntoView({ behavior: "smooth" });
};
