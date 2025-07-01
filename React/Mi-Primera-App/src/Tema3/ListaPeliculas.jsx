const ListaPeliculas =() => {
  const peliculas = [
    { titulo: "El Padrino", año: 1972 },
    { titulo: "Pulp Fiction", año: 1994 },
    { titulo: "El Señor de los Anillos", año: 2001 },
    { titulo: "Matrix", año: 1999 },
    { titulo: "Inception", año: 2010 }
  ];

  const sumaAnios = peliculas.reduce((total, peli) => total + peli.año, 0);
  const promedio = Math.round(sumaAnios / peliculas.length);

  return (
    <div>
      <h2>🎬 Mis Películas Favoritas</h2>
      <hr />
      {peliculas.map((peli, index) => (
        <div key={index}>
          {peli.titulo} ({peli.año})<br />
        </div>
      ))}
      <hr />
      <p>📊 Promedio de años: <strong>{promedio}</strong></p>
    </div>
  );
}

export default ListaPeliculas;