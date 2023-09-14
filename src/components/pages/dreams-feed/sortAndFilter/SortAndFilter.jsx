import Image from "next/image";
import React from "react";
import { BsChevronUp } from "react-icons/bs";

const SortAndFilter = () => {
  return (
    <div
      className="w-[275px] 2xl:w-[325px] px-3 py-4 h-[450px] 2xl:h-[512px] order-2 md:order-3 mt-12 md:mt-0"
      style={{
        borderRadius: "54.873px",
        background: "rgba(0, 0, 0, 0.40)",
        boxShadow: "-18.29099px 18.29099px 3.6582px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h1 className="text-center text-lg md:text-2xl lg:text-[26px] text-[#FFC8AA]">
        Symbols filter
      </h1>
      {/* Sort by */}
      <div className="mt-4">
        <p className="text-[#FFC8AA] text-base lg:text-lg">Sort by:</p>
        <div className="grid grid-cols-5 py-3 items-center">
          <div
            className="w-fit gap-1.5 p-1 flex items-center justify-between"
            style={{
              borderRadius: "4px",
              background: "rgba(103, 75, 83, 0.60)",
            }}
          >
            <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
              <Image
                src={"/symbols-images/libra.png"}
                alt="libra-symbols"
                width={12}
                height={12}
              ></Image>
            </div>
            <BsChevronUp className="w-4 h-4  text-[#FFC8AA]"></BsChevronUp>
          </div>
          <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
            <Image
              src={"/symbols-images/libra.png"}
              alt="libra-symbols"
              width={12}
              height={12}
            ></Image>
          </div>
          <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
            <Image
              src={"/symbols-images/libra.png"}
              alt="libra-symbols"
              width={12}
              height={12}
            ></Image>
          </div>
          <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
            <Image
              src={"/symbols-images/libra.png"}
              alt="libra-symbols"
              width={12}
              height={12}
            ></Image>
          </div>
          <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
            <Image
              src={"/symbols-images/libra.png"}
              alt="libra-symbols"
              width={12}
              height={12}
            ></Image>
          </div>
        </div>
      </div>
      {/* filtering */}
      <div className="mt-4">
        <p className="text-[#FFC8AA] text-base lg:text-lg">Filter</p>
        <div className="py-3 w-[70%] mx-auto space-y-[18px]">
          <div className="flex items-center justify-between ">
            <p className="text-[#FFC8AA] text-base">Time:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
            <p className="text-[#FFC8AA] text-base">To:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#FFC8AA] text-base">Scary:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
            <p className="text-[#FFC8AA] text-base">To:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#FFC8AA] text-base">Same:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
            <p className="text-[#FFC8AA] text-base">To:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#FFC8AA] text-base">Love:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
            <p className="text-[#FFC8AA] text-base">To:</p>
            <div className="w-fit gap-1.5 py-1 px-[8px] flex items-center justify-between rounded-[7px] bg-[#674B53]">
              <p className="text-xs text-[#E5BD9D80]">Any -</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 w-full justify-center mt-[18%]">
        <button
          className={`bg-[#674B53] text-[#E5BD9D] px-[11px] py-1 rounded-3xl text-sm duration-700 `}
        >
          Save Filter
        </button>
        <button className="text-[#E5BD9D] text-[14px]  px-1 py-0.5 md:px-2 md:py-1 underline">
          Reset All
        </button>
      </div>
    </div>
  );
};

export default SortAndFilter;
