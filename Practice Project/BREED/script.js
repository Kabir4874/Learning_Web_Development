const nav= document.querySelector(".nav-wrapper");
window.addEventListener('scroll',()=>{
    if (window.scrollY > 60) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
})

