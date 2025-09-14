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
let carouselInterval;

function initCarousel() {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".carousel-dot");
  
  if (!track || !prevBtn || !nextBtn || !dots.length) {
    console.log("Elementos del carrusel no encontrados");
    return false;
  }

  console.log("Carrusel inicializado correctamente");

  // Función para actualizar el carrusel
  function updateCarousel() {
    const translateX = -currentSlide * 100;
    track.style.transform = `translateX(${translateX}%)`;
    
    // Actualizar dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Event listeners para botones
  prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    updateCarousel();
    resetAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    updateCarousel();
    resetAutoPlay();
  });

  // Event listeners para dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
      resetAutoPlay();
    });
  });

  // Auto-play
  function startAutoPlay() {
    carouselInterval = setInterval(() => {
      currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
      updateCarousel();
    }, 5000);
  }

  function resetAutoPlay() {
    clearInterval(carouselInterval);
    startAutoPlay();
  }

  // Iniciar auto-play
  startAutoPlay();

  return true;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Esperar un poco más para asegurar que todo esté cargado
  setTimeout(() => {
    if (!initCarousel()) {
      console.log("Error al inicializar el carrusel");
    }
  }, 100);
});
