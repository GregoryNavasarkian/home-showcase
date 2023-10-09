import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <div className='md:mt-20 mt-10 mb-48 items-center justify-center bg-indigo-200'>
      <h2 className='text-center md:text-7xl text-4xl font-bold text-indigo-950 drop-shadow-lg'>Gallery</h2>
      <div className='flex items-center justify-center m-10 md:px-20 bg-indigo-200'>
        <span className='content-center'><ImageGallery items={images} /></span>
      </div>
    </div>
  )
}

export default Gallery;