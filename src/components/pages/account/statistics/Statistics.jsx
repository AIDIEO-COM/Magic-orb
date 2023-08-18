import AccountBtnFill from '@/components/shared/btn/accountPageBtn/accountBtnFill/AccountBtnFill';
import AccountBtnOutline from '@/components/shared/btn/accountPageBtn/accountBtnOutline/AccountBtnOutline';
import Image from 'next/image';
import React from 'react';

const Statistics = () => {
    return (
        <div className="flex items-center lg:h-[257px] justify-between px-5 py-4 rounded-xl bg-[#1A1725] default-shadow grow">
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
            className="w-full max-w-[390px] h-[80px] mx-auto"
          />
          <div className="flex items-center justify-between text-[#E5BD9D] text-[10px]">
            <p>Extrovert: 35% up</p>
            <p>Exposure: 5% down</p>
            <p>Self care: 23% up</p>
          </div>
          <div className="flex items-center full mx-auto mt-2 gap-x-4">
            <AccountBtnFill>See full stats</AccountBtnFill>
            <AccountBtnOutline>Improve Statistics</AccountBtnOutline>
          </div>
        </div>
      </div>
    );
};

export default Statistics;