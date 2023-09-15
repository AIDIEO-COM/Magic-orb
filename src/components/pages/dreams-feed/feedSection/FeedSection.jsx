import Image from "next/image";
import React from "react";
import Symbols from "./Symbols";

const FeedSection = () => {
  return (
    <div className="">
      {/* title start here */}
      <div className="py-[13px] lg:px-[9px] flex items-start xl:items-center justify-between">
        <div>
          <h1 className="text-lg lg:text-[26px] text-[#FFC8AA]">
            Natalia Rose
          </h1>
          <div className="mt-1 xl:hidden">
            <Symbols></Symbols>
          </div>
        </div>
        <div className="hidden xl:inline-block">
          <Symbols></Symbols>
        </div>
        <div className="flex items-end gap-1">
          <p className="text-[#FFC8AA] text-xs ">552K</p>
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
      {/* title end here */}
      {/* content start here */}
      <div className=" md:px-2.5 pt-[16px] pb-[12px]">
        <p className="text-[#E5BD9D] text-[11px] text-justify">
            <span>1.</span>{" "}
            <span className="text-[#DBCBF4]">Terms and Conditions: </span>a. By
            accessing and using our website, you agree to comply with the terms
            and conditions outlined below. b. The content on our website is
            provided for informational and entertainment purposes only. It
            should not be considered a substitute for professional advice or
            treatment. c. We reserve the right to modify or discontinue any
            aspect of the website at any time without prior notice. d. Users
            must be at least 18 years old to use our website or have parental
            consent. e. We are not responsible for any actions taken based on
            the information provided on our website.{" "}
            <span className="underline cursor-pointer">See more</span>
          </p>
      </div>
      <div className="flex items-center justify-between sm:px-[18px] py-1">
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-1">
            <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
              <Image
                src={"/symbols-images/libra.png"}
                alt="libra-symbols"
                width={12}
                height={12}
              ></Image>
            </div>
            <p className="text-[#FFC8AA] text-xs ">552K</p>
          </div>
          <div className="flex items-end gap-1">
            <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
              <Image
                src={"/symbols-images/libra.png"}
                alt="libra-symbols"
                width={12}
                height={12}
              ></Image>
            </div>
            <p className="text-[#FFC8AA] text-xs ">552K</p>
          </div>
          <div className="flex items-end gap-1">
            <div className="p-0.5 rounded-full bg-[#88848D] w-fit h-fit">
              <Image
                src={"/symbols-images/libra.png"}
                alt="libra-symbols"
                width={12}
                height={12}
              ></Image>
            </div>
            <p className="text-[#FFC8AA] text-xs ">552K</p>
          </div>
        </div>
        <input
          type="text"
          className="px-2 py-[3px] bg-[#674B53] rounded-[7px] text-[9px] text-[#E5BD9D80] w-[30%] outline-none"
          placeholder="Send a message to the dreamer .................."
        ></input>
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
  );
};

export default FeedSection;
