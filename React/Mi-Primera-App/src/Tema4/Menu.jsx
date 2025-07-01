const RestaurantInfo =({ nombre, descripcion, direccion, telefono })=> {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <p><strong>Dirección:</strong> {direccion}</p>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <hr />
    </div>
  );
}

const MenuItem = ({ nombre, descripcion, precio, ingredientes }) => {
  return (
    <div>
      <h3>{nombre} — €{precio}</h3>
      <p>{descripcion}</p>
      <p><em>Ingredientes:</em> {ingredientes}</p>
      <br />
    </div>
  );
}

const MenuSection = ({ titulo, platos }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      {platos.map((plato, index) => (
        <MenuItem
          key={index}
          nombre={plato.nombre}
          descripcion={plato.descripcion}
          precio={plato.precio}
          ingredientes={plato.ingredientes}
        />
      ))}
      <hr />
    </div>
  );
}

const RestaurantMenu = () => {
  const nombreRestaurante = "La Cocina de María";
  const descripcionRestaurante = "Cocina tradicional española con toque moderno";
  const direccion = "Calle Mayor 123, Madrid";
  const telefono = "+34 91 123 4567";

  const entrantes = [
    { nombre: "Jamón Ibérico", descripcion: "Jamón de bellota cortado a mano", precio: 18, ingredientes: "Jamón ibérico, pan tostado, tomate" },
    { nombre: "Croquetas de Jamón", descripcion: "Croquetas caseras cremosas", precio: 12, ingredientes: "Jamón serrano, bechamel, pan rallado" },
    { nombre: "Gazpacho Andaluz", descripcion: "Sopa fría de verduras", precio: 8, ingredientes: "Tomate, pepino, pimiento, ajo, aceite" },
    { nombre: "Patatas Bravas", descripcion: "Patatas fritas con salsa picante", precio: 9, ingredientes: "Patatas, salsa brava, alioli" }
  ];

  const principales = [
    { nombre: "Paella Valenciana", descripcion: "Paella tradicional con pollo y verduras", precio: 22, ingredientes: "Arroz, pollo, judías, pimiento" },
    { nombre: "Cordero Asado", descripcion: "Cordero al horno con hierbas", precio: 28, ingredientes: "Cordero, romero, ajo, patatas" },
    { nombre: "Merluza a la Plancha", descripcion: "Pescado fresco con verduras", precio: 24, ingredientes: "Merluza, espárragos, limón" },
    { nombre: "Cocido Madrileño", descripcion: "Plato tradicional de garbanzos", precio: 19, ingredientes: "Garbanzos, chorizo, morcilla, verduras" }
  ];

  const postres = [
    { nombre: "Flan Casero", descripcion: "Flan tradicional con caramelo", precio: 6, ingredientes: "Huevos, leche, azúcar, vainilla" },
    { nombre: "Tarta de Santiago", descripcion: "Tarta de almendra gallega", precio: 7, ingredientes: "Almendras, huevos, azúcar, limón" },
    { nombre: "Crema Catalana", descripcion: "Crema quemada con canela", precio: 6, ingredientes: "Nata, yemas, azúcar, canela" },
    { nombre: "Torrijas", descripcion: "Pan frito con miel y canela", precio: 5, ingredientes: "Pan, leche, huevo, miel, canela" }
  ];

  return (
    <div>
      <RestaurantInfo
        nombre={nombreRestaurante}
        descripcion={descripcionRestaurante}
        direccion={direccion}
        telefono={telefono}
      />
      <MenuSection titulo="Entrantes" platos={entrantes} />
      <MenuSection titulo="Platos Principales" platos={principales} />
      <MenuSection titulo="Postres" platos={postres} />
    </div>
  );
}

export default RestaurantMenu;