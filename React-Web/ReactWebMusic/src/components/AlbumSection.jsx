import { useState, useEffect } from "react";
import AlbumDetail from "./AlbumDetail";

export default function AlbumSection({ canciones, onTrackSelect, currentTrack, onPlayAlbum }) {
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
    <div style={{
      padding: '20px',
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: '#fff'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px',
        padding: '20px 0'
      }}>
        {Object.values(albums).map((album, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#181818',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#282828',
                transform: 'scale(1.03)'
              }
            }}
            onClick={() => {
              setSelectedAlbum(album);
              onPlayAlbum(album);
            }}
          >
            {album.portada ? (
              <img
                src={album.portada}
                alt={album.titulo}
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300';
                  e.target.onerror = null;
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                backgroundColor: '#282828',
                borderRadius: '4px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#b3b3b3'
              }}>
                <span>No Image</span>
              </div>
            )}
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '16px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{album.titulo}</h3>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#b3b3b3',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{album.artista}</p>
          </div>
        ))}
      </div>

      {selectedAlbum && (
        <AlbumDetail 
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
          onTrackSelect={onTrackSelect}
          currentTrack={currentTrack}
          onPlayAlbum={() => onPlayAlbum(selectedAlbum)}
        />
      )}
    </div>
  );
}