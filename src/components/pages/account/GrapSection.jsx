import Image from "next/image";
import React from "react";

const stats = [
  { id: "1", stats_color: "#7ECCF8", stats_time: 8, total_time: 3.6 },
  { id: "2", stats_color: "#F8693C", stats_time: 8, total_time: 3.6 },
  { id: "3", stats_color: "#9DF87E", stats_time: 8, total_time: 3.6 },
  { id: "4", stats_color: "#DBCBF4", stats_time: 8, total_time: 3.6 },
];

const GrapSection = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-2 mt-8">
      <div className="flex items-center gap-2 justify-between px-4 rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024] grow sm:w-[50%]">
        <div className="flex flex-col items-center w-[40%]">
          <Image
            src="https://i.ibb.co/wNkY8bD/Screenshot-2023-08-10-112323-removebg-preview.png"
            alt="statistics"
            width={200}
            height={180}
          />
          {stats.map((singleStats) => (
            <div key={singleStats.id} className="flex items-center gap-4 mb-2">
              <p className={`w-4 h-4 bg-[#DBCBF4] rounded-full`}></p>
              {/* TODO: Stats color not working */}
              <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                Today: {singleStats.stats_time}min
              </span>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                Total: {singleStats.total_time}h
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-y-3 w-[60%]">
          <div className="flex flex-col">
            <p className="text-[#E5BD9D] font-bold text-2xl">Personality</p>
            <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center">
              IFTP Personality
            </span>
          </div>
          <p className="text-[#E5BD9D] text-[9px] text-center">
            Your personality is based on the emotions and trauma from the past.
            The best way to free the real you is by talking with a qualified
            person
          </p>
          <div className="flex items-center mt-1 ">
            <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
              Free yourself
            </button>
            <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
              See full stats
            </button>
          </div>
        </div>
      </div>
      <div className="default-gradient hidden md:flex items-center justify-between px-4 rounded-xl grow-0 w-[15%]"></div>
      <div className="flex  items-center justify-between px-4 rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024] grow sm:w-[33%]">
        <div className="flex flex-col w-full justify-between gap-y-2 p-4">
          <div className="flex flex-col">
            <p className="text-[#E5BD9D] font-bold text-2xl text-center">
              Statistics
            </p>
            <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center">
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
            width={500}
            height={200}
            className="w-full h-full mx-auto"
          />
          <div className="flex items-center justify-between text-[#E5BD9D] text-[10px]">
            <p>Extrovert: 35% up</p>
            <p>Exposure: 5% down</p>
            <p>Self care: 23% up</p>
          </div>
          <div className="flex items-center full mx-auto mt-2 gap-4">
            <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
              See full stats
            </button>
            <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
              Improve statistics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrapSection;
