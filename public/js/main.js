// Selecciona elementos
const carouselContainer = document.getElementById('carousel-container'); // Importante: ID coincide con el HTML
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slides.length;

// Función para mostrar el slide actual
function showSlide(index) {
  // Asegura que el índice se mantenga dentro de rango
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  // Calcula el desplazamiento (ancho del contenedor * índice)
  carouselContainer.style.transform = `translateX(-${100 * currentIndex}%)`;
}

// Botones manuales
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Auto-play (cada 4s)
let autoPlayInterval = setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);

// Pausar auto-play al hacer hover o clic (opcional)
carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(autoPlayInterval);
});
carouselContainer.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
});
