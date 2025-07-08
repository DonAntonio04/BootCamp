import { useState } from "react";

export default function AlbumSection({ canciones }) {
  const albums = {};

  canciones.forEach(c => {
    const titulo = c.albumCompleto?.titulo || "Sin Álbum";
    if (!albums[titulo]) {
      albums[titulo] = {
        portada: c.albumCompleto?.portada,
        canciones: []
      };
    }
    albums[titulo].canciones.push({
      titulo: c.titulo,
      duracion: c.duracion || "3:00"
    });
  });

  const sumarDuracion = canciones => {
    const totalSegs = canciones.reduce((acc, c) => {
      const [min, seg] = c.duracion.split(":").map(Number);
      return acc + min * 60 + seg;
    }, 0);
    return `${Math.floor(totalSegs / 60)}:${String(totalSegs % 60).padStart(2, "0")}`;
  };

  return (
    <>
      {Object.entries(albums).map(([titulo, info]) => {
        const [abierto, setAbierto] = useState(false);
        const toggle = () => setAbierto(!abierto);

        return (
          <section className="album-section" key={titulo}>
            <div
              className="album-header"
              onClick={toggle}
              style={{
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "space-between", background: "#222",
                padding: "10px", borderRadius: "8px", marginBottom: "5px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {info.portada && (
                  <img
                    src={info.portada}
                    alt={titulo}
                    style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 6 }}
                  />
                )}
                <h3 style={{ margin: 0, color: "white" }}>{titulo}</h3>
              </div>
              <span className="toggle-icon" style={{ fontSize: 24, color: "#1db954" }}>
                {abierto ? "▼" : "▶"}
              </span>
            </div>
            {abierto && (
              <div className="album-content" style={{ marginLeft: 70, marginTop: 10, color: "#ccc" }}>
                <ol style={{ paddingLeft: 20 }}>
                  {info.canciones.map((c, i) => (
                    <li key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                      <span>{i + 1} - {c.titulo}</span>
                      <span>{c.duracion}</span>
                    </li>
                  ))}
                </ol>
                <p style={{ textAlign: "right", fontWeight: "bold" }}>
                  Duración total: {sumarDuracion(info.canciones)}
                </p>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
