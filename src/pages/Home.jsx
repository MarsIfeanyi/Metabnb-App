import React from "react";
import { useState } from "react";
import ConnectWallet from "../components/ConnectWallet";

import CTASect from "../components/CTASect";
import HeroSect from "../components/HeroSect";
import MainSect from "../components/MainSect";
import WalletModal from "../components/WalletModal";
import WalletConnection from "./WalletConnection";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <HeroSect />

      {/* Modal */}
      <button onClick={() => setOpenModal(true)} className="modalButton">
        {/* Modal */}
      </button>
      <WalletModal open={openModal} onClose={() => setOpenModal(false)} />

      <MainSect />

      <CTASect />
    </div>
  );
};

export default Home;
