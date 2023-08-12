"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PredictCards = ({ togglePredictDetails, showPredictDetails, selectedCards }) => {
  console.log(selectedCards)
  let genarateCards = [1, 2, 3, 4, 5, 6, 7];
  const [btnTransition, setBtnTransition] = useState("-translate-y-[120px] ");
  const [cardOpacity, setCardOpacity] = useState("opacity-0");
  if(selectedCards.length > 0) {
    genarateCards = selectedCards;
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setBtnTransition("");
      setCardOpacity("opacity-100");
    }, 5);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className="relative pb-[70px] w-fit h-fit">
      <div
        className={`grid grid-cols-3 gap-y-3 justify-items-center lg:flex  gap-x-3 ${cardOpacity} duration-700 w-full`}
      >
        {genarateCards.map((index) => (
          <Image
            key={index}
            src={"https://i.ibb.co/tBs7rDd/images-4.png"}
            alt="elipsis"
            width={100}
            height={100}
            className="md:w-full md:h-full w-[80px] h-[100px]"
          ></Image>
        ))}
      </div>
      {
        (selectedCards.length <= 0 || selectedCards.length > 5) &&
        <button
        onClick={togglePredictDetails}
        className={`text-[#E5BD9D] bg-[#674B53] px-3 text-sm lg:text-base rounded-full bottom-0 absolute left-1/2 -translate-x-1/2 ${btnTransition} duration-700 ${
          showPredictDetails ? " hidden" : ""
        }`}
      >
        Predict future
      </button>
      }
    </div>
  );
};

export default PredictCards;
