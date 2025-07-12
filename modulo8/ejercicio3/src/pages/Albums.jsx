import React from 'react';
import AlbumGrid from '../components/AlbumGrid';
import photos from '../data/photos';

const Albums = () => {
    const albums = [...new Set(photos.map(photo => photo.category))].map(category => ({
        category,
        photos: photos.filter(photo => photo.category === category)
    }));

    return (
        <div>
            <h1>Albums</h1>
            <AlbumGrid albums={albums} />
        </div>
    );
};

export default Albums;