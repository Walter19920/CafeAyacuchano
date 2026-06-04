const personaje = document.getElementById("personaje");
const path = document.getElementById("camino");
const contenedorPuntos = document.getElementById("puntos");
const svg = document.getElementById("rutaSVG");
const modal = document.getElementById("modal");
const fondo = document.getElementById("fondo");

const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const mediaDiv = document.getElementById("media");
const opcionesDiv = document.getElementById("opciones");

// Elementos del carrusel
const carrusel = document.getElementById("carrusel");
const videoContainer = document.getElementById("video-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicadoresDiv = document.getElementById("carrusel-indicadores");

// Datos de los puntos
const puntos = {
  inicio: { 
    progreso: 0.05, 
    nombre: "Cafetería", 
    tipo: "video", 
    media: "media/Inicio.mp4", 
    info: `=================== PUNTO DE PARTIDA =================

Te damos la bienvenida a la Ruta Cafetera Experiencial. Aquí conocerás nuestro laboratorio, planta procesadora, trilladora y cafetería.

  Se te entregarán los implementos necesarios para subir a la chacra.
  Tiempo estimado: 1 hora

  Luego abordaremos el carro para un viaje de 30 minutos hacia la FINCA FORTUNA DE PEDRO, donde viven las plantaciones de café.

  Prepárate para vivir el café desde la cosecha hasta la taza, en contacto directo con nuestra cultura y productores locales.

  ¡Te esperamos para vivir esta experiencia auténtica en el VRAEM!

 ------ VALOR AGREGADO: -------
• Experiencia auténtica y personalizada
• Conexión directa con productores locales
• Café de especialidad del VRAEM
• Productos 100% artesanales`, 
    opciones: ["carro"] 
  },
  
  carro: { 
    progreso: 0.30, 
    nombre: "Transporte", 
    tipo: "video", 
    media: "media/carro.mp4", 
    info: `VIAJE A LA FINCA FORTUNA DE PEDRO

Abordaremos nuestro medio de transporte para adentrarnos en las montañas del VRAEM, donde crecen nuestros mejores granos de café.

  DURANTE EL RECORRIDO:
• 30 minutos de viaje rodeados de naturaleza
• Vista panorámica de los cultivos de café
• Aire puro y paisajes andinos

  DATOS CURIOSOS:
• Esta finca lleva más de 20 años produciendo café de especialidad
• Los granos crecen entre 1,200 y 1,800 metros sobre el nivel del mar
• El microclima del VRAEM le da ese sabor único a nuestro café

  AL LLEGAR:
Nos espera la finca Fortuna de Pedro, donde comenzaremos la cosecha y el proceso del café.

¡Prepárate para vivir una experiencia única!`, 
    opciones: ["finca"] 
  },
  
  finca: { 
    progreso: 0.60, 
    nombre: "🌿 Finca Fortuna de Pedro", 
    tipo: "carrusel", 
    videos: [
      { 
        src: "media/finca inicio.mp4", 
        titulo: "🌿 Bienvenida a la Finca Fortuna de Pedro", 
        desc: " Ubicada en el corazón del VRAEM, a 1,200 - 1,800 metros sobre el nivel del mar.\n\n Te damos la bienvenida a nuestra finca, donde cultivar nuestro café de especialidad por más de 20 años.\n\n Aquí conocerás:\n• Las plantaciones de café\n• La biodiversidad de la zona\n• A las familias productoras que hacen posible esta experiencia única\n• El microclima del VRAEM que le da ese sabor único a nuestro café.\n• El beneficio ecológico y sostenible de nuestra producción.\n• La historia y tradición cafetera de Ayacucho\n\n TIEMPO:\n• Conocer la chacra: 2 horas" 
      },
      { 
        src: "media/cafe verde.mp4", 
        titulo: "🫘 Cosecha y Proceso del Café", 
        desc: " COSECHA (30 min):\nParticipa en la recolección de granos maduros directamente del árbol. Aprende a seleccionar los mejores granos y la importancia de cosechar en el punto exacto de madurez.\n\n PROCESO (30 min):\nDescubre cómo se transforma el grano recién cosechado:\n• Despulpado: separación de la pulpa del grano (2 horas por persona)\n• Fermentado: 12-24 horas para desarrollar aromas\n• Lavado: con agua pura de manantial\n• Secado: al sol en patios de cemento durante 8-15 días\n\n TIEMPO:\n• Cosecha: 1 hora\n\nEste proceso artesanal realza los sabores únicos de nuestro café." 
      },
      { 
        src: "media/secadora.mp4", 
        titulo: "☀️ Secado Natural del Café", 
        desc: " PROCESO DE SECADO (8-15 días):\nLos granos se extienden al sol en patios de cemento, donde se remueven constantemente para un secado uniforme.\n\n IMPORTANCIA DEL SECADO:\n• Desarrolla los aromas del café\n• Evita fermentaciones no deseadas\n• Reduce la humedad del grano (10-12%)\n• Prepara el grano para el almacenamiento\n\n DATO CURIOSO:\nEl microclima del VRAEM, con sus temperaturas y humedad específicas, permite un secado natural que potencia los sabores únicos de nuestro café.\n\n TIEMPO DE EXPLICACIÓN:\n• 40 minutos" 
      },
      { 
        src: "media/secadora.2.mp4", 
        titulo: "🔥 Tostado Artesanal", 
        desc: " TOSTADO ARTESANAL (25 min):\nDemostración del tostado artesanal y cómo este proceso realza los sabores y aromas únicos de nuestro café.\n\n ETAPAS DEL TOSTADO:\n• Secado: elimina la humedad restante\n• Desarrollo: los azúcares se caramelizan\n• Tostado final: se definen los sabores\n\n TIPOS DE TOSTADO:\n• Claro: sabores frutales y ácidos\n• Medio: equilibrio entre acidez y cuerpo\n• Oscuro: sabores intensos y achocolatados\n\n TIEMPO REAL DE ACTIVIDAD:\n• 3 horas por grupo" 
      },
      { 
        src: "media/secadora.3.mp4", 
        titulo: "🏺 Beneficiado Seco y Almacenamiento", 
        desc: " BENEFICIADO SECO - TRILLADO:\nUna vez seco, el café pasa por la trilladora para eliminar la cáscara pergamino, revelando el grano verde listo para ser tostado.\n\n PROCESO DE TRILLADO:\n• Eliminación de la cáscara pergamino\n• Clasificación por tamaño y densidad\n• Selección de granos de alta calidad\n\n ALMACENAMIENTO Y REPOSO:\nEl café verde se almacena en costales de yute en condiciones controladas de humedad y temperatura.\n\n BENEFICIOS DEL REPOSO:\n• Los sabores se estabilizan\n• Se preparan para el tostado\n• Mantiene toda su calidad\n• Maduración natural del grano\n\n TIEMPO:\n• Trillado: 1 hora\n\n Luego:\n• Refrigerio\n• Tiempo para fotos" 
      }
    ],
    opciones: ["final"] 
  },
  
  final: { 
    progreso: 0.90, 
    nombre: "☕ Degustación", 
    tipo: "carrusel",
    videos: [
      { 
        src: "media/PreparacionEllosMismos1.mp4", 
        titulo: "☕ Cómo Prepararán su Café", 
        desc: " TALLER DE PREPARACIÓN (40 min):\n\nLos visitantes aprenderán a preparar su propio café utilizando diferentes métodos:\n\n MÉTODOS DE PREPARACIÓN:\n• Método V60\n• Prensa francesa\n• Cafetera moka\n\n TIEMPO REAL:\n• 3 horas\n\n Al final, cada participante preparará y degustará su propia taza de café.\n\n INCLUYE:\n• Materiales y equipos\n• Guía especializado\n• Degustación de su propia preparación" 
      },
      { 
        src: "media/tostadoras.mp4", 
        titulo: "🔥 Tostadora", 
        desc: " DEMOSTRACIÓN DE TOSTADO (25 min):\n\nDemostración del proceso de tostado y cómo este proceso realza los sabores y aromas de nuestro café.\n\n PROCESO DE TOSTADO:\n• El grano verde se transforma en café aromático\n• Se desarrollan los sabores y aromas característicos\n• El tiempo y temperatura definen el tipo de tostado\n\n IMPORTANCIA DEL TOSTADO:\n• Es el paso más crítico para desarrollar el aroma y sabor\n• Define la calidad final de la taza de café\n• Un buen tostado resalta las propiedades únicas del grano\n• Sin un tostado adecuado, se pierden los sabores especiales\n\n RESULTADO:\nUn café de especialidad con sabores y aromas únicos del VRAEM." 
      },
      { 
        src: "media/PrepararCafeEllosMismos.mp4", 
        titulo: "☕ Preparación Final del Café", 
        desc: " TALLER DE PREPARACIÓN (40 min):\n\nTaller práctico donde los visitantes preparan su propio café en diferentes métodos.\n\n MÉTODOS DE PREPARACIÓN:\n• V60\n• Prensa francesa\n• Moka\n\n QUÉ HARÁN:\n• Seleccionarán su método favorito\n• Medirán las proporciones correctas\n• Controlarán la temperatura del agua\n• Aplicarán las técnicas aprendidas\n\n INCLUYE:\n• Guía especializado\n• Materiales y equipos\n• Degustación de su propia preparación\n\n Disfrutarán de su café recién preparado al final del taller.\n\n TIEMPO FINAL:\n• Degustación: 2 horas\n\n RETORNO:\n• 30 minutos" 
      }
    ],
    opciones: [] 
  }
};

let progresoActual = 0;
let puntoActual = "inicio";
let animando = false;
let videoActual = null;
let carruselActual = [];
let carruselIndex = 0;
let carruselActivo = false;
const cachePos = {};

// ========================================
// FUNCIONES PRINCIPALES - MEJORADAS
// ========================================

/**
 * Obtener la escala actual del SVG con respecto al viewBox
 * Esto es crucial para responsive
 */
function getEscala() {
  const svgRect = svg.getBoundingClientRect();
  const mapRect = document.getElementById("mapa").getBoundingClientRect();
  
  // Obtener el viewBox del SVG
  const viewBox = svg.getAttribute("viewBox");
  const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
  
  // Calcular escala basada en el tamaño actual vs viewBox
  const scaleX = mapRect.width / vbWidth;
  const scaleY = mapRect.height / vbHeight;
  
  return { scaleX, scaleY, svgRect, mapRect };
}

/**
 * Dibujar todos los puntos en la ruta
 */
function dibujarPuntos() {
  if (!path) return;
  
  contenedorPuntos.innerHTML = "";
  const longitud = path.getTotalLength();
  const { scaleX, scaleY, mapRect } = getEscala();

  for (let id in puntos) {
    const pos = path.getPointAtLength(puntos[id].progreso * longitud);
    
    // Cachear posición
    cachePos[id] = { 
      x: pos.x, 
      y: pos.y,
      progreso: puntos[id].progreso
    };

    // Crear punto
    const div = document.createElement("div");
    div.className = "punto";
    div.style.left = (pos.x * scaleX) + "px";
    div.style.top = (pos.y * scaleY) + "px";
    div.title = puntos[id].nombre;
    
    div.onclick = (function(puntoId) {
      return function(e) {
        e.stopPropagation();
        if (animando) return;
        moverA(puntoId);
      };
    })(id);

    contenedorPuntos.appendChild(div);
  }
}

/**
 * Mover el personaje de un punto a otro
 */
function moverA(id) {
  if (animando || !path) return;
  animando = true;

  const longitud = path.getTotalLength();
  const inicio = progresoActual;
  const fin = puntos[id].progreso;
  const duracion = 1400;

  let start = null;

  function animar(t) {
    if (!start) start = t;

    let p = (t - start) / duracion;
    if (p > 1) p = 1;

    const progreso = inicio + (fin - inicio) * p;
    const punto = path.getPointAtLength(progreso * longitud);
    const { scaleX, scaleY } = getEscala();

    personaje.style.left = (punto.x * scaleX) + "px";
    personaje.style.top = (punto.y * scaleY) + "px";

    if (p < 1) {
      requestAnimationFrame(animar);
    } else {
      // Posición final precisa
      const posExacta = cachePos[id];
      if (posExacta) {
        const { scaleX, scaleY } = getEscala();
        personaje.style.left = (posExacta.x * scaleX) + "px";
        personaje.style.top = (posExacta.y * scaleY) + "px";
      }
      
      progresoActual = fin;
      puntoActual = id;
      animando = false;
      abrirModal(id);
    }
  }

  requestAnimationFrame(animar);
}

/**
 * Abrir modal con información del punto
 */
function abrirModal(id) {
  const p = puntos[id];
  
  ocultarCarrusel();
  
  // Limpiar media anterior
  mediaDiv.innerHTML = "";
  
  // Si es carrusel
  if (p.tipo === "carrusel" && p.videos) {
    mediaDiv.appendChild(carrusel);
    mostrarCarrusel(p.videos);
  } 
  // Si es video normal
  else if (p.tipo === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.src = p.media;
    video.preload = "auto";
    video.currentTime = 0;
    mediaDiv.appendChild(video);
    videoActual = video;
    
    setTimeout(() => {
      if (videoActual) {
        videoActual.play().catch(() => {});
      }
    }, 50);
  } 
  // Si es imagen
  else if (p.tipo === "imagen") {
    const img = document.createElement("img");
    img.src = p.media;
    mediaDiv.appendChild(img);
  }
  
  // Actualizar textos si no es carrusel
  if (p.tipo !== "carrusel") {
    titulo.textContent = p.nombre;
    descripcion.textContent = p.info;
  }
  
  // Botones de opciones
  opcionesDiv.innerHTML = "";
  for (let i = 0; i < p.opciones.length; i++) {
    const op = p.opciones[i];
    const btn = document.createElement("button");
    btn.textContent = "Ir a " + puntos[op].nombre;
    btn.onclick = () => {
      cerrarModal();
      moverA(op);
    };
    opcionesDiv.appendChild(btn);
  }
  
  // Mostrar modal
  modal.style.display = "block";
}

/**
 * Cerrar modal
 */
function cerrarModal() {
  const videos = modal.querySelectorAll("video");
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
  
  if (videoActual) {
    videoActual.pause();
    videoActual.currentTime = 0;
    videoActual = null;
  }
  
  ocultarCarrusel();
  modal.style.display = "none";
}

// ========================================
// FUNCIONES DEL CARRUSEL
// ========================================

function mostrarCarrusel(videos) {
  carruselActual = videos;
  carruselIndex = 0;
  carruselActivo = true;
  
  carrusel.style.display = "flex";
  
  // Crear indicadores
  indicadoresDiv.innerHTML = "";
  videos.forEach((_, i) => {
    const indicador = document.createElement("div");
    indicador.className = "indicador";
    if (i === 0) indicador.classList.add("activo");
    indicador.onclick = () => irAlVideo(i);
    indicadoresDiv.appendChild(indicador);
  });
  
  actualizarVideoCarrusel();
}

function actualizarVideoCarrusel() {
  if (!carruselActivo || carruselActual.length === 0) return;
  
  const videoData = carruselActual[carruselIndex];
  
  videoContainer.innerHTML = "";
  const video = document.createElement("video");
  video.controls = true;
  video.src = videoData.src;
  video.preload = "auto";
  video.currentTime = 0;
  videoContainer.appendChild(video);
  videoActual = video;
  
  // Actualizar textos
  titulo.textContent = videoData.titulo;
  descripcion.textContent = videoData.desc;
  
  // Actualizar indicadores
  const indicadores = document.querySelectorAll(".indicador");
  indicadores.forEach((ind, i) => {
    ind.classList.toggle("activo", i === carruselIndex);
  });
  
  // Reproducir
  setTimeout(() => {
    if (videoActual) {
      videoActual.play().catch(() => {});
    }
  }, 50);
}

function videoSiguiente() {
  if (!carruselActivo || carruselActual.length === 0) return;
  carruselIndex = (carruselIndex + 1) % carruselActual.length;
  actualizarVideoCarrusel();
}

function videoAnterior() {
  if (!carruselActivo || carruselActual.length === 0) return;
  carruselIndex = (carruselIndex - 1 + carruselActual.length) % carruselActual.length;
  actualizarVideoCarrusel();
}

function irAlVideo(index) {
  if (!carruselActivo) return;
  carruselIndex = index;
  actualizarVideoCarrusel();
}

function ocultarCarrusel() {
  carruselActivo = false;
  carrusel.style.display = "none";
  if (videoContainer) videoContainer.innerHTML = "";
  if (indicadoresDiv) indicadoresDiv.innerHTML = "";
}

// ========================================
// INICIALIZACIÓN Y EVENTOS
// ========================================

window.addEventListener("load", () => {
  let progress = 0;
  const percent = document.getElementById("percent");
  const loader = document.getElementById("loading-screen");
  
  // Asignar eventos de botones
  if (prevBtn) prevBtn.onclick = videoAnterior;
  if (nextBtn) nextBtn.onclick = videoSiguiente;
  
  const interval = setInterval(() => {
    progress++;
    percent.textContent = progress + "%";
    
    if (progress >= 100) {
      clearInterval(interval);
      
      setTimeout(() => {
        loader.style.display = "none";
        dibujarPuntos();
        moverA("inicio");
      }, 200);
    }
  }, 15);
});

/**
 * Manejo del resize - mejorado
 */
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Redibujar puntos con nuevas escalas
    dibujarPuntos();
    
    // Si modal está abierto, reposicionarlo
    if (modal.style.display === "block") {
      // El modal ahora usa transform: translate(-50%, -50%)
      // así que se centra automáticamente sin cálculos complejos
    }
  }, 150);
});

/**
 * Cerrar modal al hacer clic fuera
 */
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    cerrarModal();
  }
});

/**
 * Cerrar modal con tecla ESC
 */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    cerrarModal();
  }
});

// Exponer funciones globalmente
window.cerrarModal = cerrarModal;
window.videoSiguiente = videoSiguiente;
window.videoAnterior = videoAnterior;