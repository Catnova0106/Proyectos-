// Función para manejar la animación de entrada de los elementos de experiencia
function animarExperiencia() {
    const experiencias = document.querySelectorAll('.experience-item');
    
    experiencias.forEach((experiencia, index) => {
        setTimeout(() => {
            experiencia.style.opacity = '1';
            experiencia.style.transform = 'translateY(0)';
        }, index * 200);
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
    const seccionExperiencia = document.querySelector('.experience');
    
    if (estaEnViewport(seccionExperiencia)) {
        animarExperiencia();
        window.removeEventListener('scroll', manejarScroll);
    }
}

// Agregar el evento de scroll
window.addEventListener('scroll', manejarScroll);

// Llamar a la función de manejo de scroll al cargar la página
document.addEventListener('DOMContentLoaded', manejarScroll);

// Manejar el menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});
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
