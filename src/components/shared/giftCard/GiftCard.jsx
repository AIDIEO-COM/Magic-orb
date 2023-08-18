"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GiftCard = ({ home }) => {
  const [takeCardIsClicked, setTakeCardIsClicked] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
        setTakeCardIsClicked(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [takeCardIsClicked]);

  return (
    <div
      className={`p-5 ${
        home ? "mt-4 w-full lg:h-[90%] 2xl:w-44" : "xl:w-36 2xl:w-48 xl:h-full"
      } mx-auto     2xl:h-[250px]  rounded-xl bg-[#1A1725] shadow-[10px_10px_8px10px#00000024] default-shadow relative`}
    >
      <button
        onClick={() => setTakeCardIsClicked(false)}
        className= {`text-xs w-full px-2 py-3 font-berlin text-[#E5BD9D] absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 duration-500 ${takeCardIsClicked ? 'opacity-100' : 'opacity-0'}`}
      >
        <p>You received one coupon</p>
      </button>
      <div className={`flex flex-col w-full h-full items-center justify-between duration-500 ${takeCardIsClicked ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-[#E5BD9D] text-xs font-semibold text-center">
          Redeem your gift card
        </p>
        <Image
          src="https://i.ibb.co/GCDyhJw/Default-cosmic-pink-gift-card-0-3507d5d2-e214-4bf6-b126-ff41039a25cf-0-1.png"
          alt="gift card"
          width={108}
          height={148}
          className="lg:w-[70px] lg:h-[100px] xl:w-[80px] xl:h-[105px] 2xl:w-[108px] 2xl:h-[148px]"
        />
        <button
          onClick={() => setTakeCardIsClicked(true)}
          className="mx-auto text-[#E5BD9D] text-[10px] sm:text-xs bg-[#674B53] px-1 sm:px-2 font-normal tracking-wide rounded-full py-1 "
        >
          Take the card
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
