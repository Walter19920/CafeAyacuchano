const personaje = document.getElementById("personaje");
const path = document.getElementById("camino");
const contenedorPuntos = document.getElementById("puntos");
const svg = document.getElementById("rutaSVG");
const modal = document.getElementById("modal");

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

const puntos = {
  inicio: { 
    progreso: 0.05, 
    nombre: "Cafetería", 
    tipo: "video", 
    media: "media/Inicio.mp4", 
    info: `=================== PUNTO DE PARTIDA =================

Te damos la bienvenida a la Ruta Cafetera Experiencial. Aquí conocerás nuestro laboratorio, planta procesadora, trilladora y cafetería.

  Se te entregarán los implementos necesarios para subir a la chacra.

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
      desc: " Ubicada en el corazón del VRAEM, a 1,200 - 1,800 metros sobre el nivel del mar.\n\n Te damos la bienvenida a nuestra finca, donde cultivar nuestro café de especialidad por más de 20 años.\n\n Aquí conocerás:\n• Las plantaciones de café\n• La biodiversidad de la zona\n• A las familias productoras que hacen posible esta experiencia única\n• El microclima del VRAEM que le da ese sabor único a nuestro café.\n• El beneficio ecológico y sostenible de nuestra producción.\n• La historia y tradición cafetera de Ayacucho                                   " 
    },
    { 
      src: "media/cafe verde.mp4", 
      titulo: "🫘 Cosecha y Proceso del Café", 
      desc: " COSECHA (30 min):\nParticipa en la recolección de granos maduros directamente del árbol. Aprende a seleccionar los mejores granos y la importancia de cosechar en el punto exacto de madurez.\n\n PROCESO (30 min):\nDescubre cómo se transforma el grano recién cosechado:\n• Despulpado: separación de la pulpa del grano\n• Fermentado: 12-24 horas para desarrollar aromas\n• Lavado: con agua pura de manantial\n• Secado: al sol en patios de cemento durante 8-15 días\n\nEste proceso artesanal realza los sabores únicos de nuestro café." 
    },
    { 
      src: "media/secadora.mp4", 
      titulo: "☀️ Secado Natural del Café", 
      desc: " PROCESO DE SECADO (8-15 días):\nLos granos se extienden al sol en patios de cemento, donde se remueven constantemente para un secado uniforme.\n\n IMPORTANCIA DEL SECADO:\n• Desarrolla los aromas del café\n• Evita fermentaciones no deseadas\n• Reduce la humedad del grano (10-12%)\n• Prepara el grano para el almacenamiento\n\n DATO CURIOSO:\nEl microclima del VRAEM, con sus temperaturas y humedad específicas, permite un secado natural que potencia los sabores únicos de nuestro café." 
    },
    { 
      src: "media/secadora.2.mp4", 
      titulo: "🔥 Tostado Artesanal", 
      desc: " TOSTADO ARTESANAL (25 min):\nDemostración del tostado artesanal y cómo este proceso realza los sabores y aromas únicos de nuestro café.\n\n ETAPAS DEL TOSTADO:\n• Secado: elimina la humedad restante\n• Desarrollo: los azúcares se caramelizan\n• Tostado final: se definen los sabores\n\n TIPOS DE TOSTADO:\n• Claro: sabores frutales y ácidos\n• Medio: equilibrio entre acidez y cuerpo\n• Oscuro: sabores intensos y achocolatados\n" 
    },
    { 
      src: "media/secadora.3.mp4", 
      titulo: "🏺 Beneficiado Seco y Almacenamiento", 
      desc: " BENEFICIADO SECO - TRILLADO:\nUna vez seco, el café pasa por la trilladora para eliminar la cáscara pergamino, revelando el grano verde listo para ser tostado.\n\n PROCESO DE TRILLADO:\n• Eliminación de la cáscara pergamino\n• Clasificación por tamaño y densidad\n• Selección de granos de alta calidad\n\n ALMACENAMIENTO Y REPOSO:\nEl café verde se almacena en costales de yute en condiciones controladas de humedad y temperatura.\n\n BENEFICIOS DEL REPOSO:\n• Los sabores se estabilizan\n• Se preparan para el tostado\n• Mantiene toda su calidad\n• Maduración natural del grano" 
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
  desc: " TALLER DE PREPARACIÓN (40 min):\n\nLos visitantes aprenderán a preparar su propio café utilizando diferentes métodos:\n\n MÉTODOS DE PREPARACIÓN:\n• Método V60\n• Prensa francesa\n• Cafetera moka\n\n Al final, cada participante preparará y degustará su propia taza de café.\n\n INCLUYE:\n• Materiales y equipos\n• Guía especializado\n• Degustación de su propia preparación" 
},
    { 
  src: "media/tostadoras.mp4", 
  titulo: "🔥 Tostadora", 
  desc: " DEMOSTRACIÓN DE TOSTADO (25 min):\n\nDemostración del proceso de tostado y cómo este proceso realza los sabores y aromas de nuestro café.\n\n PROCESO DE TOSTADO:\n• El grano verde se transforma en café aromático\n• Se desarrollan los sabores y aromas característicos\n• El tiempo y temperatura definen el tipo de tostado\n\n IMPORTANCIA DEL TOSTADO:\n• Es el paso más crítico para desarrollar el aroma y sabor\n• Define la calidad final de la taza de café\n• Un buen tostado resalta las propiedades únicas del grano\n• Sin un tostado adecuado, se pierden los sabores especiales\n\n RESULTADO:\nUn café de especialidad con sabores y aromas únicos del VRAEM." 
},
   { 
  src: "media/PrepararCafeEllosMismos.mp4", 
  titulo: "☕ Preparación Final del Café", 
  desc: " TALLER DE PREPARACIÓN (40 min):\n\nTaller práctico donde los visitantes preparan su propio café en diferentes métodos.\n\n MÉTODOS DE PREPARACIÓN:\n• V60\n• Prensa francesa\n• Moka\n\n QUÉ HARÁN:\n• Seleccionarán su método favorito\n• Medirán las proporciones correctas\n• Controlarán la temperatura del agua\n• Aplicarán las técnicas aprendidas\n\n INCLUYE:\n• Guía especializado\n• Materiales y equipos\n• Degustación de su propia preparación\n\n Disfrutarán de su café recién preparado al final del taller." 
},
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

function getEscala() {
  const fondo = document.getElementById("fondo");
  const rect = fondo.getBoundingClientRect();
  return {
    scaleX: rect.width / 1000,
    scaleY: rect.height / 500
  };
}

function moverA(id) {
  if (animando) return;
  animando = true;

  const longitud = path.getTotalLength();
  const inicio = progresoActual;
  const fin = puntos[id].progreso;

  let start = null;
  const duracion = 1400;

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
      // 🔥 AJUSTE MANUAL PARA CADA PUNTO (modifica estos valores)
      const ajustes = {
        "inicio": { x: 0, y: 0 },
        "carro": { x: -5, y: 0 },
        "finca": { x: -10, y: 0 },
        "final": { x: -12, y: 0 }
      };
      
      const posExacta = cachePos[id];
      if (posExacta) {
        const { scaleX, scaleY } = getEscala();
        // Aplicar ajuste manual
        const ajuste = ajustes[id] || { x: 0, y: 0 };
        personaje.style.left = (posExacta.x * scaleX + ajuste.x) + "px";
        personaje.style.top = (posExacta.y * scaleY + ajuste.y) + "px";
      }
      
      progresoActual = fin;
      puntoActual = id;
      animando = false;
      abrirModal(id);
    }
  }

  requestAnimationFrame(animar);
}

function dibujarPuntos() {
  contenedorPuntos.innerHTML = "";
  const longitud = path.getTotalLength();
  const { scaleX, scaleY } = getEscala();

  for (let id in puntos) {
    const pos = path.getPointAtLength(puntos[id].progreso * longitud);

    cachePos[id] = { x: pos.x, y: pos.y };

    const div = document.createElement("div");
    div.className = "punto";
    div.style.left = (pos.x * scaleX) + "px";
    div.style.top = (pos.y * scaleY) + "px";
    div.onclick = (function(puntoId) {
      return function() {
        if (animando) return;
        moverA(puntoId);
      };
    })(id);

    contenedorPuntos.appendChild(div);
  }
}

// Funciones del carrusel
function mostrarCarrusel(videos) {
  carruselActual = videos;
  carruselIndex = 0;
  carruselActivo = true;
  
  // Mostrar carrusel
  carrusel.style.display = "flex";
  carrusel.style.width = "100%";
  carrusel.style.gap = "8px";
  carrusel.style.alignItems = "center";
  carrusel.style.justifyContent = "center";
  
  // Crear indicadores
  indicadoresDiv.innerHTML = "";
  videos.forEach((_, i) => {
    const indicador = document.createElement("div");
    indicador.className = "indicador";
    if (i === 0) indicador.classList.add("activo");
    indicador.onclick = () => irAlVideo(i);
    indicadoresDiv.appendChild(indicador);
  });
  
  // Mostrar primer video
  actualizarVideoCarrusel();
}

function actualizarVideoCarrusel() {
  if (!carruselActivo || carruselActual.length === 0) return;
  
  const videoData = carruselActual[carruselIndex];
  
  // Crear o actualizar video
  videoContainer.innerHTML = "";
  const video = document.createElement("video");
  video.controls = true;
  video.src = videoData.src;
  video.style.width = "100%";
  video.style.maxHeight = "400px";
  video.style.minHeight = "100%";
  video.style.objectFit = "contain";
  video.style.borderRadius = "12px";
  video.style.border = "3px solid #c8a97e";
  video.style.background = "#1a1a1a";
  video.preload = "auto";
  video.currentTime = 0;
  videoContainer.appendChild(video);
  videoActual = video;
  
  // Actualizar título y descripción según el video
  titulo.textContent = videoData.titulo;
  descripcion.textContent = videoData.desc;
  
  // Actualizar indicadores
  const indicadores = document.querySelectorAll(".indicador");
  indicadores.forEach((ind, i) => {
    if (i === carruselIndex) {
      ind.classList.add("activo");
    } else {
      ind.classList.remove("activo");
    }
  });
  
  // Reproducir video
  setTimeout(() => {
    if (videoActual) {
      videoActual.play().catch(() => {});
    }
  }, 50);
}

function videoSiguiente() {
  if (!carruselActivo) return;
  carruselIndex = (carruselIndex + 1) % carruselActual.length;
  actualizarVideoCarrusel();
}

function videoAnterior() {
  if (!carruselActivo) return;
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

function abrirModal(id) {
  const p = puntos[id];
  
  // Ocultar carrusel por defecto
  ocultarCarrusel();
  
  // Limpiar media anterior
  while (mediaDiv.firstChild) {
    mediaDiv.removeChild(mediaDiv.firstChild);
  }
  
  // Si es carrusel
  if (p.tipo === "carrusel" && p.videos) {
    mediaDiv.appendChild(carrusel);
    mostrarCarrusel(p.videos);
  } 
  // Si es video normal
  else if (p.tipo === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.style.width = "100%";
    video.style.maxWidth = "550px";
    video.style.maxHeight = "420px";
    video.style.minHeight = "250px";
    video.style.objectFit = "contain";
    video.style.borderRadius = "12px";
    video.style.border = "3px solid #c8a97e";
    video.style.background = "#1a1a1a";
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
  else if (p.tipo === "imagen") {
    const img = document.createElement("img");
    img.src = p.media;
    img.style.width = "100%";
    img.style.maxHeight = "250px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "12px";
    img.style.border = "3px solid #c8a97e";
    mediaDiv.appendChild(img);
  }
  
  // Si no es carrusel, actualizar textos normalmente
  if (p.tipo !== "carrusel") {
    titulo.textContent = p.nombre;
    descripcion.textContent = p.info;
  }
  
  // Actualizar botones de opciones
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
  
  // Posicionar modal - CENTRADO para que no se salga
const pos = cachePos[id];
if (pos) {
  const { scaleX, scaleY } = getEscala();
  const mapa = document.getElementById("mapa").getBoundingClientRect();
  
  // Calcular posición centrada
  const modalWidth = 800;
  let leftPos = (pos.x * scaleX + mapa.left) - (modalWidth / 2);
  
  // 🔥 AJUSTES INDIVIDUALES POR PUNTO
  const ajustes = {
    "inicio": -80,
    "carro": -80,
    "finca": -80,
    "final": -400     // Degustación más a la izquierda
  };
  
  // Aplicar el ajuste según el punto
  const ajuste = ajustes[id] || -80;
  leftPos = leftPos + ajuste;
  
  // Evitar que se salga de la pantalla
  leftPos = Math.max(10, Math.min(leftPos, window.innerWidth - modalWidth - 10));
  
  modal.style.left = leftPos + "px";
  modal.style.top = (pos.y * scaleY + mapa.top - 320) + "px";
}

// Mostrar modal
modal.style.display = "block";
}

function cerrarModal() {
  // Detener todos los videos
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
  
  // Ocultar carrusel
  ocultarCarrusel();
  
  // Ocultar modal
  modal.style.display = "none";
}

// Exponer funciones globalmente
window.cerrarModal = cerrarModal;
window.videoSiguiente = videoSiguiente;
window.videoAnterior = videoAnterior;

// Inicialización
window.addEventListener("load", () => {
  let progress = 0;
  const percent = document.getElementById("percent");
  const loader = document.getElementById("loading-screen");
  
  // Asignar eventos de los botones del carrusel
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

// Resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    dibujarPuntos();
    if (puntoActual && puntos[puntoActual] && modal.style.display === "block") {
      const pos = cachePos[puntoActual];
      if (pos) {
        const { scaleX, scaleY } = getEscala();
        const mapa = document.getElementById("mapa").getBoundingClientRect();
        
        const modalWidth = 800;
        let leftPos = (pos.x * scaleX + mapa.left) - (modalWidth / 2);
        
        // 🔥 MISMO AJUSTE EN EL RESIZE
        const ajustes = {
          "inicio": -80,
          "carro": -80,
          "finca": -80,
          "final": -400
        };
        
        const ajuste = ajustes[puntoActual] || -80;
        leftPos = leftPos + ajuste;
        leftPos = Math.max(10, Math.min(leftPos, window.innerWidth - modalWidth - 10));
        
        modal.style.left = leftPos + "px";
        modal.style.top = (pos.y * scaleY + mapa.top - 320) + "px";
      }
    }
  }, 100);
});