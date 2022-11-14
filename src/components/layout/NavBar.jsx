import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import ConnectWallet from "../ConnectWallet";

const NavBar = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10 md:mt-6 items-center mx-auto justify-between space-y-10 py-2 px-8 max-w-7xl shadow-sm">
        <header>
          <img src={logo} alt="logo-Image" />
        </header>

        <nav>
          <ul className="flex flex-row space-x-8 font-redRose text-xl  ">
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
