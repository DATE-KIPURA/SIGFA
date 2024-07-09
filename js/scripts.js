(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Formulario de inicio de sesión de usuario
        var loginFormUser = document.getElementById('loginFormUser');
        if (loginFormUser) {
            loginFormUser.addEventListener('submit', function(event) {
                if (loginFormUser.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault(); // Evitar el envío real del formulario para demostración
                    window.location.href = 'welcome.html'; // Redirigir a la página de bienvenida
                }
                loginFormUser.classList.add('was-validated');
            }, false);
        }

        // Formulario de inicio de sesión de trabajador
        var loginFormWorker = document.getElementById('loginFormWorker');
        if (loginFormWorker) {
            loginFormWorker.addEventListener('submit', function(event) {
                if (loginFormWorker.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }else {
                    event.preventDefault(); // Evitar el envío real del formulario para demostración
                    window.location.href = 'worker_dashboard.html'; // Redirigir a la página de bienvenida
                }
                loginFormWorker.classList.add('was-validated');
            }, false);
        }

        // Formulario de registro
        var registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', function(event) {
                if (registerForm.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                registerForm.classList.add('was-validated');
            }, false);
        }

        // Formulario de pagos y aportes
        var paymentForm = document.getElementById('paymentForm');
        if (paymentForm) {
            paymentForm.addEventListener('submit', function(event) {
                if (paymentForm.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault(); // Evitar el envío real del formulario para demostración
                    document.getElementById('thankYouMessage').style.display = 'block';
                }
                paymentForm.classList.add('was-validated');
            }, false);
        }

        // Formulario de contacto
        var contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                if (contactForm.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault(); // Evitar el envío real del formulario para demostración
                    alert('Mensaje enviado. Gracias por contactarnos.');
                }
                contactForm.classList.add('was-validated');
            }, false);
        }
    }, false);
})();
