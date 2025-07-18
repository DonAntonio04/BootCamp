import { useState, useEffect } from "react";

export default function AlbumDetail({ album, onClose, onTrackSelect, currentTrack, onPlayAlbum }) {
  const [localCurrentTrack, setLocalCurrentTrack] = useState(currentTrack);

  useEffect(() => {
    setLocalCurrentTrack(currentTrack);
  }, [currentTrack]);

  const handleTrackSelect = (track) => {
    setLocalCurrentTrack(track);
    onTrackSelect(track);
  };

  return (
    <div style={{
      width: '400px',
      height: '100vh',
      backgroundColor: '#181818',
      borderLeft: '1px solid #282828',
      overflowY: 'auto',
      position: 'relative',
      boxShadow: '-10px 0 20px rgba(0,0,0,0.5)'
    }}>
      {/* Encabezado del álbum */}
      <div style={{
        padding: '24px',
        background: 'linear-gradient(to bottom, #333, #181818)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          {album.portada && (
            <img
              src={album.portada}
              alt={album.titulo}
              style={{
                width: '160px',
                height: '160px',
                objectFit: 'cover',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}
            />
          )}
          
          <div style={{ flex: 1 }}>
            <p style={{ 
              margin: '0 0 8px 0',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>ÁLBUM</p>
            <h1 style={{
              margin: '0 0 8px 0',
              fontSize: '32px',
              fontWeight: 'bold'
            }}>{album.titulo}</h1>
            <p style={{ 
              margin: '0 0 16px 0',
              color: '#b3b3b3'
            }}>{album.artista} • {album.año} • {album.canciones.length} canciones</p>
            
            <button 
              onClick={() => onPlayAlbum(album)}
              style={{
                backgroundColor: '#1db954',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 32px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '16px',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              REPRODUCIR
            </button>
          </div>
        </div>
      </div>

      {/* Lista de canciones */}
      <div style={{ padding: '20px' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '16px 40px 1fr 80px',
          alignItems: 'center',
          color: '#b3b3b3',
          fontSize: '14px',
          padding: '8px 0',
          borderBottom: '1px solid #282828'
        }}>
          <span>#</span>
          <span></span>
          <span>TÍTULO</span>
          <span style={{ textAlign: 'right' }}>DURACIÓN</span>
        </div>
        
        {album.canciones.map((track, index) => (
          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '16px 40px 1fr 80px',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #282828',
              cursor: 'pointer',
              backgroundColor: localCurrentTrack?.id === track.id ? '#2a2a2a' : 'transparent',
              ':hover': {
                backgroundColor: '#2a2a2a'
              }
            }}
            onClick={() => handleTrackSelect(track)}
          >
            <span style={{ 
              color: '#b3b3b3',
              textAlign: 'right',
              paddingRight: '8px'
            }}>{index + 1}</span>
            <span></span>
            <div>
              <div style={{ 
                fontWeight: localCurrentTrack?.id === track.id ? 'bold' : 'normal',
                color: localCurrentTrack?.id === track.id ? '#1db954' : '#fff'
              }}>
                {track.titulo}
              </div>
            </div>
            <span style={{ 
              textAlign: 'right',
              color: '#b3b3b3'
            }}>{track.duracion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}