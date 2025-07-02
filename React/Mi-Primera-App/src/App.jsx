import { useState } from "react";
import Menu from "./Menu";
import Header from "./Tema2/Header";
import About from "./Tema2/About";
import Contact from "./Tema2/Contact";
import Footer from "./Tema2/Footer";

import MiPrimeraApp from "./Tema1/MiPrimeraAppReact";
import CalculadoraPersonal from "./Tema1/CalculadoraPersonal ";
import ListaPeliculas from "./Tema3/ListaPeliculas";
import ProcesadorLibros from "./Tema3/ProcesadorDeLibros";
import Gallery from "./Tema4/Galeria";
import RestaurantMenu from "./Tema4/Menu";
import EmpleosList from "./Tema5/Empleos";
import ProductosTienda from "./Tema5/TiendaProductos";
import DashBoard from "./Tema1/Dashboard";


const App = () => {
  const [ejercicio, setEjercicio] = useState(null);

  const renderContenido = () => {
    switch (ejercicio) {
      case "ej1":
        return <MiPrimeraApp />;
      case "ej2":
        return <CalculadoraPersonal />;
      case "ej3":
        return <ListaPeliculas />;
      case "ej4":
        return <ProcesadorLibros />;
      case "ej5":
        return <Gallery />;
      case "ej6":
        return <RestaurantMenu />;
      case "ej7":
        return <EmpleosList />;
      case "ej8":
        return <ProductosTienda />;
        case "ej9":
      return <Header />;
    case "ej10":
      return <About />;
    case "ej11":
      return <Contact />;
    case "ej12":
      return <Footer />;
    case "ej13":
      return <DashBoard />;
      default:
        return <p style={{ padding: "1rem" }}>Selecciona un ejercicio del menú</p>;
    }
  };

  return (
    <div>
      <Menu seleccionar={setEjercicio} />
      <div style={{ padding: "1rem" }}>
        {renderContenido()}
      </div>
    </div>
  );
};

export default App;
