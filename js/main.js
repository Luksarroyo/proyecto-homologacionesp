// Inicializar EmailJS
(function () {
  emailjs.init("hG32FBizjMPyh0OnR"); // Public Key de EmailJS
})();

function enviarFormulario(e) {
  e.preventDefault();

  const button = e.target.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Enviando...';
  button.disabled = true;

  // Obtener datos del formulario
  const formData = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    telefono: document.getElementById('telefono').value,
    caso: document.getElementById('caso').value,
    fecha: new Date().toLocaleString('es-ES')
  };

  // Enviar email usando EmailJS
  emailjs.send('NataliaHomologaciones', 'template_qsl0r3b', formData)
    .then(function (response) {
      console.log('Email enviado exitosamente!', response.status, response.text);
      alert("¡Gracias! Hemos recibido tu solicitud. Nuestro equipo te contactará en las próximas 24 horas para realizar tu estudio de viabilidad gratuito.");
      e.target.reset();
    }, function (error) {
      console.error('Error al enviar email:', error);
      alert("Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente por WhatsApp: +351 931 157 896");
    })
    .finally(function () {
      button.textContent = originalText;
      button.disabled = false;
    });
}

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
