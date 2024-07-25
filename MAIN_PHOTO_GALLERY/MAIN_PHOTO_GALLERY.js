

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






let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Инициализируем первый слайд
showSlide(currentSlide);


