import { useEffect, useRef, useState } from "react";

export default function Player({ cancion, onCerrar, onNext, onPrevious }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  useEffect(() => {
    if (cancion && audioRef.current) {
      audioRef.current.src = cancion.url;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error("Error al reproducir:", error));
    }
  }, [cancion]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const rect = e.target.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(clickPosition * 100);
    }
  };

  if (!cancion) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '90px',
      backgroundColor: '#181818',
      borderTop: '1px solid #282828',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      zIndex: 1000,
      boxShadow: '0 -2px 10px rgba(0,0,0,0.5)'
    }}>
      {/* Portada en el reproductor */}
      <div style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
        {cancion.albumCompleto?.portada && (
          <img
            src={cancion.albumCompleto.portada}
            alt="Album cover"
            style={{
              width: '60px',
              height: '60px',
              marginRight: '15px',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
          />
        )}
        <div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
            {cancion.titulo}
          </div>
          <div style={{ fontSize: '12px', color: '#b3b3b3' }}>
            {cancion.artista} • {cancion.albumCompleto?.titulo || "Sin Álbum"}
          </div>
        </div>
      </div>

      {/* Controles del reproductor */}
      <div style={{ width: '40%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          <button 
            onClick={onPrevious}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              margin: '0 15px',
              cursor: 'pointer'
            }}
          >
            ⏮
          </button>
          <button 
            onClick={togglePlay}
            style={{
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 15px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            {isPlaying ? (
              <span style={{ fontSize: '14px' }}>⏸</span>
            ) : (
              <span style={{ fontSize: '14px', marginLeft: '2px' }}>▶</span>
            )}
          </button>
          <button 
            onClick={onNext}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              margin: '0 15px',
              cursor: 'pointer'
            }}
          >
            ⏭
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#b3b3b3', width: '40px' }}>
            {audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}
          </span>
          <div 
            onClick={handleProgressClick}
            style={{
              flex: 1,
              height: '4px',
              backgroundColor: '#535353',
              borderRadius: '2px',
              margin: '0 10px',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#1db954',
              borderRadius: '2px'
            }}></div>
          </div>
          <span style={{ fontSize: '12px', color: '#b3b3b3', width: '40px' }}>
            {audioRef.current ? formatTime(audioRef.current.duration) : '0:00'}
          </span>
        </div>
      </div>

      {/* Controles de volumen y cierre */}
      <div style={{ width: '30%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button style={{
          background: 'none',
          border: 'none',
          color: '#b3b3b3',
          fontSize: '18px',
          margin: '0 15px',
          cursor: 'pointer'
        }}>
          ♫
        </button>
        <div style={{
          width: '100px',
          height: '4px',
          backgroundColor: '#535353',
          borderRadius: '2px',
          marginRight: '20px',
          position: 'relative'
        }}>
          <div style={{
            width: `${volume}%`,
            height: '100%',
            backgroundColor: '#1db954',
            borderRadius: '2px'
          }}></div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              top: 0,
              left: 0,
              cursor: 'pointer'
            }}
          />
        </div>
        <button 
          onClick={onCerrar}
          style={{
            background: 'none',
            border: 'none',
            color: '#b3b3b3',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'color 0.2s',
            ':hover': {
              color: '#fff'
            }
          }}
        >
          ✖
        </button>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNext}
        onError={(e) => console.error("Error de audio:", e)}
      />
    </div>
  );
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}