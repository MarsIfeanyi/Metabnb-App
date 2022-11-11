import React from "react";
import { Link } from "react-router-dom";

const ConnectWallet = () => {
  return (
    <div>
      <button className="bg-gradMajor text-white py-2 px-4 rounded-lg">
        <Link to="/wallet-connection"> ConnectWallet</Link>
      </button>
    </div>
  );
};

export default ConnectWallet;
