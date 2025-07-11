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
      duracion: c.duracion || "3:00",
      url: c.url || "", // debe tener url de audio
    });
  });

  const sumarDuracion = canciones => {
    const totalSegs = canciones.reduce((acc, c) => {
      const [min, seg] = c.duracion.split(":").map(Number);
      return acc + min * 60 + seg;
    }, 0);
    return `${Math.floor(totalSegs / 60)}:${String(totalSegs % 60).padStart(2, "0")}`;
  };

  const [reproduciendo, setReproduciendo] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      {Object.entries(albums).map(([titulo, info]) => {
        const [abierto, setAbierto] = useState(false);
        const toggle = () => setAbierto(!abierto);

        return (
          <section className="album-section" key={titulo}>
            <div
              className="album-header"
              onClick={toggle}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#222",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "5px",
                transition: "background 0.3s",
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
              <span style={{ fontSize: 24, color: "#1db954" }}>
                {abierto ? "▼" : "▶"}
              </span>
            </div>

            {abierto && (
              <div
                className="album-content"
                style={{
                  marginLeft: 70,
                  marginTop: 10,
                  color: "#ccc",
                  transition: "all 0.3s ease-in-out",
                  overflow: "hidden"
                }}
              >
                <ol style={{ paddingLeft: 20 }}>
                  {info.canciones.map((c, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        cursor: "pointer",
                        background: reproduciendo?.titulo === c.titulo ? "#333" : "transparent",
                        borderRadius: 4,
                      }}
                      onClick={() => setReproduciendo(c)}
                    >
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

      {reproduciendo && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#111",
            padding: "10px 20px",
            borderTop: "2px solid #1db954",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            zIndex: 1000
          }}
        >
          <div>
            <strong>Reproduciendo:</strong> {reproduciendo.titulo}
          </div>
          <audio src={reproduciendo.url} controls autoPlay style={{ width: "300px" }} />
          <button
            onClick={() => setReproduciendo(null)}
            style={{
              background: "transparent",
              border: "1px solid #1db954",
              color: "#1db954",
              padding: "6px 12px",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}
