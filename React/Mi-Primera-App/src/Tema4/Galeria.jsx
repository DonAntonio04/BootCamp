const GalleryHeader =({ titulo, subtitulo }) => {
  return (
    <header>
      <h1>{titulo}</h1>
      <h3>{subtitulo}</h3>
    </header>
  );
}

const PhotoCard = ({ titulo, descripcion, ubicacion }) =>{
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <p><em>Ubicación:</em> {ubicacion}</p>
      <hr />
    </div>
  );
}

const Gallery=()=> {
  const tituloGaleria = "Momentos Capturados";
  const subtituloGaleria = "Galería de fotografía profesional";

  const fotos = [
    {
      titulo: "Amanecer en la Montaña",
      descripcion: "Primera luz del día iluminando los picos nevados",
      ubicacion: "Alpes Suizos"
    },
    {
      titulo: "Reflexiones Urbanas",
      descripcion: "Rascacielos reflejados en charcos después de la lluvia",
      ubicacion: "Nueva York"
    },
    {
      titulo: "Vida Marina",
      descripcion: "Coloridos peces tropicales en arrecife de coral",
      ubicacion: "Gran Barrera de Coral"
    },
    {
      titulo: "Bosque Encantado",
      descripcion: "Rayos de sol filtrándose entre árboles centenarios",
      ubicacion: "Selva Negra, Alemania"
    },
    {
      titulo: "Desierto Infinito",
      descripcion: "Dunas doradas extendiéndose hasta el horizonte",
      ubicacion: "Sahara, Marruecos"
    },
    {
      titulo: "Aurora Boreal",
      descripcion: "Luces verdes danzando en el cielo nocturno",
      ubicacion: "Islandia"
    }
  ];

  return (
    <div>
      <GalleryHeader titulo={tituloGaleria} subtitulo={subtituloGaleria} />
      <hr />
      {fotos.map((foto, index) => (
        <PhotoCard
          key={index}
          titulo={foto.titulo}
          descripcion={foto.descripcion}
          ubicacion={foto.ubicacion}
        />
      ))}
    </div>
  );
}

export default Gallery;