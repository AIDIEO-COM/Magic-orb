"use client"
import React, { useState } from 'react';

const RadioOption = () => {
  const [cardSide, setCardSide] = useState("front");

    return (
        <div className="">
        <div className="flex items-center gap-2 mb-2 ">
          <input
            onClick={() => setCardSide("front")}
            checked={cardSide === "front"}
            type="radio"
            name="card-front-side"
            className="w-4 h-4 rounded-full border-[#866345] cursor-pointer "
          />
          <p className="text-[#DBCBF4] text-xs sm:text-sm">Card front side</p>
        </div>
        <div className="flex items-center gap-2 mb-2 ">
          <input
            onClick={() => setCardSide("back")}
            checked={cardSide === "back"}
            type="radio"
            name="card-back-side"
            className="w-4 h-4 rounded-full border-[#866345] cursor-pointer"
          />
          <p className="text-[#DBCBF4] text-xs sm:text-sm">Card back side</p>
        </div>
      </div>
    );
};

export default RadioOption;