import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-[url('/DSC_2648.jpg')] bg-cover saturate-50 items-center"
    >
      <div className="min-h-screen bg-indigo-900 bg-opacity-70">
        <div className="text-center items-center px-4 py-8 mx-auto lg:py-16 ">
          <div className="mt-28 md:mt-64 place-self-center">
            <h1 className="text-center items-center justify-center mx-auto max-w-4xl mb-4 text-3xl text-indigo-100 font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl">
              481 Starlight Crest Dr.
            </h1>
            <h2 className="text-center items-center justify-center mx-auto max-w-4xl pt-1 mb-4 text-2xl text-indigo-100 font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">
              La Cañada, CA 91011
            </h2>
            <p className="text-center items-center justify-center mx-auto max-w-2xl pt-1 mb-6 font-light text-indigo-200 lg:mb-8 md:text-2xl">
              Modern home with state of the art appliances and exquisite
              attention to detail.
            </p>
            <p className="md:block hidden text-indigo-100 md:text-3xl text-2xl mb-10">
              3,469 sqft | 0.5 acre lot | 4 bedrooms | 3 bathrooms
            </p>
            <p className="md:hidden block text-indigo-100 md:text-3xl text-2xl mb-10">
              3,469 sqft | 0.5 acre lot <br /> 4 bedrooms | 3 bathrooms
            </p>
            <Link
              to="gallery"
              spy={true}
              offset={-80}
              duration={200}
              className="inline-flex items-center justify-center px-3 py-3 mr-3 text-indigo-100 font-medium text-center rounded-lg hover:bg-indigo-900 border border-indigo-300 hover:border-grey-800 transition-all ease-in-out hover:shadow-sm cursor-pointer"
            >
              View Gallery
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-90}
              duration={200}
              className="inline-flex items-center justify-center px-3 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-300 rounded-lg hover:bg-indigo-900 focus:ring-4 focus:ring-gray-100 transition-all ease-in-out shadow-sm cursor-pointer"
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
