// Inicializar EmailJS
(function () {
  emailjs.init("hG32FBizjMPyh0OnR"); // Public Key de EmailJS
})();

// Función principal para enviar formularios (con EmailJS para index.html)
function enviarFormulario(e) {
  e.preventDefault();

  const button = e.target.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Enviando...";
  button.disabled = true;

  // Verificar si estamos en la página principal (index.html) para usar EmailJS
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
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

// Funcionalidad de los carruseles (solo para guias-homologacion.html)
let currentSlide = 0;
const totalSlides = 2;

function moveCarousel(direction) {
  const track = document.querySelector(".carousel-track");
  const dots = document.querySelectorAll(".carousel-dot");
  
  if (!track || !dots.length) {
    console.log("Elementos del carrusel no encontrados");
    return;
  }

  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const translateX = -currentSlide * 100;
  track.style.transform = `translateX(${translateX}%)`;

  // Actualizar dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(slideIndex) {
  const track = document.querySelector(".carousel-track");
  const dots = document.querySelectorAll(".carousel-dot");
  
  if (!track || !dots.length) {
    console.log("Elementos del carrusel no encontrados");
    return;
  }

  currentSlide = slideIndex;
  const translateX = -currentSlide * 100;
  track.style.transform = `translateX(${translateX}%)`;

  // Actualizar dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Auto-play para los carruseles (solo si existen)
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector(".carousel-track");
  if (track) {
    console.log("Carrusel inicializado correctamente");
    
    // Auto-play cada 8 segundos
    setInterval(() => {
      moveCarousel(1);
    }, 8000);
  } else {
    console.log("No se encontró el carrusel");
  }
});
