// src/components/Sidebar.jsx

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>🎵 Music</h2>
      <nav>
        <ul>
          <li>🏠 Home</li>
          <li>🎧 Playlist</li>
          <li>🎤 Artist</li>
          <li>❤️ Liked</li>
          <li>👤 My Account</li>
        </ul>
      </nav>
      <div className="ad">
        <p>UNLIMITED MUSIC<br />ENJOYMENT ANYWHERE</p>
        <div className="guitar">🎸</div>
      </div>
    </aside>
  );
}
