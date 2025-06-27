const resultContainer = document.getElementById("searchResults");

async function mostrarAlbumes(data) {
  resultContainer.innerHTML = "";

  // Agrupar por álbum
  const albumsMap = {};

  data.forEach(cancion => {
    const album = cancion.albumCompleto?.titulo || "Sin Álbum";
    if (!albumsMap[album]) {
      albumsMap[album] = {
        portada: cancion.albumCompleto?.portada,
        canciones: []
      };
    }
    albumsMap[album].canciones.push({
      titulo: cancion.titulo,
      duracion: cancion.duracion || "3:00"
    });
  });

  // Función para sumar duración en formato mm:ss
  function sumarDuracion(canciones) {
    let totalSecs = 0;
    canciones.forEach(c => {
      const [min, sec] = c.duracion.split(":").map(Number);
      totalSecs += min * 60 + sec;
    });
    const minTotal = Math.floor(totalSecs / 60);
    const secTotal = String(totalSecs % 60).padStart(2, "0");
    return `${minTotal}:${secTotal}`;
  }

  // Crear acordeón para cada álbum
  Object.entries(albumsMap).forEach(([albumTitulo, info]) => {
    const duracionTotal = sumarDuracion(info.canciones);

    const section = document.createElement("section");
    section.className = "album-section";

    section.innerHTML = `
      <div class="album-header" style="cursor:pointer; display:flex; align-items:center; justify-content: space-between; background:#222; padding:10px; border-radius:8px; margin-bottom:5px;">
        <div style="display:flex; align-items:center; gap:10px;">
          ${info.portada ? `<img src="${info.portada}" alt="${albumTitulo}" style="width:60px; height:60px; object-fit:cover; border-radius:6px;">` : ""}
          <h3 style="margin:0; color:white;">${albumTitulo}</h3>
        </div>
        <span class="toggle-icon" style="font-size:24px; color:#1db954;">&#9656;</span>
      </div>
      <div class="album-content" style="display:none; margin-left: 70px; margin-top: 10px; color:#ccc;">
        <ol style="padding-left: 20px;">
          ${info.canciones.map((cancion, i) =>
            `<li style="display:flex; justify-content:space-between; padding:4px 0;">
              <span>${i + 1} - ${cancion.titulo}</span>
              <span>${cancion.duracion}</span>
            </li>`).join("")}
        </ol>
        <p style="text-align:right; font-weight:bold;">Duración total: ${duracionTotal}</p>
      </div>
    `;

    // Agregar funcionalidad toggle acordeón
    const header = section.querySelector(".album-header");
    const content = section.querySelector(".album-content");
    const icon = section.querySelector(".toggle-icon");

    header.addEventListener("click", () => {
      if (content.style.display === "none") {
        content.style.display = "block";
        icon.innerHTML = "&#9662;"; // Flecha hacia abajo
      } else {
        content.style.display = "none";
        icon.innerHTML = "&#9656;"; // Flecha hacia la derecha
      }
    });

    resultContainer.appendChild(section);
  });
}

// Carga inicial de álbumes
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://api-musica.netlify.app/api/");
    const data = await response.json();
    await mostrarAlbumes(data.data);
  } catch (error) {
    resultContainer.innerHTML = "<p>Error al cargar álbumes.</p>";
  }
});

// Búsqueda con filtro y mostrar resultados acordeón
document.getElementById("searchInput").addEventListener("input", async function () {
  const query = this.value.trim().toLowerCase();
  if (!query) {
    // Si no hay búsqueda, mostrar todos
    try {
      const response = await fetch("https://api-musica.netlify.app/api/");
      const data = await response.json();
      await mostrarAlbumes(data.data);
    } catch (error) {
      resultContainer.innerHTML = "<p>Error al cargar álbumes.</p>";
    }
    return;
  }

  try {
    const response = await fetch("https://api-musica.netlify.app/api/");
    const data = await response.json();

    // Filtrar solo canciones que coincidan con título, artista o álbum
    const filtered = data.data.filter(cancion =>
      cancion.titulo.toLowerCase().includes(query) ||
      cancion.artista.toLowerCase().includes(query) ||
      (cancion.albumCompleto?.titulo?.toLowerCase().includes(query))
    );

    if (filtered.length === 0) {
      resultContainer.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
    }

    mostrarAlbumes(filtered);
  } catch (error) {
    resultContainer.innerHTML = "<p>Error al buscar canciones.</p>";
  }
});
