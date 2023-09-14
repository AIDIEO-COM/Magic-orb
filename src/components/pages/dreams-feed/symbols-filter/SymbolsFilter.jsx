import Image from "next/image";
import React from "react";

const SymbolsFilter = ({ genarateIcon }) => {
  return (
    <div
      className="w-[325px] px-3 py-4 h-[512px]"
      style={{
        borderRadius: "54.873px",
        background: "rgba(0, 0, 0, 0.40)",
        boxShadow: "-18.29099px 18.29099px 3.6582px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h1 className="text-center text-lg md:text-2xl lg:text-[26px] text-[#FFC8AA]">
        Symbols filter
      </h1>
      {/* Selected */}
      <div className="mt-4">
        <p className="text-[#FFC8AA] text-base lg:text-lg">Selected</p>
        <div className="flex gap-2.5 items-center py-3">
          {genarateIcon.slice(0, 2).map((index) => (
            <div
              key={index}
              className="w-[40px] xl:w-[52px] xl:h-[52px] h-[40px] bg-[#88848D] rounded-full flex justify-center items-center"
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
      {/* all symbols */}
      <div className="mt-4">
        <p className="text-[#FFC8AA] text-base lg:text-lg">All symbols</p>
        <div className="flex flex-wrap gap-2 items-center h-[265px] py-3 overflow-y-auto">
          {genarateIcon.slice(0, 25).map((index) => (
            <div
              key={index}
              className="w-[40px] xl:w-[52px] xl:h-[52px] h-[40px] bg-[#88848D] rounded-full flex justify-center items-center"
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
  );
};

export default SymbolsFilter;
