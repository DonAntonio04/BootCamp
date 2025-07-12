import React from "react";

const AlbumGrid = ({ albums }) => {
    return (
        <div className="album-grid">
            {albums.map(album => (
                <div key={album.id} className="album-item">
                   <img src={album.url} alt={album.title} />
                     <h3>{album.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default AlbumGrid;