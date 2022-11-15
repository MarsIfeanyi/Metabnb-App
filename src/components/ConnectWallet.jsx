import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ConnectWallet = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-gradMajor text-white py-2 px-4 rounded-lg "
      >
        ConnectWallet
      </button>

      {modal && (
        <div className="modal bg-white rounded-2xl  md:items-center md:mx-auto md:justify-center mt-10 border border-gray-200 shadow-xl px-4 md:pb-5">
          <div className="over" onClick={toggleModal}></div>

          <div className="connect max-w-[20rem] md:max-w-[50rem]">
            <div className="flex flex-row items-center justify-between">
              <h2 className="font-redRose text-xl font-semibold  px-10 py-6">
                Connect Wallet
              </h2>
              <button className="mr-10">
                <img
                  src="/x-close.png"
                  alt="x-close-Icon"
                  onClick={toggleModal}
                />
              </button>
            </div>
            <hr className="border-1 border-b-dimGray" />

            <h4 className="px-10 mt-4 font-redRose text-dimBlack2">
              Choose your preferred wallet:
            </h4>

            <div className="flex flex-col pt-4 pb-6 px-10 space-y-6 ">
              <button className="flex flex-row items-center justify-between px-4 py-2 border border-dimGray rounded-lg ">
                <img src="/metaMask.png" alt="metaMask-Wallet" />
                <img src="/arrow.png" alt="arrow-Icon" />
              </button>

              <button className="flex flex-row px-4 py-2 border border-dimGray rounded-lg items-center justify-between ">
                <img src="/walletConnect.png" alt="Wallet-connect" />
                <img src="/arrow.png" alt="arrow-Icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
