tsParticles.load("particles-js", {
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      particles: {
        number: { value: 50 },
        color: { value: "#cbb9ff" },
        links: {
          enable: true,
          color: "#cbb9ff",
          distance: 130,
          opacity: 0.5,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.1,
          outModes: { default: "bounce" }
        },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.6 }
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 100 } }
      },
      detectRetina: true
    });

    const claves = {
      "mama1": "madres2025",
      "mama2": "madres2025",
      "mama3": "madres2025",
      "mama4": "madres2025",
    };

    function validarAcceso(event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value.toLowerCase().trim();
      const clave = document.getElementById("clave").value.trim();
      if (claves[nombre] && claves[nombre] === clave) {
        sessionStorage.setItem("autenticado", "true");
        window.location.href = "espera/" + nombre + ".html";
      } else {
        document.getElementById("error").textContent = "Nombre o contraseña incorrectos.";
      }
    }