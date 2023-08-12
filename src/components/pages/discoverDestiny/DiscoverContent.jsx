import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const genarateIcon = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];

const DiscoverContent = () => {
    return (
        <div className=" w-full h-full lg:p-7 xl:p-10 lg:overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-lg md:text-xl lg:text-3xl font-berlin font-semibold text-[#FFC8AA]">
          Choose cards to predict future
        </h1>
        
        {/* TODO: some design messing here */}
      </div>
      <div className="h-ful w-full flex flex-col items-center md:items-start  md:flex-row justify-center gap-10 sm:gap-20 lg:gap-0 lg:justify-between pt-10 lg:pt-20">
        <div className="w-[85%] sm:w-[60%] md:w-[27%] xl:w-[22%] default-shadow bg-[#20192A] h-[500px] rounded-[50px] p-4 xl:px-8 text-[#FFC8AA] flex flex-col justify-between bg-opacity-60">
          <h1 className="text-base lg:text-3xl font-berlin text-center">
            New persons
          </h1>
          <div className="">
            <p className="pl-[15%]">&lsaquo; 1998 &rsaquo;</p>
            <div className="flex gap-[6px] flex-wrap gap-y-3">
              <p className="pl-[7%] pr-[50px]">&lsaquo; June &rsaquo;</p>
              {genarateIcon.map((index) => (
                <Image
                  key={index}
                  src={"https://i.ibb.co/3SHJXn0/Ellipse-23.png"}
                  alt="elipsis"
                  width={25}
                  height={25}
                ></Image>
              ))}
            </div>
          </div>
          <div className=" space-y-4 flex flex-col items-center pb-4">
            <div className="h-7 bg-[#624652] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-time"
                className="outline-none w-[80%] h-full bg-transparent text-[#FFC8AA] text-sm pl-1"
                placeholder="Birth time"
              ></input>
              <button className="outline-none w-fit px-2 text-[#FFC8AA] h-full bg-[#FFC8AA] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#624652] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-location"
                className="outline-none w-[80%] h-full bg-transparent text-[#FFC8AA] text-sm pl-1"
                placeholder="Birth location"
              ></input>
              <button className="outline-none w-fit px-2 text-[#FFC8AA] h-full bg-[#FFC8AA] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#624652] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="name"
                className="outline-none w-[80%] h-full bg-transparent text-[#FFC8AA] text-sm pl-1"
                placeholder="Name"
              ></input>
              <button className="outline-none w-fit px-2 text-[#FFC8AA] h-full bg-[#FFC8AA] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <button className="outline-none w-fit px-3 text-[#FFC8AA] h-7 bg-[#624652] rounded-md flex items-center justify-center">
              Create new chart
            </button>
          </div>
        </div>
        <div className="w-[85%] sm:w-[60%] md:w-[27%] xl:w-[22%] default-shadow bg-[#20192A] h-[500px] rounded-[50px] p-4 xl:px-8 text-[#FFC8AA] bg-opacity-60">
          <h1 className="text-base lg:text-3xl font-berlin text-center">
            Select saved & friends
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

export default DiscoverContent;