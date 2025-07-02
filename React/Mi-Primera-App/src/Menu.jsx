import React from "react";
import "./App.css"; 

const Menu = ({ seleccionar }) => {
  return (
    <nav className="menu">
      <div className="menu-section">
        <div className="menu-header">Tema 1</div>
        <div className="menu-buttons">
          <button onClick={() => seleccionar("ej1")}>Mi Primera App</button>
          <button onClick={() => seleccionar("ej2")}>Calculadora Personal</button>
          <button onClick={() => seleccionar("ej13")}>Dashboard</button>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header">Tema 2</div>
        <div className="menu-buttons">
          <button onClick={() => seleccionar("ej9")}>Header</button>
          <button onClick={() => seleccionar("ej10")}>About</button>
          <button onClick={() => seleccionar("ej11")}>Contact</button>
          <button onClick={() => seleccionar("ej12")}>Footer</button>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header">Tema 3</div>
        <div className="menu-buttons">
          <button onClick={() => seleccionar("ej3")}>Películas</button>
          <button onClick={() => seleccionar("ej4")}>Libros</button>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header">Tema 4</div>
        <div className="menu-buttons">
          <button onClick={() => seleccionar("ej5")}>Galería</button>
          <button onClick={() => seleccionar("ej6")}>Menú Restaurante</button>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header">Tema 5</div>
        <div className="menu-buttons">
          <button onClick={() => seleccionar("ej7")}>Empleados</button>
          <button onClick={() => seleccionar("ej8")}>Tienda de Productos</button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
