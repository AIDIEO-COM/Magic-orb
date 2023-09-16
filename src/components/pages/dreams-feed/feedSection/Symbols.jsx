import Image from 'next/image';
import React from 'react';

const Symbols = () => {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 7 }).map((index) => (
              <div
                key={index}
                className="w-[25px] xl:w-[25px] xl:h-[25px] h-[25px] bg-[#88848D] rounded-full flex justify-center items-center"
              >
                <Image
                  key={index}
                  src={"https://i.ibb.co/swDCL0H/libra-modified-1.png"}
                  alt="libraImg"
                  width={16}
                  height={16}
                ></Image>
              </div>
            ))}
          </div>
    );
};

export default Symbols;