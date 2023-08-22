"use client";
import React, { useEffect, useState } from "react";
import NewPersonsCC from "./newPersonCC/NewPersonsCC";
import SelectSavedFriends from "./selectSaved&Friends/SelectSavedFriends";
import Image from "next/image";
import SoulmatesImg from "../soulmatesImg/SoulmatesImg";
import TryAgainResultBtn from "../tryAgainResultBtn/TryAgainResultBtn";

const genarateIcon = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const CompatibilityContent = ({
  setPersonSoulmates,
  isPersonSoulmates,
  checkSoulmatesBtnToggle,
  isCheckSoulmatesClicked,
  tryAgainBtnToggle,
}) => {
  const [checkBtnIsClicked, setCheckBtnIsClicked] = useState(false);
  return (
    <div className=" w-full h-full lg:p-7 xl:p-10 lg:overflow-hidden">
      <div className="left-1/2 -translate-x-1/2 w-full flex flex-col items-center absolute top-5 lg:relative lg:top-auto">
        <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#FFC8AA]">
          Check Compatibility
        </h1>
        <div className="text-[#FFC8AA] flex items-center justify-center gap-2 pt-1 ">
          <p className="text-sm lg:text-base">Western</p>
          <div className=" h-[18px] w-10 bg-[#674B53] rounded-full overflow-hidden p-[3px] flex items-center justify-center cursor-pointer">
            <button
              className="relative w-full h-full rounded-full "
              onClick={() => setCheckBtnIsClicked(!checkBtnIsClicked)}>
              <div
                className={`absolute top-0 duration-500  h-3 w-3 bg-[#D9D9D9] rounded-full ${
                  checkBtnIsClicked ? "translate-x-[22px]" : "left-0"
                }`}></div>
            </button>
          </div>
          <p className="text-sm lg:text-base">Chines</p>
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-0 lg:justify-between lg:-translate-y-20 z-5 mt-[7%]">
        {/* soulmates img and btn show only for mobile devices */}
        {isCheckSoulmatesClicked && (
          <div className="lg:hidden">
            <SoulmatesImg
              isCheckSoulmatesClicked={isCheckSoulmatesClicked}></SoulmatesImg>
            <TryAgainResultBtn
              isCheckSoulmatesClicked={isCheckSoulmatesClicked}
              tryAgainBtnToggle={tryAgainBtnToggle}></TryAgainResultBtn>
          </div>
        )}
        <NewPersonsCC
          genarateIcon={genarateIcon}
          setPersonSoulmates={setPersonSoulmates}></NewPersonsCC>
        {/* Set soulmates by add person clicking the btn */}
        <div className="absolute top-[8%] sm:top-[12%] lg:top-auto lg:relative lg:mt-5 2xl:mt-0 flex flex-col items-center z-6 lg:h-[80%] justify-between">
          <div className="flex flex-col items-center">
            <div className="flex gap-[45px]">
              <div className="w-[52px] h-[52px] bg-[#c8c5c55f] rounded-full flex justify-center items-center">
                {isPersonSoulmates.length > 0 && isPersonSoulmates[0] === 1 && (
                  <Image
                    alt="soulmates"
                    src={"https://i.ibb.co/48tFJqs/libra-modified-1-1.png"}
                    width={33}
                    height={33}></Image>
                )}
              </div>
              <div className="w-[50px] h-[50px] bg-[#c8c5c55f] rounded-full flex justify-center items-center">
                {isPersonSoulmates.length > 0 && isPersonSoulmates[1] === 1 && (
                  <Image
                    alt="soulmates"
                    src={"https://i.ibb.co/48tFJqs/libra-modified-1-1.png"}
                    width={33}
                    height={33}></Image>
                )}
              </div>
            </div>
            {isCheckSoulmatesClicked || (
              <button
                onClick={checkSoulmatesBtnToggle}
                className="bg-[#674B53] text-[#E5BD9D] px-[11px] py-1 rounded-3xl mt-4 text-sm">
                Check soulmates
              </button>
            )}
          </div>
          {/* the buttons show after check soulmates btn clicked for desktop view */}
          <div className="hidden lg:inline-block">
            <TryAgainResultBtn
              isCheckSoulmatesClicked={isCheckSoulmatesClicked}
              tryAgainBtnToggle={tryAgainBtnToggle}></TryAgainResultBtn>
          </div>
        </div>
        <SelectSavedFriends genarateIcon={genarateIcon}></SelectSavedFriends>
      </div>
    </div>
  );
};

export default CompatibilityContent;
