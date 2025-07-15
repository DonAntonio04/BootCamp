export default function Sidebar({ onViewChange, currentView }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Music App</h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>Inicio</li>
          <li>Explorar</li>
          <li>Biblioteca</li>
        </ul>
      </nav>
      <div className="view-options">
        <button 
          onClick={() => onViewChange("albums")}
          className={currentView === "albums" ? "active" : ""}
        >
          Álbumes
  
        </button>
      </div>
      <div className="playlists">
        <h3>Playlists</h3>
        <ul>
          <li>Favoritos</li>
          <li>Recientes</li>
        </ul>
      </div>
    </aside>
  );
} 