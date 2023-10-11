import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-base text-indigo-800 font-semibold py-4">
            Copyright © <span id="get-current-year">2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
