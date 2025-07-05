

function UsuarioInfoAntes(props) {
  return (
    <div>
      <h2>{props.usuario.nombre}</h2>
      <p>Edad: {props.usuario.edad}</p>
      <p>Ciudad: {props.usuario.direccion.ciudad}</p>
      <p>Hobbies: {props.usuario.hobbies.join(", ")}</p>
    </div>
  );
}

function UsuarioInfoDespues({
  usuario: {
    nombre,
    edad,
    direccion: { calle, ciudad = "Ciudad desconocida", codigoPostal },
    hobbies = []
  }
}) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Dirección: {calle}, {ciudad} ({codigoPostal})</p>
      <p>Hobbies: {hobbies.length ? hobbies.join(", ") : "Sin hobbies"}</p>
    </div>
  );
}


const usuario = {
  nombre: "Antonio",
  edad: 28,
  direccion: {
    calle: "Gran Vía 123",
    ciudad: "Madrid",
    codigoPostal: "28013"
  },
  hobbies: ["programar", "leer", "viajar"]
};

const Desestructuracion = () => (
  <div>
    <h1>Antes (sin desestructuración)</h1>
    <UsuarioInfoAntes usuario={usuario} />
    <h1>Después (con desestructuración)</h1>
    <UsuarioInfoDespues usuario={usuario} />
  </div>
);

export default Desestructuracion;