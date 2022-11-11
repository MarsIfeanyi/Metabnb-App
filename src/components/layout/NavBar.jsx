import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import ConnectWallet from "../ConnectWallet";
import HeroSect from "../HeroSect";

const NavBar = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10 md:mt-6 items-center justify-between space-y-10 p-2">
        <header>
          <img src={logo} alt="logo-Image" />
        </header>

        <nav>
          <ul className="flex flex-row space-x-8">
            <li>
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
