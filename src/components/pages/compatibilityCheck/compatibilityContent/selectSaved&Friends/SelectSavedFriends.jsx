import Image from 'next/image';
import React from 'react';

const SelectSavedFriends = ({genarateIcon}) => {
    return (
        <div className="w-[85%] sm:w-[60%] md:w-[27%] xl:w-[20%] min-h-[300px] md:min-h-[60%]  default-shadow bg-[#20192A]  rounded-[50px] py-4 text-[#FFC8AA] bg-opacity-60 lg:mt-[10%]">
          <h1 className="text-base lg:text-2xl font-berlin text-center px-3">
            Select saved & friends
          </h1>
          <div className="flex gap-2 flex-wrap pt-7 justify-center px-0.5">
            {genarateIcon.slice(0, 10).map((index) => (
              <div
                key={index}
                className="w-[45px] h-[45px] bg-[#88848D] rounded-full flex justify-center items-center">
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={30}
                  height={30}></Image>
              </div>
            ))}
          </div>
        </div>
    );
};

export default SelectSavedFriends;