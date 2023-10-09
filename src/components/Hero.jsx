import React from "react";

import house from "../assets/house.jpg"

const Hero = () => {
  return (
    <div class="min-h-[1000px] bg-indigo-100 items-center">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto mt-28 md:mt-64 place-self-center lg:col-span-7 ml-1">
          <h1 class="max-w-2xl mb-4 text-4xl text-indigo-950 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">481 Starlight Crest Dr</h1>
          <p class="max-w-2xl mb-6 font-light text-indigo-800 lg:mb-8 md:text-lg lg:text-xl md:text-left">Modern home with state of the art appliances and exquisite attention to detail.</p>
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-indigo-200 border hover:border-grey-800 transition-all ease-in-out hover:shadow-sm">
            View Gallery
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition-all ease-in-out shadow-sm">
            Contact Us
          </a>
        </div>
        <img className="lg:hidden md:hidden mt-10 p-3 rounded-md shadow-md" src={house} alt="house" />
        <div class="hidden w-full lg:col-span-5 lg:flex mt-36 items-center justify-items-center">
          <img className="p-2 rounded-md shadow-md" src={house} alt="house" />
        </div>
      </div>
      
    </div>
  );
}

export default Hero;