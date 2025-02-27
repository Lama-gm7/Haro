// --- [NUEVO CÓDIGO] ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
  
    menuToggle.addEventListener('click', () => {
      // Alterna la clase 'open' en el botón (para la animación del SVG)
      menuToggle.classList.toggle('open');
      // Alterna la clase 'menu_open' en el <ul> (para mostrar/ocultar el menú)
      menu.classList.toggle('menu_open');
    });
  });
  