import AccountBtnFill from '@/components/shared/btn/accountPageBtn/accountBtnFill/AccountBtnFill';
import AccountBtnOutline from '@/components/shared/btn/accountPageBtn/accountBtnOutline/AccountBtnOutline';
import Image from 'next/image';
import React from 'react';

const stats = [
    { id: "1", stats_color: "bg-[#7ECCF8]", stats_time: 8, total_time: 3.6 },
    { id: "2", stats_color: "bg-[#F8693C]", stats_time: 8, total_time: 3.6 },
    { id: "3", stats_color: "bg-[#9DF87E]", stats_time: 8, total_time: 3.6 },
    { id: "4", stats_color: "bg-[#DBCBF4]", stats_time: 8, total_time: 3.6 },
  ];

const Personality = () => {
    return (
        <div className="grid grid-cols-2 justify-items-center px-4 rounded-2xl bg-[#1A1725] default-shadow grow sm:w-[35%]">
        <div className="flex flex-col items-center justify-center ">
          <Image
            src="https://i.ibb.co/wNkY8bD/Screenshot-2023-08-10-112323-removebg-preview.png"
            alt="statistics"
            width={200}
            height={180}
            className="w-[120px] md:w-[150px] "
          />
          {stats.map((singleStats) => (
            <div
              key={singleStats.id}
              className="flex items-center gap-1 md:gap-4 mb-2">
              <p
                className={`w-4 h-4 ${singleStats.stats_color} rounded-full`}></p>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                Today: {singleStats.stats_time}min
              </span>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                Total: {singleStats.total_time}h
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center h-full justify-between gap-y-3 p-8 max-w-[380px]">
          <div className="flex flex-col items-center pt-6">
            <p className="text-[#E5BD9D] font-semibold font-sans text-[24px] md:text-2xl">
              Personality
            </p>
            <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center font-sans">
              IFTP Personality
            </span>
          </div>
          <p className="text-[#E5BD9D] text-[9px] text-justify">
              Your personality is based on the emotions and trauma from the
              past. The best way to free the real you is by talking with a
              qualified person
            </p>
          <div className="flex items-center gap-1">
            <AccountBtnFill>Free yourself</AccountBtnFill>
            <AccountBtnOutline>See full stats</AccountBtnOutline>
          </div>
        </div>
      </div>
    );
};

export default Personality;