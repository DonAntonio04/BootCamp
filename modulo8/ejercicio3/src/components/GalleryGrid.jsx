import React from 'react';

const GalleryGrid = ({ photos }) => {
    return (
        <div className="gallery-grid">
            {photos.map(photo => (
                <div key={photo.id} className="gallery-item">
                    <img src={photo.url} alt={photo.title} />
                    <h3>{photo.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;