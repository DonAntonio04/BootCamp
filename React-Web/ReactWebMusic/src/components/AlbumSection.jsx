import { useState, useEffect } from "react";
import AlbumDetail from "./AlbumDetail";

export default function AlbumSection({ canciones, onTrackSelect }) {
  const [albums, setAlbums] = useState({});
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const organizedAlbums = {};
    
    canciones.forEach(c => {
      const titulo = c.albumCompleto?.titulo || "Sin Álbum";
      if (!organizedAlbums[titulo]) {
        organizedAlbums[titulo] = {
          titulo: titulo,
          portada: c.albumCompleto?.portada,
          artista: c.artista || "Artista desconocido",
          año: c.albumCompleto?.año || "",
          canciones: []
        };
      }
      organizedAlbums[titulo].canciones.push(c);
    });
    
    setAlbums(organizedAlbums);
  }, [canciones]);

  return (
    <div className="album-section-container">
      <div className="album-grid">
        {Object.values(albums).map((album, index) => (
          <div 
            key={index}
            className="album-card"
            onClick={() => setSelectedAlbum(album)}
          >
            {album.portada ? (
              <img
                src={album.portada}
                alt={album.titulo}
                className="album-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300';
                  e.target.onerror = null;
                }}
              />
            ) : (
              <div className="album-cover-placeholder">
                <span>No Image</span>
              </div>
            )}
            <h3 className="album-title">{album.titulo}</h3>
            <p className="album-artist">{album.artista}</p>
          </div>
        ))}
      </div>

      {selectedAlbum && (
        <AlbumDetail 
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
          onTrackSelect={onTrackSelect}
        />
      )}
    </div>
  );
}