import { heroImg } from "../assets";

const HeroSect = () => {
  return (
    <div className="mb-10  ">
      <div className="flex flex-col md:flex-row mt-28 items-center justify-between py-2 px-8 md:px-14">
        <div className="flex flex-col w-full md:w-1/2">
          <h1>
            Rent a <span className="text-spanColor">Place</span> away from{" "}
            <span>Home</span> in the <span>Metaverse</span>
          </h1>
          <p className="text-dimBlack font-redRose text-2xl mt-6">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className=" mt-10  rounded-lg p-4 items-start">
            <input
              type="search"
              placeholder="search for location"
              className="border border-r-0  border-gray-400 p-2 rounded-tl-lg rounded-bl-lg outline-none w-[60%]"
            />
            <button className="bg-spanColor py-2 px-4 md:px-14 rounded-tr-lg rounded-br-lg text-white font-redRose font-normal border border-spanColor">
              Search
            </button>
          </div>
        </div>
        {/*  */}
        <div className="mt-10 md:mt-0">
          <img src={heroImg} alt="heroSection-Image" />
        </div>
      </div>
      <div className="partnerStyle">
        <img src="/MBToken.svg" alt="MBToken-Icon" id="imgStyle" />
        <img src="/MetaMask.svg" alt="MetaMask-Icon" id="imgStyle" />
        <img src="/OpenSea.svg" alt="OpenSea-Icon" id="imgStyle" />
      </div>
    </div>
  );
};

export default HeroSect;
