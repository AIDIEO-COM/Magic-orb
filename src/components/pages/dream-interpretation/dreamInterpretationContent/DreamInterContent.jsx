"use client"
import Image from "next/image";
import React, { useState } from "react";

const DreamInterContent = ({genarateIcon}) => {
    const [checkBtnIsClicked, setCheckBtnIsClicked] = useState(false);
  return (
    <div className=" w-full h-full lg:p-7 xl:p-10 lg:overflow-hidden">
      <div className="left-1/2 -translate-x-1/2 w-full flex flex-col items-center absolute top-14 lg:relative lg:top-auto">
        <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#FFC8AA]">
          Interpret your dream
        </h1>
        <div className="text-[#FFC8AA] flex items-center justify-center gap-2 pt-1 ">
          <p className="text-sm lg:text-base">Symbols meaning</p>
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
          <p className="text-sm lg:text-base">Full dream meaning</p>
        </div>
      </div>
      <div className="h-ful w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-8 lg:justify-between pt-10 lg:pt-20">
        <div className="w-[85%] sm:w-[60%] md:min-w-[27%] lg:min-w-[30%] 2xl:w-[22%] default-shadow bg-[#20192A] min-h-[400px] 2xl:min-h-[500px] rounded-[50px] p-4 xl:px-5 text-[#FFC8AA] flex flex-col  bg-opacity-60">
          <h1 className="text-base lg:text-3xl font-berlin text-center">
            Select symbols
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center">
            {genarateIcon.map((index) => (
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
        <div className="w-[85%] sm:w-[60%] md:min-w-[27%] lg:min-w-[30%] 2xl:w-[22%] default-shadow bg-[#20192A] min-h-[400px] 2xl:min-h-[500px]  rounded-[50px] p-4 xl:px-8 text-[#FFC8AA] bg-opacity-60">
          <h1 className="text-base lg:text-3xl font-berlin text-center">
            Dream history
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center">
            {genarateIcon.slice(0, 10).map((index) => (
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

export default DreamInterContent;
