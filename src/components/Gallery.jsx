import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import house from "../assets/house.jpg"

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
  {
    original: `${house}`,
    thumbnail: `${house}`,
  },
];

const Gallery = () => {
  return (
    <div id="gallery" className='min-h-screen pt-10 items-center justify-center bg-indigo-950'>
      <h2 className='text-center md:text-6xl text-4xl font-bold text-indigo-100 drop-shadow-lg'>Gallery</h2>
      <div className='flex items-center justify-center md:px-20 bg-indigo-950'>
        <span className='content-center mb-20 m-8 md:min-w-[77%] min-w-[85%]'><ImageGallery items={images} /></span>
      </div>
    </div>
  )
}

export default Gallery;