import AccountBtnFill from "@/components/shared/btn/accountPageBtn/accountBtnFill/AccountBtnFill";
import AccountBtnOutline from "@/components/shared/btn/accountPageBtn/accountBtnOutline/AccountBtnOutline";
import Image from "next/image";
import React from "react";

const stats = [
  { id: "1", stats_color: "bg-[#7ECCF8]", stats_time: 8, total_time: 3.6 },
  { id: "2", stats_color: "bg-[#F8693C]", stats_time: 8, total_time: 3.6 },
  { id: "3", stats_color: "bg-[#9DF87E]", stats_time: 8, total_time: 3.6 },
  { id: "4", stats_color: "bg-[#DBCBF4]", stats_time: 8, total_time: 3.6 },
];

const GrapSection = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-[30px] mt-[23px]">
      <div className="grid grid-cols-2 justify-items-center px-4 rounded-xl bg-[#1A1725] shadow-[10px_10px_8px_10px_#00000024] grow sm:w-[35%]">
        <div className="flex flex-col items-center justify-center ">
          <Image
            src="https://i.ibb.co/wNkY8bD/Screenshot-2023-08-10-112323-removebg-preview.png"
            alt="statistics"
            width={200}
            height={180}
            className="w-[140px] md:w-[200px] "
          />
          {stats.map((singleStats) => (
            <div
              key={singleStats.id}
              className="flex items-center gap-1 md:gap-4 mb-2"
            >
              <p
                className={`w-4 h-4 ${singleStats.stats_color} rounded-full`}
              ></p>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                Today: {singleStats.stats_time}min
              </span>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                Total: {singleStats.total_time}h
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-y-3 p-8 max-w-[380px]">
          <div></div>
          <div className="flex flex-col items-center">
            <p className="text-[#E5BD9D] font-semibold font-sans text-[24px] md:text-2xl">
              Personality
            </p>
            <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center font-sans">
              IFTP Personality
            </span>
          <p className="text-[#E5BD9D] text-[9px] text-justify">
            Your personality is based on the emotions and trauma from the past.
            The best way to free the real you is by talking with a qualified
            person
          </p>
          </div>
          <div className="flex items-center mb-8 gap-1">
          <AccountBtnFill>Free yourself</AccountBtnFill>
            <AccountBtnOutline>See full stats</AccountBtnOutline>
          </div>
        </div>
      </div>
      <div className="account-box-gradient hidden md:flex items-center justify-between px-4 rounded-xl grow-0 w-[27%]"></div>
      <div className="flex  items-center justify-between px-5 py-4 rounded-xl bg-[#1A1725] shadow-[10px_10px_8px_10px_#00000024] grow sm:w-[31%]">
        <div className="flex flex-col w-full justify-between gap-y-2 p-4">
          <div className="flex flex-col">
            <p className="text-[#E5BD9D] font-sans font-semibold text-lg md:text-2xl text-center">
              Statistics
            </p>
            <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center font-sans">
              You have Improved a lot in skills last me
            </span>
          </div>
          <div className="flex items-center justify-between text-[#E5BD9D] text-sm">
            <p>15%</p>
            <p>90%</p>
          </div>
          <Image
            src="https://i.ibb.co/7jMKcMS/Screenshot-2023-08-10-131125-removebg-preview.png"
            alt="statistics"
            width={600}
            height={200}
            className="w-full h-[120px] mx-auto"
          />
          <div className="flex items-center justify-between text-[#E5BD9D] text-[10px]">
            <p>Extrovert: 35% up</p>
            <p>Exposure: 5% down</p>
            <p>Self care: 23% up</p>
          </div>
          <div className="flex items-center full mx-auto mt-2  gap-x-4 ">
            <AccountBtnFill>See full stats</AccountBtnFill>
            <AccountBtnOutline>Improve Statistics</AccountBtnOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrapSection;
