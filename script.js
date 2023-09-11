// script.js
//NK_dev
// Função para navegação suave
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
    });
    });
});

// Selecionar o carrossel e os slides
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

// Evento ao clicar no botão "Anterior"
prevButton.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    showSlide(currentIndex);
});

// Evento ao clicar no botão "Próximo"
nextButton.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, slides.length - 1);
    showSlide(currentIndex);
});

// Mostrar o primeiro slide inicialmente
showSlide(currentIndex);
//NK_dev