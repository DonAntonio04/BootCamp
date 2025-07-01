import React from "react";

const Menu = ({ seleccionar }) => {
  return (
    <nav style={{ backgroundColor: "#222", padding: "1rem", color: "#fff" }}>
      <h3>Tema 1</h3>
      <button onClick={() => seleccionar("ej1")}>Mi Primera App</button>
      <button onClick={() => seleccionar("ej2")}>Calculadora Personal</button>

      <h3>Tema 2</h3>
      <button onClick={() => seleccionar("ej9")}>Header</button>
      <button onClick={() => seleccionar("ej10")}>About</button>
      <button onClick={() => seleccionar("ej11")}>Contact</button>
      <button onClick={() => seleccionar("ej12")}>Footer</button>

      <h3>Tema 3</h3>
      <button onClick={() => seleccionar("ej3")}>Películas</button>
      <button onClick={() => seleccionar("ej4")}>Libros</button>

      <h3>Tema 4</h3>
      <button onClick={() => seleccionar("ej5")}>Galería</button>
      <button onClick={() => seleccionar("ej6")}>Menú Restaurante</button>

      <h3>Tema 5</h3>
      <button onClick={() => seleccionar("ej7")}>Empleados</button>
      <button onClick={() => seleccionar("ej8")}>Tienda de Productos</button>
    </nav>
  );
};

export default Menu;
