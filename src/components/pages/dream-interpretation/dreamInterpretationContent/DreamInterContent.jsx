"use client";
import Image from "next/image";
import React, { useState } from "react";
import DreamAds from "../dream-ads/DreamAds";

const DreamInterContent = ({ genarateIcon }) => {
  const [checkBtnIsClicked, setCheckBtnIsClicked] = useState(false);
  const [isPremiumClicked, setIsPremiumClicked] = useState(false);
  return (
    <div className=" w-full h-full lg:p-7 xl:p-10 lg:overflow-hidden">
      <div className="left-1/2 -translate-x-1/2 w-full flex flex-col items-center absolute top-14 lg:relative lg:top-auto z-10">
        <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#FFC8AA]">
          Interpret your dream
        </h1>
        <div className="text-[#FFC8AA] flex items-center justify-center gap-2 pt-1 ">
          <p className="text-sm lg:text-base">Symbols meaning</p>
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
          <p className="text-sm lg:text-base">Full dream meaning</p>
        </div>
      </div>
      {/* ads container here */}
      <div className="lg:absolute top-4 right-7 w-full flex justify-center lg:justify-end z-0 ">
        <DreamAds isPremiumClicked={isPremiumClicked} setIsPremiumClicked={setIsPremiumClicked}></DreamAds>
      </div>
      <div className="h-ful w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-8 lg:justify-between pt-10 lg:pt-20 h-[500px] ">
        <div className="w-[85%] sm:w-[60%] md:min-w-[20%] lg:w-[20%] 2xl:w-[250px] default-shadow bg-[#20192A] h-full rounded-[50px] p-2 text-[#FFC8AA] flex flex-col  bg-opacity-60">
          <h1 className="text-base lg:text-2xl font-berlin text-center">
            Select symbols
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center pb-3">
            {genarateIcon.slice(0, 20).map((index) => (
              <div
                key={index}
                className="w-[40px] xl:w-[52px] xl:h-[52px] h-[40px] bg-[#88848D] rounded-full flex justify-center items-center">
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
        <div className="w-[85%] sm:w-[60%] md:min-w-[20%] lg:w-[20%] 2xl:w-[250px] default-shadow bg-[#20192A] h-full rounded-[50px] text-[#FFC8AA] bg-opacity-60 pb-8 lg:mt-[4%]">
          <h1 className="text-base lg:text-2xl font-berlin text-center mt-2">
            Dream history
          </h1>
          <div className="flex gap-2 flex-wrap pt-4 justify-center px-0.5">
            {genarateIcon.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] xl:w-[52px] xl:h-[52px] bg-[#88848D] rounded-full flex justify-center items-center">
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

export default DreamInterContent;
