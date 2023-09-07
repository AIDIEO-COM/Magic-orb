import Image from 'next/image';
import React from 'react';

const SelectSavedCart = ({genarateIcon}) => {
    return (
        <div className="w-[95%] p-2 min-h-[300px] sm:w-[60%] md:w-[20%] default-shadow bg-[#20192A] h-full rounded-[50px] text-[#DBCBF4] ">
          <h1 className="text-base lg:text-2xl font-berlin text-center mt-4 px-2">
            Select saved & friends
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center px-0.5">
            {genarateIcon.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] bg-[#88848D] rounded-full flex justify-center items-center"
              >
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={33}
                  height={33}
                ></Image>
              </div>
            ))}
          </div>
        </div>
    );
};

export default SelectSavedCart;