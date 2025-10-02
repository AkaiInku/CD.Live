// Instrumentos más vendidos
const instrumentosMasVendidos = [
  { nombre: "PRS SE Silver Sky.", descripcion: "Guitarra Electrica", precio: 3250000, imagen: "SRC/IMG/Intrumentos/PRSSESilverSky.jpg" },
  { nombre: "Kala KA-15S", descripcion: "ukulele", precio: 551000, imagen: "SRC/IMG/Intrumentos/ukelele1.png" },
  { nombre: "SuperstarClassi", descripcion: "Bateria", precio: 851000, imagen: "SRC/IMG/Intrumentos/KalaKA-15S.png" },
   { nombre: "Yamaha F310", descripcion: "guitarra acústica", precio: 930000, imagen: "SRC/IMG/Intrumentos/YamahaF310.png" }
];

// Artistas más vendidos
const artistasMasVendidos = [
  { nombre: "X 100PRE", descripcion: "Bad Bunny", precio: 175000, imagen: "SRC/IMG/Vinilos/X100PRE.jpg" },
  { nombre: "Génesis", descripcion: "Peso Pluma", precio: 72226, imagen: "SRC/IMG/Vinilos/genesis2.png" },
  { nombre: "OK Computer", descripcion: "Radiohead", precio: 250000, imagen: "SRC/IMG/Vinilos/OKComputer.png" },
  { nombre: "Ameri", descripcion: "Duki", precio: 150000, imagen: "SRC/IMG/Vinilos/ameri.png" },
  { nombre: "Hot Pink", descripcion: "Doja Cat", precio: 200000, imagen: "SRC/IMG/Vinilos/HotPink.png" },
  { nombre: "Plastic Beach ", descripcion: "Gorillaz", precio: 218000, imagen: "SRC/IMG/Vinilos/plastibeach.png" },
  { nombre: "That’s the Spirit", descripcion: "BMTH", precio: 259000, imagen: "SRC/IMG/Vinilos/That’sTheSpirit.png" },
  { nombre: "All Eyez on Me", descripcion: "Tu pac", precio: 706600, imagen: "SRC/IMG/Vinilos/AllEyezOnMe.png" },
];


// Función genérica para renderizar cards
function renderCards(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = ""; 

  lista.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <div class="card-body">
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <span class="precio">$${item.precio.toLocaleString("es-CO")}</span>
        <button class="btn-comprar">COMPRAR</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Renderizar cada sección
renderCards(instrumentosMasVendidos, "lista-instrumentos");
renderCards(artistasMasVendidos, "lista-artistas");





// Artistas Destacados , carrucel // 

const contenedorArtistas = document.querySelector(".contenedorArtista");
const artistas = document.querySelectorAll(".contenedorArtista .artista");
const btnIzq = document.querySelector(".btnIsquierda");
const btnDer = document.querySelector(".btnDerecha");

let visible = 5;
let paso = 100 / visible;
let index = visible; // posición inicial tras los clones

// Clonar primeros y últimos para loop infinito
const primeros = [...artistas].slice(0, visible).map(a => a.cloneNode(true));
const ultimos = [...artistas].slice(-visible).map(a => a.cloneNode(true));

primeros.forEach(a => contenedorArtistas.appendChild(a));
ultimos.forEach(a => contenedorArtistas.insertBefore(a, contenedorArtistas.firstChild));

const total = document.querySelectorAll(".contenedorArtista .artista").length;

// Colocar al inicio real
contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;

function moverCarrusel(direccion) {
  index += direccion;
  contenedorArtistas.style.transition = "transform 0.5s ease-in-out";
  contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;

  contenedorArtistas.addEventListener("transitionend", () => {
    if (index >= total - visible) {
      index = visible;
      contenedorArtistas.style.transition = "none";
      contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;
    }
    if (index < visible) {
      index = total - (visible * 2);
      contenedorArtistas.style.transition = "none";
      contenedorArtistas.style.transform = `translateX(-${index * paso}%)`;
    }
  }, { once: true });
}

btnDer.addEventListener("click", () => moverCarrusel(1));
btnIzq.addEventListener("click", () => moverCarrusel(-1));
