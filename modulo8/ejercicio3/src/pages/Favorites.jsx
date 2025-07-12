import React from 'react';
import FavoritesGrid from '../components/FavoritesGrid';
import photos from '../data/photos';

const Favorites = () => {
    const favoritePhotos = photos.filter(photo => photo.isFavorite);

    return (
        <div>
            <h1>Favorites</h1>
            <FavoritesGrid photos={favoritePhotos} />
        </div>
    );
};

export default Favorites;