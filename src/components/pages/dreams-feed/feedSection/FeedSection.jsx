import Image from 'next/image';
import React from 'react';

const FeedSection = () => {
    return (
        <div className="">
        {/* title start here */}
        <div className="py-[13px] lg:px-[9px] flex items-center justify-between">
          <h1 className="text-lg lg:text-[26px] text-[#FFC8AA]">
            Natalia Rose
          </h1>
          <div className="flex items-center gap-1">
            {Array.from({ length: 7 }).map((index) => (
              <div
                key={index}
                className="w-[25px] xl:w-[25px] xl:h-[25px] h-[25px] bg-[#88848D] rounded-full flex justify-center items-center"
              >
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={16}
                  height={16}
                ></Image>
              </div>
            ))}
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
        <div className="max-w-[735px] mx-auto pt-[16px] pb-[12px]">
          <p className="text-[#E5BD9D] text-[11px]">
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
        <div className="flex items-center justify-between px-[29px] py-1">
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
          <input type="text" className="px-2 py-[3px] bg-[#674B53] rounded-[7px] text-[9px] text-[#E5BD9D80] w-[30%] outline-none" placeholder="Send a message to the dreamer .................."></input>
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