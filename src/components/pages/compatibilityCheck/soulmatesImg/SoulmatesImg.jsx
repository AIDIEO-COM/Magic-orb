import Image from 'next/image';
import React from 'react';
import TryAgainResultBtn from '../tryAgainResultBtn/TryAgainResultBtn';

const SoulmatesImg = ({isCheckSoulmatesClicked}) => {
    return (
        <Image
            src={"https://i.ibb.co/S0Vr8gD/Merged.png"}
            alt="img"
            width={489}
            height={469}
            className={`lg:absolute left-[56%] -top-[10%] w-[250px] h-[250px] 2xl:w-[489px] 2xl:h-[469px] lg:-translate-x-[60%] duration-500 ${
              isCheckSoulmatesClicked ? "opacity-100" : "opacity-0"
            }`}
          ></Image>
    );
};

export default SoulmatesImg;