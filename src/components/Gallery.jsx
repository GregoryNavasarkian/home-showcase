import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// back yard light
import DSC_2524 from '../assets/backyardLight/DSC_2524.jpg';
import DSC_2525 from '../assets/backyardLight/DSC_2525.jpg';
import DSC_2528 from '../assets/backyardLight/DSC_2528.jpg';
import DSC_2529 from '../assets/backyardLight/DSC_2529.jpg';
import DSC_2532 from '../assets/backyardLight/DSC_2532.jpg';
import DSC_2534 from '../assets/backyardLight/DSC_2534.jpg';
import DSC_2535 from '../assets/backyardLight/DSC_2535.jpg';
import DSC_2537 from '../assets/backyardLight/DSC_2537.jpg';
import DSC_2538 from '../assets/backyardLight/DSC_2538.jpg';
import DSC_2539 from '../assets/backyardLight/DSC_2539.jpg';
import DSC_2541 from '../assets/backyardLight/DSC_2541.jpg';
import DSC_2544 from '../assets/backyardLight/DSC_2544.jpg';
import DSC_2545 from '../assets/backyardLight/DSC_2545.jpg';
import DSC_2546 from '../assets/backyardLight/DSC_2546.jpg';
import DSC_2548 from '../assets/backyardLight/DSC_2548.jpg';
import DSC_2551 from '../assets/backyardLight/DSC_2551.jpg';
import DSC_2555 from '../assets/backyardLight/DSC_2555.jpg';
import DSC_2556 from '../assets/backyardLight/DSC_2556.jpg';
import DSC_2560 from '../assets/backyardLight/DSC_2560.jpg';


const images = [
  {
    original: `${DSC_2524}`,
    thumbnail: `${DSC_2524}`,
  },
  {
    original: `${DSC_2525}`,
    thumbnail: `${DSC_2525}`,
  },
  {
    original: `${DSC_2528}`,
    thumbnail: `${DSC_2528}`,
  },
  {
    original: `${DSC_2529}`,
    thumbnail: `${DSC_2529}`,
  },
  {
    original: `${DSC_2532}`,
    thumbnail: `${DSC_2532}`,
  },
  {
    original: `${DSC_2534}`,
    thumbnail: `${DSC_2534}`,
  },
  {
    original: `${DSC_2535}`,
    thumbnail: `${DSC_2535}`,
  },
  {
    original: `${DSC_2537}`,
    thumbnail: `${DSC_2537}`,
  },
  {
    original: `${DSC_2538}`,
    thumbnail: `${DSC_2538}`,
  },
  {
    original: `${DSC_2539}`,
    thumbnail: `${DSC_2539}`,
  },
  {
    original: `${DSC_2541}`,
    thumbnail: `${DSC_2541}`,
  },
  {
    original: `${DSC_2544}`,
    thumbnail: `${DSC_2544}`,
  },
  {
    original: `${DSC_2545}`,
    thumbnail: `${DSC_2545}`,
  },
  {
    original: `${DSC_2546}`,
    thumbnail: `${DSC_2546}`,
  },
  {
    original: `${DSC_2548}`,
    thumbnail: `${DSC_2548}`,
  },
  {
    original: `${DSC_2551}`,
    thumbnail: `${DSC_2551}`,
  },
  {
    original: `${DSC_2555}`,
    thumbnail: `${DSC_2555}`,
  },
  {
    original: `${DSC_2556}`,
    thumbnail: `${DSC_2556}`,
  },
  {
    original: `${DSC_2560}`,
    thumbnail: `${DSC_2560}`,
  },
];

const Gallery = () => {
  return (
    <div id="gallery" className='min-h-screen pt-10 items-center justify-center bg-indigo-950'>
      <h2 className='text-center md:text-6xl text-4xl text-indigo-100 drop-shadow-lg'>Exterior</h2>
      <div className='flex items-center justify-center md:px-20 bg-indigo-950'>
        <span className='content-center mb-20 m-8 md:w-[70%] w-[85%]'><ImageGallery items={images} /></span>
      </div>
      <h2 className='text-center md:text-6xl text-4xl text-indigo-100 drop-shadow-lg'>Interior</h2>
      <div className='flex items-center justify-center md:px-20 bg-indigo-950'>
        <span className='content-center mb-20 m-8 md:w-[70%] w-[85%]'><ImageGallery items={images} /></span>
      </div>
    </div>
  )
}

export default Gallery;