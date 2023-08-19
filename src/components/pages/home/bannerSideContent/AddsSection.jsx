"use client"
import React, { useState } from 'react';
import HomeStatistics from '../HomeStatistics';

const AddsSection = () => {
    const [isStatisticsShow, setIsStatisticsShow] = useState(false);
  const handleStatisticShow = () => {
    setIsStatisticsShow(!isStatisticsShow);
  };
    return (
        <div
        data-aos="fade-up"
        onClick={handleStatisticShow}
        className="h-full w-full cursor-pointer ">
        {!isStatisticsShow && (
          <div className="default-gradient rounded-[16px] h-full w-full flex  items-center">
            <p className="font-berlin text-[#FFC8AA] text-xl md:text-2xl p-6 ">
              Adds here for free version. Click to swap to the premium version
              view
            </p>
          </div>
        )}
        {isStatisticsShow && <HomeStatistics />}
      </div>
    );
};

export default AddsSection;