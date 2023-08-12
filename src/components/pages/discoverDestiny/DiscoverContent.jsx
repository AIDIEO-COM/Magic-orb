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
            Cards
          </h1>
          <div className="">
            <p className="pl-[15%]">&lsaquo; 1998 &rsaquo;</p>
            <div className="flex gap-[6px] flex-wrap gap-y-3">
              <p className="pl-[7%] pr-[50px]">&lsaquo; June &rsaquo;</p>
              {genarateIcon.map((index) => (
                <Image
                  key={index}
                  src={"https://i.ibb.co/tBs7rDd/images-4.png"}
                  alt="elipsis"
                  width={25}
                  height={25}
                ></Image>
              ))}
            </div>
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