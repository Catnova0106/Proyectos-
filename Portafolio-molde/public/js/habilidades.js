// Función para animar las barras de progreso de las habilidades
function animarHabilidades() {
    const habilidades = document.querySelectorAll('.skill-category li');
    
    habilidades.forEach((habilidad, index) => {
        setTimeout(() => {
            habilidad.style.opacity = '1';
            habilidad.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Función para verificar si un elemento está en el viewport
function estaEnViewport(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para manejar el scroll y activar la animación
function manejarScroll() {
    const seccionHabilidades = document.querySelector('.skills');
    
    if (estaEnViewport(seccionHabilidades)) {
        animarHabilidades();
        window.removeEventListener('scroll', manejarScroll);
    }
}

// Agregar el evento de scroll
window.addEventListener('scroll', manejarScroll);

// Llamar a la función de manejo de scroll al cargar la página
document.addEventListener('DOMContentLoaded', manejarScroll);
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const menuContainer = document.querySelector('.menu-container');

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!menuContainer.contains(e.target)) {
            navbar.classList.remove('active');
        }
    });

    menuContainer.addEventListener('mouseleave', function() {
        navbar.classList.remove('active');
    });
});
