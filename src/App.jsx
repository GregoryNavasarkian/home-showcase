import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';


const App = () => {
  return (
    <div className='landscape:lg:mt-0 landscape:md:mt-20 landscape:sm:mt-0 bg-indigo-200'>
      <Navbar />
      <Hero />
      <Gallery />
    </div>
  )
}

export default App;
