"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import BirthCart from "./birthCart/BirthCart";

const genarateIcon = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const AstrologyContent = () => {
  const [checkBtnIsClicked, setCheckBtnIsClicked] = useState(false);
  const [isBirthCartOpen, setIsBirthChartOpen] = useState(false);
  return (
    <div className=" w-full h-full lg:p-7 xl:p-10 lg:overflow-hidden">
      <div className="left-1/2 -translate-x-1/2 lg:w-full flex flex-col items-center absolute top-14 lg:relative lg:top-auto ">
        <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#DBCBF4]">
          Create birth chart
        </h1>
        <div className="text-[#DBCBF4] flex items-center justify-center gap-2 pt-1 ">
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
      </div>
      <div className=" w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-7 sm:gap-20 lg:gap-0 lg:justify-between pt-5 md:pt-10 h-full lg:h-[500px]">
        <div className="w-[85%] sm:w-[60%] md:w-[20%] default-shadow bg-[#20192A] h-full rounded-[50px] p-4 text-[#DBCBF4] flex flex-col justify-between">
          <h1 className="text-base lg:text-2xl font-berlin text-center">
            New persons
          </h1>
          <div>
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
          <div className=" space-y-4 flex flex-col items-center pb-4 mt-2">
            <div className="h-7 bg-[#635B74] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-time"
                className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
                placeholder="Birth time"></input>
              <button className="outline-none w-fit px-2 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#635B74] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-location"
                className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
                placeholder="Birth location"></input>
              <button className="outline-none w-fit px-2 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#635B74] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="name"
                className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
                placeholder="Name"></input>
              <button className="outline-none w-fit px-2 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <button
              onClick={() => setIsBirthChartOpen(true)}
              className="outline-none w-fit px-3 text-[#442143] h-7 bg-[#BFB1D6] rounded-md flex items-center justify-center">
              Create new chart
            </button>
          </div>
        </div>
        {/* birth cart open when create a new chat */}
        <BirthCart isBirthCartOpen={isBirthCartOpen} setIsBirthChartOpen={setIsBirthChartOpen}></BirthCart>
        <div className="w-[85%] p-2 min-h-[300px] sm:w-[60%] md:w-[20%] default-shadow bg-[#20192A] h-full rounded-[50px] text-[#DBCBF4] ">
          <h1 className="text-base lg:text-2xl font-berlin text-center mt-4 px-2">
            Select saved & friends
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center px-0.5">
            {genarateIcon.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] bg-[#88848D] rounded-full flex justify-center items-center">
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

export default AstrologyContent;
