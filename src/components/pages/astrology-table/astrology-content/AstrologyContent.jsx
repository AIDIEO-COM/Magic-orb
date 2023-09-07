"use client";
import React, { useState } from "react";
import BirthCart from "./birthCart/BirthCart";
import AdsCard from "@/components/shared/adsCard/AdsCard";
import SelectSavedCart from "./selectSavedCart/SelectSavedCart";
import NewPersonCart from "./newPersonCart/NewPersonCart";
import PlanetPositioningCart from "@/components/shared/planetPositioningCart/PlanetPositioningCart";

const genarateIcon = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const AstrologyContent = () => {
  const [checkBtnIsClicked, setCheckBtnIsClicked] = useState(false);
  const [isBirthCartOpen, setIsBirthChartOpen] = useState(false);
  const [isPremiumClicked, setIsPremiumClicked] = useState(false);
  return (
    <div className=" w-full h-full lg:p-7 xl:p-10 lg:overflow-hidden ">
      <div className="w-[96%] lg:w-full absolute top-14 lg:relative lg:top-auto ">
        <div className="h-fit w-full lg:flex  justify-end lg:pb-6 relative">
          <div className="flex flex-col items-center relative lg:absolute top-0 left-1/2 -translate-x-1/2">
            <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#DBCBF4]">
              Create birth chart
            </h1>
            <div className="text-[#DBCBF4] flex items-center justify-center gap-2 pt-1 ">
              <p className="text-sm lg:text-base">Western</p>
              <div className=" h-[18px] w-10 bg-[#674B53] rounded-full overflow-hidden p-[3px] flex items-center justify-center cursor-pointer">
                <button
                  className="relative w-full h-full rounded-full "
                  onClick={() => setCheckBtnIsClicked(!checkBtnIsClicked)}
                >
                  <div
                    className={`absolute top-0 duration-500  h-3 w-3 bg-[#D9D9D9] rounded-full ${
                      checkBtnIsClicked ? "translate-x-[22px]" : "left-0"
                    }`}
                  ></div>
                </button>
              </div>
              <p className="text-sm lg:text-base">Chines</p>
            </div>
          </div>
          {/* ads container here for premium version */}
          <AdsCard
            isPremiumClicked={isPremiumClicked}
            setIsPremiumClicked={setIsPremiumClicked}
          ></AdsCard>
        </div>
      </div>
      {/* see planet positioning card mobile view */}
      {isPremiumClicked && (
        <div className="lg:hidden">
          <PlanetPositioningCart></PlanetPositioningCart>
        </div>
      )}
      {/* content here */}
      <div
        className={`w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-7 sm:gap-20 lg:gap-0 lg:justify-between ${
          isPremiumClicked || "pt-[190px]"
        } sm:pt-5 md:pt-10 lg:pt-0 h-full lg:h-[460px]  ${
          isPremiumClicked ? "lg:mt-[75px]" : "lg:mt-0"
        }`}
      >
        <NewPersonCart
          setIsBirthChartOpen={setIsBirthChartOpen}
          genarateIcon={genarateIcon}
        ></NewPersonCart>
        {/* birth cart open when create a new chat */}
        <BirthCart
          isBirthCartOpen={isBirthCartOpen}
          setIsBirthChartOpen={setIsBirthChartOpen}
        ></BirthCart>
        <SelectSavedCart genarateIcon={genarateIcon}></SelectSavedCart>
      </div>
      {/* see planet positioning card desktop view */}
      {isPremiumClicked && (
        <div className="hidden lg:inline-block">
          <PlanetPositioningCart></PlanetPositioningCart>
        </div>
      )}
    </div>
  );
};

export default AstrologyContent;
