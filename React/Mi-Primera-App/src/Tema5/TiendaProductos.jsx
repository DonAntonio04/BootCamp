const Productos = ({ producto }) => {
  const { nombre, precio, descuento, categoria } = producto;
  const precioFinal = precio * (1 - descuento / 100);

  return (
    <div>
      <h4>{nombre}</h4>
      <p>Precio original: €{precio}</p>
      <p>Descuento: {descuento}%</p>
      <p><strong>Precio final: €{precioFinal.toFixed(2)}</strong></p>
      <p><em>Categoría: {categoria}</em></p>
      <br />
    </div>
  );
}

const Categoria = ({ nombreCategoria, productos }) => {
  return (
    <div>
      <h2>{nombreCategoria}</h2>
      {productos.map((producto, index) => (
        <Productos key={index} producto={producto} />
      ))}
      <hr />
    </div>
  );
}

function ProductosTienda() {
  const productos = [

    { nombre: "iPhone 15", precio: 999, descuento: 10, categoria: "Electrónicos" },
    { nombre: "MacBook Air", precio: 1299, descuento: 15, categoria: "Electrónicos" },
    { nombre: "AirPods Pro", precio: 249, descuento: 20, categoria: "Electrónicos" },
    { nombre: "iPad Air", precio: 599, descuento: 5, categoria: "Electrónicos" },
    

    { nombre: "Camiseta Premium", precio: 29, descuento: 25, categoria: "Ropa" },
    { nombre: "Jeans Clásicos", precio: 79, descuento: 30, categoria: "Ropa" },
    { nombre: "Chaqueta de Cuero", precio: 199, descuento: 15, categoria: "Ropa" },
    { nombre: "Zapatillas Deportivas", precio: 89, descuento: 20, categoria: "Ropa" },
    

    { nombre: "Sofá Moderno", precio: 899, descuento: 25, categoria: "Hogar" },
    { nombre: "Mesa de Comedor", precio: 449, descuento: 10, categoria: "Hogar" },
    { nombre: "Lámpara LED", precio: 69, descuento: 15, categoria: "Hogar" },
    { nombre: "Alfombra Persa", precio: 299, descuento: 30, categoria: "Hogar" }
  ];


  const categorias = ["Electrónicos", "Ropa", "Hogar"];

  return (
    <div>
      <h1> Tienda Online</h1>
      {categorias.map((categoria, index) => {
        const productosFiltrados = productos.filter(p => p.categoria === categoria);
        return (
          <Categoria
            key={index}
            nombreCategoria={categoria}
            productos={productosFiltrados}
          />
        );
      })}
    </div>
  );
}

export default ProductosTienda;