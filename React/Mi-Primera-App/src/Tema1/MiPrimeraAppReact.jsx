
import { useState, useEffect } from "react";

function Perfil() {
  const nombre = "Ana García";
  const edad = 25;
  const ciudad = "Madrid";
  const profesion = "Desarrolladora Frontend";
  const pasatiempos = ["leer", "programar", "viajar"];
  const colorFavorito = "azul";

  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card">
      <h1>¡Bienvenida, {nombre}!</h1>
      <p>Edad: {edad} años</p>
      <p>Ciudad: {ciudad}</p>
      <p>Profesión: {profesion}</p>
      <p>Pasatiempos:</p>
      <ul>
        {pasatiempos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Color favorito: {colorFavorito}</p>
      <p>Fecha y hora actual:</p>
      <p>{fecha.toLocaleString()}</p>
    </div>
  );
}

export default Perfil;
