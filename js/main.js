// Función principal para enviar formularios (con EmailJS para index.html)
function enviarFormulario(e) {
  e.preventDefault();

  const button = e.target.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Enviando...";
  button.disabled = true;

  // Verificar si estamos en la página principal (index.html) para usar EmailJS
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    // Verificar que EmailJS esté disponible
    if (typeof emailjs === 'undefined') {
      console.error("EmailJS no está cargado");
      alert("Error: EmailJS no está disponible. Por favor, recarga la página.");
      button.textContent = originalText;
      button.disabled = false;
      return;
    }

    // Obtener datos del formulario
    const formData = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      caso: document.getElementById("caso").value,
      fecha: new Date().toLocaleString("es-ES")
    };

    // Enviar email usando EmailJS
    emailjs.send("NataliaHomologaciones", "template_qsl0r3b", formData)
      .then(function (response) {
        console.log("Email enviado exitosamente!", response.status, response.text);
        alert("¡Gracias! Hemos recibido tu solicitud. Nuestro equipo te contactará en las próximas 24 horas para realizar tu estudio de viabilidad gratuito.");
        e.target.reset();
      }, function (error) {
        console.error("Error al enviar email:", error);
        alert("Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente por WhatsApp: +351 931 157 896");
      })
      .finally(function () {
        button.textContent = originalText;
        button.disabled = false;
      });
  } else {
    // Para otras páginas, simular envío
    setTimeout(() => {
      alert("¡Gracias! Hemos recibido tu solicitud. Nuestro equipo te contactará en las próximas 24 horas para realizar tu estudio de viabilidad gratuito.");
      e.target.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 1500);
  }
}

// Función específica para la página de impulsa carrera
function contactar() {
  // Redirigir al formulario de contacto de la página principal
  window.location.href = "index.html#contacto";
}

// Smooth scrolling para links internos
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Función profesional para descargar PDFs
function descargarGuia(event) {
  event.preventDefault();
  
  const button = event.target;
  const originalText = button.textContent;
  
  // Mostrar estado de carga
  button.textContent = "Descargando...";
  button.disabled = true;
  
  // Crear enlace temporal
  const link = document.createElement('a');
  link.href = 'pdfs/guia-homologacion-gratuita.pdf';
  link.download = 'Guia-Homologacion-Gratuita.pdf';
  link.style.display = 'none';
  
  // Agregar al DOM, hacer clic y remover
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Restaurar botón después de un delay
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    
    // Mostrar mensaje de éxito
    showNotification('¡Guía descargada exitosamente!', 'success');
  }, 2000);
  
  // Analytics (opcional)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download', {
      'file_name': 'guia-homologacion-gratuita.pdf',
      'file_type': 'pdf'
    });
  }
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar EmailJS si está disponible
  if (typeof emailjs !== 'undefined') {
    emailjs.init("hG32FBizjMPyh0OnR"); // Public Key de EmailJS
    console.log("EmailJS inicializado correctamente");
  } else {
    console.log("EmailJS no está disponible en esta página");
  }

  // No se requiere inicialización adicional en esta página
});
