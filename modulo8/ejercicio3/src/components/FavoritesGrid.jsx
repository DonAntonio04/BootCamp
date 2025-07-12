import React from 'react';

const FavoritesGrid = ({ photos }) => {
    if (!photos.length) {
        return <p>No hay fotos favoritas.</p>;
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {photos.map(photo => (
                <div key={photo.id}>
                    <img src={photo.url} alt={photo.title} style={{ width: '100%' }} />
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
    );
};

export default FavoritesGrid;