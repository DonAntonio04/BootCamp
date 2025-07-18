import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AlbumSection from "./components/AlbumSection";
import Player from "./components/Player";
import "./styles/styles.css";

function App() {
  const [canciones, setCanciones] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [cancionActual, setCancionActual] = useState(null);
  const [albumActual, setAlbumActual] = useState(null);

  useEffect(() => {
    fetch("https://api-musica.netlify.app/api/canciones")
      .then((res) => res.json())
      .then((data) => {
        if (!data || !Array.isArray(data.data)) throw new Error("Formato inesperado");

        const cancionesConUrl = data.data.map((c, i) => ({
          ...c,
          id: i,
          url: `https://api-musica.netlify.app/${c.audio}`,
          albumCompleto: {
            ...c.albumCompleto,
            portada: c.albumCompleto?.portada 
              ? `https://api-musica.netlify.app/${c.albumCompleto.portada}`
              : null
          }
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

  const resultados = busqueda
    ? canciones.filter((c) =>
        c.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.artista.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.albumCompleto?.titulo?.toLowerCase().includes(busqueda.toLowerCase())
      )
    : canciones;

  const handleTrackSelect = (track) => {
    setCancionActual(track);
    // Encontrar el álbum al que pertenece la canción
    const album = Object.values(
      resultados.reduce((acc, c) => {
        const albumTitulo = c.albumCompleto?.titulo || "Sin Álbum";
        if (!acc[albumTitulo]) {
          acc[albumTitulo] = {
            titulo: albumTitulo,
            portada: c.albumCompleto?.portada,
            artista: c.artista || "Artista desconocido",
            año: c.albumCompleto?.año || "",
            canciones: []
          };
        }
        acc[albumTitulo].canciones.push(c);
        return acc;
      }, {})
    ).find(a => a.canciones.some(c => c.id === track.id));
    
    setAlbumActual(album);
  };

  const handlePlayAlbum = (album) => {
    if (album?.canciones?.length > 0) {
      const trackToPlay = album.canciones[0];
      handleTrackSelect(trackToPlay);
    }
  };

  const handleNextTrack = () => {
    if (!cancionActual || !albumActual) return;

    const currentIndex = albumActual.canciones.findIndex(c => c.id === cancionActual.id);
    const nextIndex = (currentIndex + 1) % albumActual.canciones.length;
    setCancionActual(albumActual.canciones[nextIndex]);
  };

  const handlePreviousTrack = () => {
    if (!cancionActual || !albumActual) return;

    const currentIndex = albumActual.canciones.findIndex(c => c.id === cancionActual.id);
    const prevIndex = (currentIndex - 1 + albumActual.canciones.length) % albumActual.canciones.length;
    setCancionActual(albumActual.canciones[prevIndex]);
  };

  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <section className="search-section">
          <h2 style={{
            color: '#fff',
            fontSize: '24px',
            marginBottom: '20px'
          }}>Buscar Canciones o Artistas</h2>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por canción o artista..."
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#282828',
              color: '#fff',
              fontSize: '16px',
              marginBottom: '20px',
              '::placeholder': {
                color: '#b3b3b3'
              }
            }}
          />

          {cargando && (
            <p style={{
              color: '#fff',
              textAlign: 'center',
              padding: '40px 0'
            }}>Cargando música...</p>
          )}
          
          {error && (
            <p style={{
              color: '#ff4d4d',
              textAlign: 'center',
              padding: '40px 0'
            }}>❌ No se pudo conectar a la API. Intenta más tarde.</p>
          )}
          
          {!cargando && canciones.length === 0 && !error && (
            <p style={{
              color: '#b3b3b3',
              textAlign: 'center',
              padding: '40px 0'
            }}>No hay canciones disponibles.</p>
          )}
          
          {!cargando && canciones.length > 0 && (
            <AlbumSection 
              canciones={resultados} 
              onTrackSelect={handleTrackSelect}
              currentTrack={cancionActual}
              onPlayAlbum={handlePlayAlbum}
            />
          )}
        </section>
      </main>
      
      <Player 
        cancion={cancionActual} 
        onCerrar={() => setCancionActual(null)}
        onNext={handleNextTrack}
        onPrevious={handlePreviousTrack}
      />
    </div>
  );
}

export default App;