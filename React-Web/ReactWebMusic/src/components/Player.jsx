export default function Player() {
  return (
    <div className="player" id="player">
      <img src="" alt="Playing" className="player-img" id="player-img" />
      <div className="player-details">
        <p id="player-title">Now Playing: -</p>
        <div className="player-controls">
          <button className="control-btn">🔀</button>
          <button className="control-btn">⏮️</button>
          <button className="control-btn" id="play-pause-btn">⏸️</button>
          <button className="control-btn">⏭️</button>
          <button className="control-btn">🔁</button>
        </div>
        <div className="progress-container">
          <div className="progress-bar" id="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
