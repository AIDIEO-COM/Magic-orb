"use client";
import React from "react";

const DreamAds = ({ setIsPremiumClicked, isPremiumClicked }) => {
  return (
    <div
      className={`h-fit w-[95%] sm:w-[70%]  mx-auto mt-[20px] sm:mt-10 lg:mx-0 lg:mt-auto  lg:w-[33%] rounded-[38px] grid grid-cols-5 py-4 px-3.5 gap-4 ${
        isPremiumClicked && "hidden"
      }`}
      style={{
        background: "rgba(0, 0, 0, 0.80)",
        boxShadow: " -10px 10px 3.6582px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        className="col-start-1 col-end-3 h-full flex items-center justify-center bg-cover bg-center rounded-md overflow-hidden  bg-no-repeat"
        style={{ backgroundImage: `url(/ads-images/dream-ads.png)` }}
      ></div>
      <div className="col-start-3 col-end-6 h-full">
        <h3 className="text-[#FFC8AA] font-berlin text-[14px] sm:text-[20px] lg:text-[16px] 2xl:text-[20px]">
          Discover full potential of our tools
        </h3>
        <p className="text-[#FFC8AA] font-berlin text-[8px] sm:text-[15px] lg:text-[12px] 2xl:text-[15px]">
          Find out how many people had that dream Most epic dreams from a
          community feed
        </p>
        <div className="flex items-end gap-[14%] ">
          <h3 className="text-[#DBCBF4] text-[18px] sm:text-[30px] font-berlin lg:text-[20px] 2xl:text-[30px]">
            40% cut off
          </h3>
          <p className="text-[#DBCBF4] text-[10px] sm:text-[15px] font-berlin pb-1">
            4.99$/Mo
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setIsPremiumClicked(true)}
            className="text-[#E5BD9D] text-[10px] sm:text-[13px] font-berlin py-[4px] px-[12px] bg-[#674B53] rounded-[10px]"
          >
            Get premium right now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamAds;
