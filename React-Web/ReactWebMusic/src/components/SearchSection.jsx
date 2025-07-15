import { useState } from "react";
import Player from "./Player";

export default function SearchSection({ canciones }) {
  const [selectedSong, setSelectedSong] = useState(null);
  const albumsMap = {};

  canciones.forEach((cancion) => {
    const albumTitulo = cancion.albumCompleto?.titulo || "Sin Álbum";
    if (!albumsMap[albumTitulo]) {
      albumsMap[albumTitulo] = {
        portada: cancion.albumCompleto?.portada 
          ? `https://api-musica.netlify.app/${cancion.albumCompleto.portada}`
          : null,
        canciones: [],
      };
    }
    albumsMap[albumTitulo].canciones.push({
      ...cancion,
      // Aseguramos que la URL de la portada esté completa
      albumCompleto: {
        ...cancion.albumCompleto,
        portada: cancion.albumCompleto?.portada 
          ? `https://api-musica.netlify.app/${cancion.albumCompleto.portada}`
          : null
      }
    });
  });

  return (
    <div id="searchResults" style={{ 
      backgroundColor: '#121212', 
      color: '#fff', 
      padding: '20px',
      display: 'flex',
      gap: '30px',
      paddingBottom: '100px' // Espacio para el reproductor
    }}>
      {/* Sección de portada lateral */}
      <div style={{
        width: '300px',
        position: 'sticky',
        top: '20px',
        alignSelf: 'flex-start'
      }}>
        {selectedSong ? (
          <div style={{ textAlign: 'center' }}>
            <img
              src={selectedSong.albumCompleto?.portada || 'https://via.placeholder.com/300'}
              alt="Portada del álbum"
              style={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                marginBottom: '15px'
              }}
            />
            <h3 style={{ margin: '10px 0 5px', fontSize: '18px' }}>
              {selectedSong.titulo}
            </h3>
            <p style={{ color: '#b3b3b3', margin: 0 }}>
              {selectedSong.albumCompleto?.titulo || "Sin Álbum"}
            </p>
          </div>
        ) : (
          <div style={{
            backgroundColor: '#282828',
            borderRadius: '8px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#b3b3b3'
          }}>
            Selecciona una canción
          </div>
        )}
      </div>

      {/* Sección de resultados */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '28px', marginBottom: '30px' }}>Resultados de Búsqueda</h1>
        
        {Object.entries(albumsMap).map(([titulo, info], idx) => (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#282828',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onClick={() => {
                const content = document.getElementById(`album-content-${idx}`);
                const icon = document.getElementById(`toggle-icon-${idx}`);
                if (content.style.display === 'none') {
                  content.style.display = 'block';
                  icon.innerHTML = '▼';
                } else {
                  content.style.display = 'none';
                  icon.innerHTML = '▶';
                }
              }}
            >
              {info.portada && (
                <img
                  src={info.portada}
                  alt={titulo}
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'cover', 
                    borderRadius: '4px',
                    marginRight: '15px'
                  }}
                />
              )}
              <h3 style={{ margin: 0, fontSize: '18px' }}>{titulo}</h3>
              <span 
                id={`toggle-icon-${idx}`} 
                style={{ 
                  fontSize: '24px', 
                  color: '#1db954', 
                  marginLeft: 'auto'
                }}
              >
                ▶
              </span>
            </div>
            
            <div 
              id={`album-content-${idx}`} 
              style={{ 
                display: 'none', 
                marginLeft: info.portada ? '75px' : '20px', 
                marginTop: '10px'
              }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '40px 1fr 80px',
                color: '#b3b3b3',
                fontSize: '14px',
                padding: '10px 0',
                borderBottom: '1px solid #282828'
              }}>
                <span>#</span>
                <span>TÍTULO</span>
                <span style={{ textAlign: 'right' }}>DURACIÓN</span>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                {info.canciones.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedSong(c)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '40px 1fr 80px',
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: '1px solid #282828',
                      cursor: 'pointer',
                      backgroundColor: selectedSong?.id === c.id ? '#2a2a2a' : 'transparent',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s',
                      ':hover': {
                        backgroundColor: '#2a2a2a'
                      }
                    }}
                  >
                    <span style={{ color: '#b3b3b3' }}>{i + 1}</span>
                    <div style={{ 
                      fontWeight: selectedSong?.id === c.id ? 'bold' : 'normal',
                      color: selectedSong?.id === c.id ? '#1db954' : 'inherit'
                    }}>
                      {c.titulo}
                    </div>
                    <span style={{ 
                      textAlign: 'right', 
                      color: '#b3b3b3'
                    }}>
                      {c.duracion}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reproductor con portada */}
      {selectedSong && (
        <Player 
          cancion={selectedSong} 
          onCerrar={() => setSelectedSong(null)}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
          }}
        />
      )}
    </div>
  );
}   