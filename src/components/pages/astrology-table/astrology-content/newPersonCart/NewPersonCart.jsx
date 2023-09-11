"use client"
import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';

const NewPersonCart = ({genarateIcon, setIsBirthChartOpen}) => {
    return (
        <div className="w-[95%] sm:w-[60%] md:w-[20%] default-shadow bg-[#20192A] h-full rounded-[50px] p-4 text-[#DBCBF4] flex flex-col justify-between">
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
                  height={25}
                ></Image>
              ))}
            </div>
          </div>
          <div className=" space-y-3 flex flex-col items-center pb-4 mt-2">
            <div className="h-7 bg-[#635B74] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-time"
                className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
                placeholder="Birth time"
              ></input>
              <button className="outline-none w-fit px-2 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#635B74] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="birth-location"
                className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
                placeholder="Birth location"
              ></input>
              <button className="outline-none w-fit px-2 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <div className="h-7 bg-[#635B74] rounded-md py-[3px] px-1 font-berlin flex justify-between w-full">
              <input
                name="name"
                className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
                placeholder="Name"
              ></input>
              <button className="outline-none w-fit px-2 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
                <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
              </button>
            </div>
            <button
              onClick={() => setIsBirthChartOpen(true)}
              className="outline-none w-fit px-3 text-[#442143] h-7 bg-[#BFB1D6] rounded-md flex items-center justify-center"
            >
              Create new chart
            </button>
          </div>
        </div>
    );
};

export default NewPersonCart;