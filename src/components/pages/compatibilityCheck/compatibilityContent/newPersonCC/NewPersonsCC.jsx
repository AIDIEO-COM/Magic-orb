"use client"
import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const NewPersonsCC = ({genarateIcon, setPersonSoulmates}) => {
    return (
        <div className="w-[85%] sm:w-[60%] md:w-[27%] xl:w-[20%] default-shadow bg-[#20192A]  rounded-[50px] px-3 py-4  text-[#FFC8AA] flex flex-col justify-between bg-opacity-60 min-h-[80%] mt-6 md:mt-0">
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
          <div className=" space-y-[10%] flex flex-col items-center pb-4 mt-6">
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
            <button onClick={setPersonSoulmates} className="outline-none w-fit px-3 text-[#FFC8AA] h-7 bg-[#624652] rounded-xl flex items-center justify-center mt-2">
              Add person
            </button>
          </div>
        </div>
    );
};

export default NewPersonsCC;