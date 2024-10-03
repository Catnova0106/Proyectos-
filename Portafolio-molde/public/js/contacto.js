// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el formulario de contacto
    const formularioContacto = document.getElementById('contact-form');

    // Agrega un evento de escucha para el envío del formulario
    formularioContacto.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Previene el envío por defecto del formulario

        // Obtiene los valores de los campos
        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('message').value;

        // Aquí puedes agregar la lógica para enviar los datos del formulario
        // Por ejemplo, usando fetch para enviar una solicitud POST a un servidor

        console.log('Formulario enviado:');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        // Limpia los campos del formulario después del envío
        formularioContacto.reset();

        // Muestra un mensaje de éxito al usuario
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
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

