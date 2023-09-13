"use client";
import Image from "next/image";
import React, { useState } from "react";
import PredictCards from "./predictCards/PredictCards";
import PredictDetails from "./predictDetails/PredictDetails";
import CardContainer from "./cardContainer/CardContainer";
import PredictHistoryCard from "./predictHistoryCard/PredictHistoryCard";
import AdsCard from "@/components/shared/adsCard/AdsCard";

const genarateCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DiscoverContent = () => {
  const [isPremiumClicked, setIsPremiumClicked] = useState(false);
  const [selectRandomCards, setSelectRandomCards] = useState(false);
  const [showPredictDetails, setShowPredictDetails] = useState(false);
  const [selectedCards, setSelectCard] = useState([]);
  const togglePredictDetails = () => {
    setShowPredictDetails(!showPredictDetails);
  };
  // reset predict
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
    <div className=" w-full h-full lg:p-7 xl:p-10 lg:relative">
      <div className=" left-1/2 -translate-x-1/2 w-full flex flex-col items-center absolute top-14 lg:relative lg:top-auto z-10">
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
      {/* ads container here for premium version */}
      <div className="lg:absolute top-0 right-0 w-full lg:flex lg:justify-end z-0 ">
        <AdsCard
            isPremiumClicked={isPremiumClicked}
            setIsPremiumClicked={setIsPremiumClicked}
            img={'/ads-images/tarot-ads.png'}
            description={'Play tarot with our Ai powered configuration Discover the most valuable cards'}
          ></AdsCard>
      </div>
      <div className="flex flex-col items-center pt-10 md:pt-28 lg:pt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-28 ">
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
      <div className="h-full w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-0 lg:justify-between lg:pt-16 ">
        <CardContainer
          selectRandomCards={selectRandomCards}
          genarateCards={genarateCards}
          setCard={setCard}></CardContainer>
          {/* predict history card */}
        <PredictHistoryCard genarateCards={genarateCards}></PredictHistoryCard>
      </div>
    </div>
  );
};

export default DiscoverContent;
