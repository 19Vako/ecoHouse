/* document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentRect.width < 768) {
        navLinks.classList.remove("active");
      }
    }
  });

  resizeObserver.observe(document.body);
}); */





const miniNavLinks = document.getElementById("mini-nav-links");
const miniMenuButton = document.getElementById("menu-button");

miniMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (miniNavLinks.style.display === "flex") {
        miniNavLinks.style.display = "none";
    } else {
        miniNavLinks.style.display = "flex";
    }
});

document.addEventListener("click", (event) => {
    if (miniNavLinks.style.display === "flex" &&
        !miniNavLinks.contains(event.target) &&
        !miniMenuButton.contains(event.target)) {
        miniNavLinks.style.display = "none";
    }
});

