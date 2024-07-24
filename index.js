


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

