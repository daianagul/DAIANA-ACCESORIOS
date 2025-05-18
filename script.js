const productos = [
    { nombre: "Moño Rosa", precio: 1200, imagen: "img/mono1.jpg" },
    { nombre: "Moño Azul", precio: 1300, imagen: "img/mono2.jpg" },
  ];
  
  const contenedor = document.getElementById("lista-productos");
  
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" width="150">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
  
  const carrito = [];
  
  function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    alert(`${nombre} fue agregado al carrito.`);
    console.log(carrito);
  }