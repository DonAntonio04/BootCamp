import photo from '../assets/ejemplo1.jpg';
import photo2 from '../assets/ejemplo2.jpg';
import phot3 from '../assets/ejemplo3.jpg';
import phot4 from '../assets/ejemplo4.jpg';
import phot5 from '../assets/ejemplo5.jpg';

 const photos = [
  {
    id: 1,
    url: photo,
    title: 'Foto 1',
    category: 'Nature',
    isFavorite: false
  },
  {
    id: 2,
    url: photo2,
    title: 'Foto 2',
    category: 'Architecture',
    isFavorite: true
  },
  {
    id: 3,
    url: phot3,
    title: 'Foto 3',
    category: 'Nature',
    isFavorite: false
  },
  {
    id: 4,
    url: phot4,
    title: 'Photo 4',
    category: 'People',
    isFavorite: true
  },
  {
    id: 5,
    url: phot5 ,
    title: 'Foto 5',
    category: 'Architecture',
    isFavorite: false
  },
];
export default photos;