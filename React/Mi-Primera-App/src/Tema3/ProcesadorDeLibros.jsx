
const ProcesadorLibros =() => {
  const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417, genero: "Realismo mágico" },
    { titulo: "1984", autor: "George Orwell", paginas: 328, genero: "Distopía" },
    { titulo: "El Quijote", autor: "Miguel de Cervantes", paginas: 863, genero: "Clásico" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249, genero: "Distopía" },
    { titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 124, genero: "Realismo mágico" },
    { titulo: "Dune", autor: "Frank Herbert", paginas: 688, genero: "Ciencia ficción" }
  ];

  // paginas totales 
  const totalPaginas = libros.reduce((acc, libro) => acc + libro.paginas, 0);

  // promedio
  const promedioPaginas = Math.round(totalPaginas / libros.length);

  // conteo de generos 
  const conteoGeneros = libros.reduce((acc, libro) => {
    acc[libro.genero] = (acc[libro.genero] || 0) + 1;
    return acc;
  }, {});

  // genero mas comun
  const generoMasComun = Object.keys(conteoGeneros).reduce((a, b) =>
    conteoGeneros[a] > conteoGeneros[b] ? a : b
  );

  // recomendaciones por genero
  const recomendaciones = libros.filter(libro => libro.genero === generoMasComun);

  return (
    <div>
      <h2> Lista de Libros</h2>
      <ul>
        {libros.map((libro, index) => (
          <li key={index}>
            "{libro.titulo}" por {libro.autor} — {libro.paginas} páginas ({libro.genero})
          </li>
        ))}
      </ul>

      <hr />

      <p><strong>Total de páginas:</strong> {totalPaginas}</p>
      <p><strong>Promedio de páginas:</strong> {promedioPaginas}</p>
      <p><strong>Género más común:</strong> {generoMasComun}</p>

      <hr />

      <h3> Recomendaciones ({generoMasComun}):</h3>
      <ul>
        {recomendaciones.map((libro, index) => (
          <li key={index}>
            {libro.titulo} ({libro.paginas} páginas)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProcesadorLibros;
