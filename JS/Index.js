const productos = [
  {
    nombre: "Ukulele Soprano Uk‑21k Kalany",
    descripcion: "Álbum de RadioHead NUEVO en formato Vinilo",
    precio: "$200.000",
    imagen: "SRC/IMG/Intrumentos/Ukelele.png"
  },
  {
    nombre: "Abbey Road",
    descripcion: "Álbum clásico de The Beatles en vinilo",
    precio: "$250.000",
    imagen: "img/abbeyroad.jpg"
  },
  {
    nombre: "Thriller",
    descripcion: "Álbum de Michael Jackson en vinilo",
    precio: "$220.000",
    imagen: "img/thriller.jpg"
  },
  {
    nombre: "Dark Side of the Moon",
    descripcion: "Vinilo legendario de Pink Floyd",
    precio: "$300.000",
    imagen: "img/darkside.jpg"
  }
];

const contenedor = document.getElementById("lista-vendidos");

productos.forEach(producto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <div class="card-body">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <span class="precio">${producto.precio}</span>
      <button class="btn-comprar">COMPRAR</button>
    </div>
  `;

  card.querySelector(".btn-comprar").addEventListener("click", () => {
    alert(`${producto.nombre} añadido al carrito 🛒`);
  });

  contenedor.appendChild(card);
});
