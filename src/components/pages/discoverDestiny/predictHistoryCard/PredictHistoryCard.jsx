"use client"
import Image from 'next/image';
import React from 'react';

const PredictHistoryCard = ({genarateCards}) => {
    return (
        <div className="w-[85%] mt-5 lg:mt-[4%] 2xl:mt-[7%] sm:w-[60%] md:w-[27%] xl:w-[25%] default-shadow md:shadow-none lg:default-shadow  h-[500px] rounded-[50px] p-4 xl:px-7 text-[#FFC8AA] bg-opacity-60">
          <h1 className="text-base lg:text-2xl font-berlin text-center">
            Prediction history
          </h1>
          <div className="flex flex-wrap items-start justify-center gap-2 pt-7 max-h-[400px] overflow-x-auto">
            {genarateCards.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[50px] h-[50px] bg-[#88848D] rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={33}
                  height={33}></Image>
              </div>
            ))}
          </div>
        </div>
    );
};

export default PredictHistoryCard;