import React from "react";

import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </>
  );
};

export default Home;
