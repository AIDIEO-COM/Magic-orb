import Image from "next/image";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const genarateIcon = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const CompatibilityContent = () => {
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
        <div className="mt-3 flex flex-col items-center">
          <div className="flex gap-[45px]">
            <div className="w-[52px] h-[52px] bg-[#FFFFFF45] rounded-full flex justify-center items-center"></div>
            <div className="w-[50px] h-[50px] bg-[#FFFFFF45] rounded-full flex justify-center items-center"></div>
          </div>
          <button className="bg-[#674B53] text-[#E5BD9D] px-[11px] py-1 rounded-3xl mt-4 text-sm">
            Check soulmates
          </button>
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-0 lg:justify-between lg:-translate-y-20">
        <div className="w-[85%] sm:w-[60%] md:w-[27%] xl:w-[20%] default-shadow bg-[#20192A]  rounded-[50px] px-3 py-4  text-[#FFC8AA] flex flex-col justify-between bg-opacity-60 mt-6 md:mt-0">
          <h1 className="text-base lg:text-2xl font-berlin text-center">
            New persons
          </h1>
          <div className="mt-6">
            <p className="pl-[15%]">&lsaquo; 1998 &rsaquo;</p>
            <div className="flex gap-[6px] flex-wrap gap-y-3">
              <p className="pl-[7%] pr-[50px]">&lsaquo; June &rsaquo;</p>
              {genarateIcon.map((index) => (
                <Image
                  key={index}
                  src={"https://i.ibb.co/3SHJXn0/Ellipse-23.png"}
                  alt="elipsis"
                  width={25}
                  height={25}></Image>
              ))}
            </div>
          </div>
          <div className=" space-y-4 flex flex-col items-center pb-4 mt-6">
            <div className="h-7 bg-[#624652] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-time"
                className="outline-none w-[80%] h-full bg-transparent text-[#FFC8AA] text-sm pl-1"
                placeholder="Birth time"></input>
              <button className="outline-none w-fit px-2 text-[#FFC8AA] h-full bg-[#FFC8AA] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#624652] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-location"
                className="outline-none w-[80%] h-full bg-transparent text-[#FFC8AA] text-sm pl-1"
                placeholder="Birth location"></input>
              <button className="outline-none w-fit px-2 text-[#FFC8AA] h-full bg-[#FFC8AA] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#624652] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="name"
                className="outline-none w-[80%] h-full bg-transparent text-[#FFC8AA] text-sm pl-1"
                placeholder="Name"></input>
              <button className="outline-none w-fit px-2 text-[#FFC8AA] h-full bg-[#FFC8AA] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <button className="outline-none w-fit px-3 text-[#FFC8AA] h-7 bg-[#624652] rounded-md flex items-center justify-center mt-2">
              Create new chart
            </button>
          </div>
        </div>
        <div className="w-[85%] sm:w-[60%] md:w-[27%] xl:w-[20%] min-h-[82%]  default-shadow bg-[#20192A]  rounded-[50px] py-4 text-[#FFC8AA] bg-opacity-60">
          <h1 className="text-base lg:text-2xl font-berlin text-center px-3">
            Select saved & friends
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center px-0.5">
            {genarateIcon.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[45px] h-[45px] bg-[#88848D] rounded-full flex justify-center items-center">
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={30}
                  height={30}></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityContent;
