import React from "react";

import { footerLogo, fbIcon, instIcon, twitIcon } from "../../assets";

const Footer = (props) => {
  return (
    <div className="bg-black mt-10 mb-5 py-16 px-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-8">
        {/* 01 */}
        <div className="flex flex-col space-y-16">
          <img src={footerLogo} alt="footerLogo-Image" />

          <div className="flex flex-row space-x-10">
            <a href="#">
              {" "}
              <img src={fbIcon} alt="facebook-Icon" />
            </a>
            <a href="#">
              <img src={instIcon} alt="instagram-Icon" />
            </a>

            <a href="#">
              {" "}
              <img src={twitIcon} alt="twitter-Icon" />
            </a>
          </div>

          <p className="text-white">&copy;2022 Metabnb</p>
        </div>

        {/* 02 */}
        <div className="flex flex-col text-white">
          <h6 className="mb-4 text-xl font-semibold">Community</h6>
          <nav className="flex flex-col ">
            <ul className="space-y-3 md:space-y-6 font-redRose">
              <li>
                <a href="#">NFT</a>
              </li>
              <li>
                <a href="#">Tokens</a>
              </li>
              <li>
                <a href="#">Landlords</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* 03 */}
        <div className="flex flex-col text-white">
          <h6 className="mb-4 text-xl font-semibold">Places</h6>
          <nav className="flex flex-col ">
            <ul className="space-y-3 md:space-y-6 font-redRose">
              <li>
                <a href="#">Castle</a>
              </li>
              <li>
                <a href="#">Farms</a>
              </li>
              <li>
                <a href="#">Beach</a>
              </li>
              <li>
                <a href="#">Learn more</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* 04 */}
        <div className="flex flex-col text-white">
          <h6 className="mb-4 text-xl font-semibold">About us</h6>
          <nav className="flex flex-col ">
            <ul className="space-y-3 md:space-y-6 font-redRose">
              <li>
                <a href="#">Road map</a>
              </li>
              <li>
                <a href="#">Creators</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
