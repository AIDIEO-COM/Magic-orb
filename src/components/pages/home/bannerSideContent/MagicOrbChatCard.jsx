import Image from 'next/image';
import React from 'react';
import BannerContent from '../BannerContent';

const MagicOrbChatCard = ({magicOrbChatAnimate}) => {
    return (
        <div className={`absolute -left-[17%] 2xl:w-[450px] 2xl:left-auto right-0 top-0 h-fit z-1 overflow-hidden hidden lg:inline-block ${magicOrbChatAnimate} duration-1000`}>
        <Image
          src={"https://i.ibb.co/QN7h6G0/orb22-1.png"}
          alt="sideimg"
          width={500}
          height={250}
          className=" h-full w-full 2xl:w-[450px] 2xl:h-[172px] z-1"></Image>
        <BannerContent></BannerContent>
      </div>
    );
};

export default MagicOrbChatCard;