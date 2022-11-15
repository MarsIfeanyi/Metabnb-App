import React from "react";
import { Link } from "react-router-dom";
import { mobileLogo, logo } from "../../assets";
import ConnectWallet from "../ConnectWallet";

const NavBar = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-0 md:mt-6 items-start md:items-center md:mx-auto justify-between space-y-10 py-6 px-12 md:px-8 max-w-7xl shadow-sm bg-spanColor md:bg-white ">
        <header>
          <img src={logo} alt="logo-Image" className="hidden md:flex" />
          <img
            src={mobileLogo}
            alt="mobileScreen-Logo"
            className="flex md:hidden"
          />
        </header>

        <nav>
          <ul className=" hidden md:flex flex-row space-x-8 font-redRose text-xl  ">
            <li className="hover:border-b-2 border-spanColor">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/place-to-stay"> Place to stay</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>

          <ul className="grid grid-cols-2 md:hidden gap-2 text-white text-xl mt-4">
            <li className="hover:border-b-2 border-spanColor">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/place-to-stay"> Place to stay</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>
        </nav>
        <ConnectWallet />
      </div>
    </>
  );
};

export default NavBar;
