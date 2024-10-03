document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
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
