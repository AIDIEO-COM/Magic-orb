"use client";
import Image from "next/image";
import React, { useState } from "react";
import PredictCards from "./predictCards/PredictCards";
import PredictDetails from "./predictDetails/PredictDetails";
import CardContainer from "./cardContainer/CardContainer";

const genarateCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DiscoverContent = () => {
  const [selectRandomCards, setSelectRandomCards] = useState(false);
  const [showPredictDetails, setShowPredictDetails] = useState(false);
  const [selectedCards, setSelectCard] = useState([]);
  const togglePredictDetails = () => {
    setShowPredictDetails(!showPredictDetails);
  };
  const resetPredict = () => {
    setShowPredictDetails(false);
    setSelectRandomCards(false);
    setSelectCard([]);
  };
  // set card when click
  const setCard = (index) => {
    selectedCards.length < 7 && setSelectCard([...selectedCards, index]);
    setSelectRandomCards(true);
  };
  return (
    <div className=" w-full h-full lg:p-7 xl:p-10">
      <div className="left-1/2 -translate-x-1/2 w-full flex flex-col items-center absolute top-14 lg:relative lg:top-auto ">
        <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#FFC8AA]">
          Choose cards to predict future
        </h1>
        <button
          onClick={() => setSelectRandomCards(!selectRandomCards)}
          className={`text-[#E5BD9D] bg-[#674B53] absolute -bottom-[44px] px-3 text-sm lg:text-base rounded-full duration-700 ${
            selectRandomCards || selectedCards.length > 0 ? " hidden" : ""
          }`}>
          Select random cards
        </button>
      </div>
      <div className="flex flex-col items-center pt-10 md:pt-28 lg:pt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-28">
        {selectRandomCards && (
          <PredictCards
            selectedCards={selectedCards}
            togglePredictDetails={togglePredictDetails}
            showPredictDetails={showPredictDetails}></PredictCards>
        )}
        {showPredictDetails && (
          <PredictDetails resetPredict={resetPredict}></PredictDetails>
        )}
      </div>
      {/* card containers */}
      <div className="h-full w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-0 lg:justify-between lg:pt-16">
        <CardContainer
          selectRandomCards={selectRandomCards}
          genarateCards={genarateCards}
          setCard={setCard}></CardContainer>
        <div className="w-[85%] mt-5 lg:mt-0 sm:w-[60%] md:w-[27%] xl:w-[25%] default-shadow md:shadow-none lg:default-shadow  h-[500px] rounded-[50px] p-4  xl:px-7 text-[#FFC8AA] bg-opacity-60">
          <h1 className="text-base lg:text-3xl font-berlin text-center">
            Prediction history
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center">
            {genarateCards.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[50px] h-[50px] bg-[#88848D] rounded-full flex justify-center items-center">
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={33}
                  height={33}></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverContent;
