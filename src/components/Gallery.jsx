import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// back yard light
import DSC_2525 from "../assets/backyardLight/DSC_2525.jpg";
import DSC_2528 from "../assets/backyardLight/DSC_2528.jpg";
import DSC_2529 from "../assets/backyardLight/DSC_2529.jpg";
import DSC_2532 from "../assets/backyardLight/DSC_2532.jpg";
import DSC_2534 from "../assets/backyardLight/DSC_2534.jpg";
import DSC_2535 from "../assets/backyardLight/DSC_2535.jpg";
import DSC_2537 from "../assets/backyardLight/DSC_2537.jpg";
import DSC_2541 from "../assets/backyardLight/DSC_2541.jpg";
import DSC_2544 from "../assets/backyardLight/DSC_2544.jpg";
import DSC_2545 from "../assets/backyardLight/DSC_2545.jpg";
import DSC_2546 from "../assets/backyardLight/DSC_2546.jpg";
import DSC_2551 from "../assets/backyardLight/DSC_2551.jpg";
import DSC_2555 from "../assets/backyardLight/DSC_2555.jpg";

// back yard dark
import DSC_2562 from "../assets/backyardDark/DSC_2562.jpg";
import DSC_2565 from "../assets/backyardDark/DSC_2565.jpg";
import DSC_2570 from "../assets/backyardDark/DSC_2570.jpg";
import DSC_2571 from "../assets/backyardDark/DSC_2571.jpg";
import DSC_2577 from "../assets/backyardDark/DSC_2577.jpg";
import DSC_2582 from "../assets/backyardDark/DSC_2582.jpg";
import DSC_2583 from "../assets/backyardDark/DSC_2583.jpg";
import DSC_2587 from "../assets/backyardDark/DSC_2587.jpg";
import DSC_2588 from "../assets/backyardDark/DSC_2588.jpg";
import DSC_2589 from "../assets/backyardDark/DSC_2589.jpg";

const backyardLightImages = [
  {
    original: `${DSC_2525}`,
    thumbnail: `${DSC_2525}`,
    description: "Side Yard View",
  },
  {
    original: `${DSC_2528}`,
    thumbnail: `${DSC_2528}`,
    description: "Wrap Around Patio",
  },
  {
    original: `${DSC_2529}`,
    thumbnail: `${DSC_2529}`,
    description: "Wrap Around Patio",
  },
  {
    original: `${DSC_2532}`,
    thumbnail: `${DSC_2532}`,
    description: "Patio View",
  },
  {
    original: `${DSC_2534}`,
    thumbnail: `${DSC_2534}`,
    description: "Upper Patio View",
  },
  {
    original: `${DSC_2535}`,
    thumbnail: `${DSC_2535}`,
    description: "Patio Towards House",
  },
  {
    original: `${DSC_2537}`,
    thumbnail: `${DSC_2537}`,
    description: "Upper Patio To Backyard",
  },
  {
    original: `${DSC_2541}`,
    thumbnail: `${DSC_2541}`,
    description: "Backyard View",
  },
  {
    original: `${DSC_2544}`,
    thumbnail: `${DSC_2544}`,
    description: "Outdoor Kitchen",
  },
  {
    original: `${DSC_2545}`,
    thumbnail: `${DSC_2545}`,
    description: "Outdoor Kitchen",
  },
  {
    original: `${DSC_2546}`,
    thumbnail: `${DSC_2546}`,
    description: "Backyard To Side Yard",
  },
  {
    original: `${DSC_2551}`,
    thumbnail: `${DSC_2551}`,
    description: "Pool View",
  },
  {
    original: `${DSC_2555}`,
    thumbnail: `${DSC_2555}`,
    description: "Pool View",
  },
  {
    original: `${DSC_2562}`,
    thumbnail: `${DSC_2562}`,
    description: "Pool View At Night",
  },
  {
    original: `${DSC_2565}`,
    thumbnail: `${DSC_2565}`,
    description: "Pool View At Night",
  },
  {
    original: `${DSC_2570}`,
    thumbnail: `${DSC_2570}`,
    description: "LED Step Lighting",
  },
  {
    original: `${DSC_2571}`,
    thumbnail: `${DSC_2571}`,
    description: "Backyard Lights",
  },
  {
    original: `${DSC_2577}`,
    thumbnail: `${DSC_2577}`,
    description: "Backyard Lights",
  },
  {
    original: `${DSC_2582}`,
    thumbnail: `${DSC_2582}`,
    description: "Programmable RGB LED Lights",
  },
  {
    original: `${DSC_2583}`,
    thumbnail: `${DSC_2583}`,
    description: "Programmable RGB LED Lights",
  },
  {
    original: `${DSC_2587}`,
    thumbnail: `${DSC_2587}`,
    description: "Pool View At Night",
  },
  {
    original: `${DSC_2588}`,
    thumbnail: `${DSC_2588}`,
    description: "Pool View At Night",
  },
  {
    original: `${DSC_2589}`,
    thumbnail: `${DSC_2589}`,
    description: "Pool View At Night",
  },
];

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="min-h-screen pt-10 items-center justify-center bg-indigo-950"
    >
      <h2 className="text-center md:text-6xl text-4xl text-indigo-100 drop-shadow-lg">
        Exterior
      </h2>
      <div className="flex items-center justify-center md:px-20 bg-indigo-950">
        <span className="content-center mb-20 m-8 md:w-[70%] w-[85%]">
          <ImageGallery items={backyardLightImages} />
        </span>
      </div>
      <h2 className="text-center md:text-6xl text-4xl text-indigo-100 drop-shadow-lg">
        Interior
      </h2>
      <div className="flex items-center justify-center md:px-20 bg-indigo-950">
        <span className="content-center mb-20 m-8 md:w-[70%] w-[85%]">
          <ImageGallery items={backyardLightImages} />
        </span>
      </div>
    </div>
  );
};

export default Gallery;
