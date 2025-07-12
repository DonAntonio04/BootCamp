import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import photos from '../data/photos';

const Gallery = () => {
    return (
        <div>
            <h1>Photo Gallery</h1>
            <GalleryGrid photos={photos} />
        </div>
    );
};

export default Gallery;