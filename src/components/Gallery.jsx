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
import DSC_2588 from "../assets/backyardDark/DSC_2588.jpg";
import DSC_2589 from "../assets/backyardDark/DSC_2589.jpg";

// interior
import DSC_2592 from "../assets/interior/DSC_2592.jpg";
import DSC_2593 from "../assets/interior/DSC_2593.jpg";
import DSC_2595 from "../assets/interior/DSC_2595.jpg";
import DSC_2596 from "../assets/interior/DSC_2596.jpg";
import DSC_2597 from "../assets/interior/DSC_2597.jpg";
import DSC_2598 from "../assets/interior/DSC_2598.jpg";
import DSC_2601 from "../assets/interior/DSC_2601.jpg";
import DSC_2602 from "../assets/interior/DSC_2602.jpg";
import DSC_2604 from "../assets/interior/DSC_2604.jpg";
import DSC_2606 from "../assets/interior/DSC_2606.jpg";
import DSC_2607 from "../assets/interior/DSC_2607.jpg";
import DSC_2610 from "../assets/interior/DSC_2610.jpg";
import DSC_2614 from "../assets/interior/DSC_2614.jpg";
import DSC_2615 from "../assets/interior/DSC_2615.jpg";
import DSC_2617 from "../assets/interior/DSC_2617.jpg";
import DSC_2618 from "../assets/interior/DSC_2618.jpg";
import DSC_2619 from "../assets/interior/DSC_2619.jpg";
import DSC_2621 from "../assets/interior/DSC_2621.jpg";
import DSC_2623 from "../assets/interior/DSC_2623.jpg";
import DSC_2631 from "../assets/interior/DSC_2631.jpg";
import DSC_2632 from "../assets/interior/DSC_2632.jpg";
import DSC_2633 from "../assets/interior/DSC_2633.jpg";
import DSC_2635 from "../assets/interior/DSC_2635.jpg";
import DSC_2637 from "../assets/interior/DSC_2637.jpg";
import DSC_2639 from "../assets/interior/DSC_2639.jpg";
import DSC_2640 from "../assets/interior/DSC_2640.jpg";
import DSC_2641 from "../assets/interior/DSC_2641.jpg";
import DSC_2644 from "../assets/interior/DSC_2644.jpg";
import DSC_2645 from "../assets/interior/DSC_2645.jpg";
import DSC_2646 from "../assets/interior/DSC_2646.jpg";
import DSC_2647 from "../assets/interior/DSC_2647.jpg";

const backyardImages = [
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

const interiorImages = [
  {
    original: `${DSC_2635}`,
    thumbnail: `${DSC_2635}`,
    description: "Front Entry",
  },
  {
    original: `${DSC_2632}`,
    thumbnail: `${DSC_2632}`,
    description: "Front Entry",
  },
  {
    original: `${DSC_2633}`,
    thumbnail: `${DSC_2633}`,
    description: "Front Entry",
  },
  {
    original: `${DSC_2644}`,
    thumbnail: `${DSC_2644}`,
    description: "Dining Room",
  },
  {
    original: `${DSC_2601}`,
    thumbnail: `${DSC_2601}`,
    description: "Dining Room To Kitchen",
  },
  {
    original: `${DSC_2592}`,
    thumbnail: `${DSC_2592}`,
    description: "Kitchen",
  },
  {
    original: `${DSC_2593}`,
    thumbnail: `${DSC_2593}`,
    description: "Kitchen",
  },
  {
    original: `${DSC_2595}`,
    thumbnail: `${DSC_2595}`,
    description: "Kitchen",
  },
  {
    original: `${DSC_2596}`,
    thumbnail: `${DSC_2596}`,
    description: "Kitchen",
  },
  {
    original: `${DSC_2597}`,
    thumbnail: `${DSC_2597}`,
    description: "Kitchen",
  },
  {
    original: `${DSC_2598}`,
    thumbnail: `${DSC_2598}`,
    description: "Kitchen ",
  },
  {
    original: `${DSC_2631}`,
    thumbnail: `${DSC_2631}`,
    description: "Living Room",
  },
  {
    original: `${DSC_2602}`,
    thumbnail: `${DSC_2602}`,
    description: "Living Room",
  },
  {
    original: `${DSC_2647}`,
    thumbnail: `${DSC_2647}`,
    description: "Living Room",
  },
  {
    original: `${DSC_2646}`,
    thumbnail: `${DSC_2646}`,
    description: "Living Room",
  },
  {
    original: `${DSC_2645}`,
    thumbnail: `${DSC_2645}`,
    description: "Living Room Bar",
  },
  {
    original: `${DSC_2602}`,
    thumbnail: `${DSC_2602}`,
    description: "Bathroom 1",
  },
  {
    original: `${DSC_2604}`,
    thumbnail: `${DSC_2604}`,
    description: "Bathroom 1",
  },
  {
    original: `${DSC_2615}`,
    thumbnail: `${DSC_2615}`,
    description: "Master Bedroom",
  },
  {
    original: `${DSC_2617}`,
    thumbnail: `${DSC_2617}`,
    description: "Master Bedroom",
  },
  {
    original: `${DSC_2614}`,
    thumbnail: `${DSC_2614}`,
    description: "Master Closet",
  },
  {
    original: `${DSC_2606}`,
    thumbnail: `${DSC_2606}`,
    description: "Master Bathroom",
  },
  {
    original: `${DSC_2607}`,
    thumbnail: `${DSC_2607}`,
    description: "Master Bathroom",
  },
  {
    original: `${DSC_2621}`,
    thumbnail: `${DSC_2621}`,
    description: "Master Bathroom",
  },
  {
    original: `${DSC_2610}`,
    thumbnail: `${DSC_2610}`,
    description: "Master Bathroom",
  },
  {
    original: `${DSC_2637}`,
    thumbnail: `${DSC_2637}`,
    description: "Bedroom 1",
  },
  {
    original: `${DSC_2639}`,
    thumbnail: `${DSC_2639}`,
    description: "Bedroom 1",
  },
  {
    original: `${DSC_2640}`,
    thumbnail: `${DSC_2640}`,
    description: "Bedroom 1",
  },
  {
    original: `${DSC_2641}`,
    thumbnail: `${DSC_2641}`,
    description: "Bedroom 1",
  },
  {
    original: `${DSC_2623}`,
    thumbnail: `${DSC_2623}`,
    description: "Security Panel",
  },
  {
    original: `${DSC_2619}`,
    thumbnail: `${DSC_2619}`,
    description: "iPad Touch Panel",
  },
  {
    original: `${DSC_2618}`,
    thumbnail: `${DSC_2618}`,
    description: "Thermostat",
  }
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
          <ImageGallery items={backyardImages} />
        </span>
      </div>
      <h2 className="text-center md:text-6xl text-4xl text-indigo-100 drop-shadow-lg">
        Interior
      </h2>
      <div className="flex items-center justify-center md:px-20 bg-indigo-950">
        <span className="content-center mb-20 m-8 md:w-[70%] w-[85%]">
          <ImageGallery items={interiorImages} />
        </span>
      </div>
    </div>
  );
};

export default Gallery;
