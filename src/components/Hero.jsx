import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tl from-indigo-50 to-white">
      <div className="max-w-[900px] mt-[-96] w-full min-h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center columns-2">
          <div className="w-full">
            <p className="text-indigo-900 font-bold md:text-2xl text-xl">
              411 Starlight Crest
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-indigo-900 text-4xl font-bold md:py-6 py-2">
              Short description.
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-indigo-800 md:text-5xl sm:text-4xl text-xl font-bold">
                Modern&nbsp;
              </p>
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold text-indigo-900"
                strings={[" design.", " electronics.", " styling."]}
                typeSpeed={110}
                backSpeed={130}
                loop
              />
            </div>
            <p className="md:text-2xl px-6 text-xl font-bold text-indigo-700 pt-6">
              Long description.
            </p>
            <div className="p-8">
              <Link to="/get-started">
                <button className="bg-indigo-900 text-indigo-50 font-bold text-xl p-2 hover:text-indigo-200 transition-all duration-100 ease-in rounded-md">
                  Gallery
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            image
          </div>
        </div>


      </div>
    </div>
  );
}

export default Hero;