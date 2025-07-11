import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SearchSection from "./components/SearchSection";
import Player from "./components/Player";
import "./styles/styles.css";

function App() {
  const [canciones, setCanciones] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [cancionActual, setCancionActual] = useState(null);

  useEffect(() => {
    fetch("https://api-musica.netlify.app/api/canciones")
      .then((res) => res.json())
      .then((data) => {
        if (!data || !Array.isArray(data.data)) throw new Error("Formato inesperado");

        const cancionesConUrl = data.data.map((c, i) => ({
          ...c,
          url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(i % 10) + 1}.mp3`,
        }));

        setCanciones(cancionesConUrl);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setCanciones([]);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  const resultados = canciones.filter((c) =>
    c.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.artista.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.albumCompleto?.titulo?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <section className="search-section">
          <h2>Buscar Canciones o Artistas</h2>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por canción o artista..."
            style={{ width: "100%", padding: "10px", fontSize: "16px", margin: "10px 0", borderRadius: "5px", border: "none" }}
          />

          {cargando && <p style={{ color: "white" }}>Cargando música...</p>}
          {error && <p style={{ color: "red", marginTop: "10px" }}>❌ No se pudo conectar a la API. Intenta más tarde.</p>}
          {!cargando && canciones.length === 0 && <p style={{ color: "white" }}>No hay canciones disponibles.</p>}
          {!cargando && canciones.length > 0 && (
            <SearchSection canciones={busqueda ? resultados : canciones} onSeleccionarCancion={setCancionActual} />
          )}
        </section>
      </main>
      <Player cancion={cancionActual} onCerrar={() => setCancionActual(null)} />
    </div>
  );
}

export default App;
