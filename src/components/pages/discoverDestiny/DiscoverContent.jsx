"use client";
import Image from "next/image";
import React, { useState } from "react";
import PredictCards from "./predictCards/PredictCards";
import PredictDetails from "./predictDetails/PredictDetails";

const genarateCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DiscoverContent = () => {
  const [selectRandomCards, setSelectRandomCards] = useState(false);
  const [showPredictDetails, setShowPredictDetails] = useState(false);
  const togglePredictDetails = () => {
    setShowPredictDetails(!showPredictDetails);
  }
  const resetPredict = () =>{
    setShowPredictDetails(false)
    setSelectRandomCards(false)
  }
  return (
    <div className=" w-full h-full lg:p-7 xl:p-10  relative">
      <div className="w-full flex flex-col items-center  relative">
        <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#FFC8AA]">
          Choose cards to predict future
        </h1>
        {/* TODO: some design messing here */}
        <button
          onClick={() => setSelectRandomCards(!selectRandomCards)}
          className={`text-[#E5BD9D] bg-[#674B53] absolute -bottom-[44px] px-3 text-sm lg:text-base rounded-full duration-700 ${selectRandomCards ? " hidden" : ""}`}
        >
          Select random cards
        </button>
      </div>
      <div className="flex flex-col items-center pt-28 lg:pt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-28">
        {selectRandomCards && <PredictCards togglePredictDetails={togglePredictDetails} showPredictDetails={showPredictDetails}></PredictCards>}
        {showPredictDetails && <PredictDetails resetPredict={resetPredict}></PredictDetails>}
      </div>
      {/* card containers */}
      <div className="h-ful w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-0 lg:justify-between pt-10 lg:pt-16">
        <div className={`w-[85%] sm:w-[60%] md:w-[27%] xl:w-[25%]  h-[500px] rounded-[50px] p-4  text-[#FFC8AA] lg:flex flex-col  bg-opacity-60 ${selectRandomCards && 'hidden'}`}>
          <h1 className="text-base lg:text-3xl font-berlin text-center pb-4">
            Cards
          </h1>
          <div className="grid grid-cols-3 gap-y-3 gap-x-3">
            {genarateCards.map((index) => (
              <Image
                key={index}
                src={"https://i.ibb.co/tBs7rDd/images-4.png"}
                alt="elipsis"
                width={200}
                height={200}
                className="w-full h-full"
              ></Image>
            ))}
          </div>
        </div>
        <div className="w-[85%] sm:w-[60%] md:w-[27%] xl:w-[25%] default-shadow  h-[500px] rounded-[50px] p-4  xl:px-7 text-[#FFC8AA] bg-opacity-60">
          <h1 className="text-base lg:text-3xl font-berlin text-center">
            Prediction history
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center">
            {genarateCards.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[50px] h-[50px] bg-[#88848D] rounded-full flex justify-center items-center"
              >
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={33}
                  height={33}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverContent;
