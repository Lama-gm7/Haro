document.addEventListener('DOMContentLoaded', () => {
    // Secciones de la carta
    const sections = document.querySelectorAll('.carta-category');
    // Enlaces del nav
    const navLinks = document.querySelectorAll('.carta-tabs ul li a');
  
    // Configura IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Si la sección está en el viewport (isIntersecting)
        if (entry.isIntersecting) {
          // Remueve .active de todos los enlaces
          navLinks.forEach(link => link.classList.remove('active'));
  
          // El id de la sección que entró
          const id = entry.target.getAttribute('id');
          // Busca el link que apunte a #id
          const activeLink = document.querySelector(`.carta-tabs a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, {
      root: null,
      // Ajusta estos márgenes para controlar cuándo se considera la sección "activa"
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });
  
    // Observa cada sección
    sections.forEach(section => observer.observe(section));
  });  