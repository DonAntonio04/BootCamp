import Header from "./Tema2/Header"
import Contact from "./Tema2/Contact"
import About from "./Tema2/About"
import Footer from "./Tema2/Footer"
import MiPrimeraApp from "./Tema1/MiPrimeraAppReact"
import CalculadoraPeronal from "./Tema1/CalculadoraPersonal "
import ListaPeliculas from "./Tema3/ListaPeliculas"
import ProcesadorLibros from "./Tema3/ProcesadorDeLibros"
import Gallery from "./Tema4/Galeria"
import RestaurantMenu from "./Tema4/Menu"
import EmpleosList from "./Tema5/Empleos"
import ProductosTienda from "./Tema5/TiendaProductos"

//TEMA 1:
/*
const App = () =>{
  return (
    <div>
      <MiPrimeraApp />
      <CalculadoraPeronal/>
    </div>
  );
}
*/


//Tema 2:
/*const App = () => {
  return (
    <div>
      <About/>
      <Contact/>
      <Footer/>
      <Header/>
    </div>
  )
}*/

//TEMA 2:

/*
const proyectos = [
  { nombre: "E-commerce App", tecnologia: "React + Node.js", descripcion: "Tienda online completa" },
  { nombre: "Dashboard Analytics", tecnologia: "React + D3.js", descripcion: "Panel de métricas" },
  { nombre: "Chat en Tiempo Real", tecnologia: "React + Socket.io", descripcion: "Aplicación de chat" }
];

const habilidades = ["JavaScript", "React", "Node.js", "CSS", "Git", "MongoDB", "Express"];

const redesSociales = [
  { nombre: "GitHub", url: "https://github.com/usuario" },
  { nombre: "LinkedIn", url: "https://linkedin.com/in/usuario" },
  { nombre: "Twitter", url: "https://twitter.com/usuario" }
];



const NavBar =() => {
  return (
    <nav className="navbar">
      <h1>Mi Portafolio</h1>
      <ul>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

const ProjectCard =({ nombre, tecnologia, descripcion }) => {
  return (
    <div className="project-card">
      <h3>{nombre}</h3>
      <p><strong>Tecnologías:</strong> {tecnologia}</p>
      <p>{descripcion}</p>
    </div>
  );
}

const SkillBadge =({ habilidad }) =>{
  return <span className="skill-badge">{habilidad}</span>;
}

function SocialLinks({ redes }) {
  return (
    <div className="social-links">
      {redes.map((red, index) => (
        <a key={index} href={red.url} target="_blank" rel="noreferrer">{red.nombre}</a>
      ))}
    </div>
  );
}



const App =() => {
  return (
    <div>
      <NavBar />

      <section id="proyectos">
        <h2>Proyectos</h2>
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            nombre={proyecto.nombre}
            tecnologia={proyecto.tecnologia}
            descripcion={proyecto.descripcion}
          />
        ))}
      </section>

      <section id="habilidades">
        <h2>Habilidades</h2>
        {habilidades.map((habilidad, index) => (
          <SkillBadge key={index} habilidad={habilidad} />
        ))}
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <SocialLinks redes={redesSociales} />
      </section>
    </div>
  );
}*/

//TEMA 3:

/*
const App = ()=> {
  return (
    <div>
      <ListaPeliculas />
      <ProcesadorLibros />
    </div>
  );
}
*/

// TEMA 4:
/*
const App =() => {
  return (
    <div>
      <Gallery />
      <RestaurantMenu/>
    </div>
  );
}
*/

const App = () => {
  return (
    <div>
      <EmpleosList/>
      <ProductosTienda/>
    </div>
  )
}

export default App;

