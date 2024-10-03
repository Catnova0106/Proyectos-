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
