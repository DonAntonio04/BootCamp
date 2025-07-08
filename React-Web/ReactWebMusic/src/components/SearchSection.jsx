import { useState } from "react";
import AlbumSection from "./AlbumSection";

export default function SearchSection({ canciones, onBuscar }) {
  return (
    <section className="search-section">
      <h2>Buscar Canciones o Artistas</h2>
      <input
        type="text"
        placeholder="Buscar por canción o artista..."
        onChange={e => onBuscar(e.target.value)}
        style={{
          width: "100%", padding: "10px", fontSize: "16px",
          margin: "10px 0", borderRadius: "5px", border: "none"
        }}
      />
      <div id="searchResults">
        {canciones.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          <AlbumSection canciones={canciones} />
        )}
      </div>
    </section>
  );
}
