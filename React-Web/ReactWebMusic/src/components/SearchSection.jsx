export default function SearchSection({ canciones, onSeleccionarCancion }) {
  const albumsMap = {};

  canciones.forEach((cancion) => {
    const albumTitulo = cancion.albumCompleto?.titulo || "Sin Álbum";
    if (!albumsMap[albumTitulo]) {
      albumsMap[albumTitulo] = {
        portada: cancion.albumCompleto?.portada,
        canciones: [],
      };
    }
    albumsMap[albumTitulo].canciones.push(cancion);
  });

  return (
    <div id="searchResults">
      {Object.entries(albumsMap).map(([titulo, info], idx) => (
        <section className="album-section" key={idx}>
          <div
            className="album-header"
            style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#222", padding: "10px", borderRadius: "8px", marginBottom: "5px" }}
            onClick={() => {
              const content = document.getElementById(`album-content-${idx}`);
              const icon = document.getElementById(`toggle-icon-${idx}`);
              if (content.style.display === "none") {
                content.style.display = "block";
                icon.innerHTML = "▼";
              } else {
                content.style.display = "none";
                icon.innerHTML = "▶";
              }
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {info.portada && (
                <img
                  src={`https://api-musica.netlify.app/${info.portada}`}
                  alt={titulo}
                  style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
                />
              )}
              <h3 style={{ margin: 0, color: "white" }}>{titulo}</h3>
            </div>
            <span className="toggle-icon" id={`toggle-icon-${idx}`} style={{ fontSize: "24px", color: "#1db954" }}>▶</span>
          </div>
          <div id={`album-content-${idx}`} style={{ display: "none", marginLeft: "70px", marginTop: "10px", color: "#ccc" }}>
            <ol style={{ paddingLeft: "20px" }}>
              {info.canciones.map((c, i) => (
                <li
                  key={i}
                  onClick={() => onSeleccionarCancion(c)}
                  style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", cursor: "pointer", borderBottom: "1px solid #444" }}
                >
                  <span>{i + 1} - {c.titulo}</span>
                  <span>{c.duracion}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}
    </div>
  );
}