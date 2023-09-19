import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='landscape:lg:mt-0 landscape:md:mt-20 landscape:sm:mt-0'>
      <Router>
        <Navbar />
        <Hero />
      </Router>
    </div>
  )
}

export default App;
