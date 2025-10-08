const Instrumentos = [
  { nombre: "Taylor", descripcion: "214ce Walnut / Spruce", precio: 5900000, imagen: "SRC/IMG/Intrumentos/logoCuerda.png", categoria: "cuerda" },
  { nombre: "DZ Strad Violín", descripcion: "Modelo 500", precio: 13800000, imagen: "SRC/IMG/Intrumentos/ukelele1.png", categoria: "cuerda" },
  { nombre: "Cordoba", descripcion: "C1M Clasica", precio: 750000, imagen: "SRC/IMG/Intrumentos/KalaKA-15S.png", categoria: "cuerda" },
  { nombre: "Yamaha", descripcion: "YFL-SV250BR", precio: 6600000, imagen: "SRC/IMG/Intrumentos/logoViento.png", categoria: "cuerda" },
  { nombre: "Satin Turquoise", descripcion: "SE CE-24 Standard", precio: 2800000, imagen: "SRC/IMG/Intrumentos/logoViento.png", categoria: "cuerda" },
  { nombre: "Ibanez", descripcion: "AEG70 Vintage", precio: 1880000, imagen: "SRC/IMG/Intrumentos/logoPercusion.png", categoria: "cuerda" },
  { nombre: "Cremona", descripcion: "SV-500 4/4", precio: 1950000, imagen: "SRC/IMG/Intrumentos/logoPercusion.png", categoria: "cuerda" },
  { nombre: "Yamaha", descripcion: "C40", precio: 580000, imagen: "SRC/IMG/Intrumentos/PRSSESilverSky.jpg", categoria: "cuerda" },
  { nombre: "Yamaha", descripcion: "CX40", precio: 930000, imagen: "SRC/IMG/Intrumentos/logoElectricos.png", categoria: "cuerda" },
  { nombre: "Ukelele Diamond Head", descripcion: "DU-200C", precio: 244350, imagen: "SRC/IMG/Intrumentos/logoElectricos.png", categoria: "cuerda" }
];




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

renderCards(Instrumentos, "lista-Instrumentos");

// Función para filtrar y mostrar tarjetas por categoría
function mostrarPorCategoria(categoria) {
  const filtrados = Instrumentos.filter(item => item.categoria === categoria);
  renderCards(filtrados, "lista-Instrumentos");
}

// Agrega listeners a las imágenes de categoría
document.querySelectorAll('.producto').forEach(producto => {
  producto.addEventListener('click', function() {
    const categoria = this.getAttribute('data-categoria');
    mostrarPorCategoria(categoria);
  });
});

// Mostrar todos por defecto al cargar
renderCards(Instrumentos, "lista-Instrumentos");