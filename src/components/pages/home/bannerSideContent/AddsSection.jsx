"use client"
import React, { useState } from 'react';
import HomeStatistics from '../HomeStatistics';
import useGetUser from '@/hooks/useGetUser';
import { toast } from 'react-hot-toast';

const AddsSection = () => {
  const [isStatisticsShow, setIsStatisticsShow] = useState(false);
  const [user] = useGetUser();
  const handleStatisticShow = () => {
    if (!user) {
      toast.error("Please login to see statistics")
      return;
    }
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