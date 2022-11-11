import React from "react";

const Places = () => {
  return (
    <div className="container mt-16  p-8 max-w-7xl items-center mx-auto">
      <div
        className=" hidden md:flex flex-row  
       justify-between p-2 "
      >
        <ul className="flex flex-row space-x-2 md:space-x-10 items-start md:ml-10 font-redRose text-dimBlack ">
          <li>
            <a href="#">Resturant</a>
          </li>
          <li>
            <a href="#">Cottage</a>
          </li>
          <li>
            <a href="#">Castle</a>
          </li>
          <li>
            <a href="#">Fantast city</a>
          </li>
          <li>
            <a href="#">Beach</a>
          </li>
          <li>
            <a href="#">Carbins</a>
          </li>
          <li>
            <a href="#">Off-grid</a>
          </li>
          <li>
            <a href="#">Farm</a>
          </li>
        </ul>

        <div className="relative border-2 rounded-lg p-2 flex  ml-28 w-1/4 space-x-0 ">
          <input
            type="text"
            placeholder="Location"
            className=" z-10 outline-none text-dimBlack "
          />
          <span>
            {" "}
            <img
              src="/settingIcon.png"
              alt="setting-Icon"
              className=" z-20 absolute top-2 left-56"
            />
          </span>
        </div>
      </div>

      <div>
        <ul className=" grid grid-cols-4 gap-2 md:hidden space-x-0 items-start  md:ml-10 font-redRose text-dimBlack">
          <li>
            <a href="#">Resturant</a>
          </li>
          <li>
            <a href="#">Cottage</a>
          </li>
          <li>
            <a href="#">Castle</a>
          </li>
          <li>
            <a href="#">Fantast city</a>
          </li>
          <li>
            <a href="#">Beach</a>
          </li>
          <li>
            <a href="#">Carbins</a>
          </li>
          <li>
            <a href="#">Off-grid</a>
          </li>
          <li>
            <a href="#">Farm</a>
          </li>
        </ul>

        <div className="relative border-2 rounded-lg p-2 flex md:hidden mt-8 ml-28 w-1/2 space-x-0">
          <input
            type="text"
            placeholder="Location"
            className=" z-10 outline-none text-dimBlack "
          />
          <img
            src="/settingIcon.png"
            alt="setting-Icon"
            className=" z-20 absolute top-2 left-40"
          />
        </div>
      </div>

      <div className="gridContainer">
        {/* 09 */}
        <div className="imgContStyle">
          <img src="/desertKing09.png" alt="desertKing09-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 10 */}

        <div className="imgContStyle">
          <img src="/desertKing10.png" alt="desertKing10-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 11 */}

        <div className="imgContStyle">
          <img src="/desertKing11.png" alt="desertKing11-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 12 */}

        <div className="imgContStyle">
          <img src="/desertKing12.png" alt="desertKing12-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 13 */}

        <div className="imgContStyle">
          <img src="/desertKing13.png" alt="desertKing13-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 14 */}

        <div className="imgContStyle">
          <img src="/desertKing14.png" alt="desertKing14-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 15 */}

        <div className="imgContStyle">
          <img src="/desertKing15.png" alt="desertKing15-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 16 */}

        <div className="imgContStyle">
          <img src="/desertKing16.png" alt="desertKing16-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 17 */}

        <div className="imgContStyle">
          <img src="/desertKing17.png" alt="desertKing17-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 18 */}

        <div className="imgContStyle">
          <img src="/desertKing18.png" alt="desertKing18-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 10 */}

        <div className="imgContStyle">
          <img src="/desertKing19.png" alt="desertKing19-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 20 */}

        <div className="imgContStyle">
          <img src="/desertKing20.png" alt="desertKing20-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 21 */}

        <div className="imgContStyle">
          <img src="/desertKing21.png" alt="desertKing21-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 22 */}

        <div className="imgContStyle">
          <img src="/desertKing22.png" alt="desertKing22-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 23 */}

        <div className="imgContStyle">
          <img src="/desertKing23.png" alt="desertKing23-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>

        {/* 24 */}

        <div className="imgContStyle">
          <img src="/desertKing24.png" alt="desertKing24-Image" />
          <div className="flex flex-col ">
            <div className="contentStyle01">
              <h5>Desert king</h5>
              <h4 className="font-bold">1MBT per night</h4>
            </div>
            <div className="contentStyle02">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>

          <img src="/starRating.png" alt="starRating-Image" />
        </div>
      </div>
    </div>
  );
};

export default Places;
