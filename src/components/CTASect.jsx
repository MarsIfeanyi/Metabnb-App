import React from "react";

import { ctaImg } from "../assets";

const CTASect = () => {
  return (
    <div className="bg-spanColor mt-10 w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between py-12 px-10">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-white font-redRose font-semibold text-2xl md:text-5xl mb-5">
            Metabnb NFTs
          </h2>
          <p className="text-white font-redRose text-xl">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="bg-white text-spanColor py-3 px-6 rounded-lg mt-10">
            Learn more
          </button>
        </div>

        <div className="w-1/2 p-4">
          <img src={ctaImg} alt="cta-Image" />
        </div>
      </div>
    </div>
  );
};

export default CTASect;
