import { useEffect, useRef, useState } from "react";

export default function Player({ cancion, onCerrar }) {
  const audioRef = useRef(null);
  const [progreso, setProgreso] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (cancion && audioRef.current) {
      audioRef.current.play();
      setPausado(false);
    }
  }, [cancion]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setProgreso((audio.currentTime / audio.duration) * 100);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPausado(false);
    } else {
      audio.pause();
      setPausado(true);
    }
  };

  if (!cancion) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#111",
      padding: "10px 20px",
      borderTop: "2px solid #1db954",
      display: "flex",
      alignItems: "center",
      color: "white",
      zIndex: 1000
    }}>
      <img
        src={cancion.albumCompleto?.portada ? `https://api-musica.netlify.app/${cancion.albumCompleto.portada}` : ""}
        alt="portada"
        style={{ width: 60, height: 60, borderRadius: 6, objectFit: "cover" }}
      />
      <div style={{ flex: 1, marginLeft: 20 }}>
        <strong>{cancion.titulo}</strong>
        <div style={{ height: 8, background: "#333", borderRadius: 5, marginTop: 8 }}>
          <div style={{
            height: "100%",
            width: `${progreso}%`,
            background: "#1db954",
            borderRadius: 5,
            transition: "width 0.2s linear"
          }}></div>
        </div>
      </div>

      <button
        onClick={togglePlay}
        style={{
          marginLeft: 20,
          background: "transparent",
          color: "#1db954",
          fontSize: 24,
          border: "none",
          cursor: "pointer"
        }}
      >
        {pausado ? "▶️" : "⏸️"}
      </button>

      <button
        onClick={onCerrar}
        style={{
          marginLeft: 10,
          background: "transparent",
          border: "1px solid #1db954",
          color: "#1db954",
          padding: "6px 12px",
          borderRadius: 6,
          cursor: "pointer"
        }}
      >
        ✖
      </button>

      <audio
        ref={audioRef}
        src={cancion.url}
        onTimeUpdate={handleTimeUpdate}
        autoPlay
      />
    </div>
  );
}
