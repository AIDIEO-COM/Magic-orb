import Image from 'next/image';
import React from 'react';
import BannerContent from '../BannerContent';

const MagicOrbChatCard = ({magicOrbChatAnimate}) => {
    return (
        <div className={`absolute -left-[4.5%] right-[2.8%] top-0 h-fit  z-1 overflow-hidden hidden lg:inline-block ${magicOrbChatAnimate} duration-1000 default-gradient rounded-r-[16px]`}>
        <Image
          src={"/thumbnails/chat-cart-bg.png"}
          alt="sideimg"
          width={500}
          height={250}
          className=" h-full w-full 2xl:w-[450px] 2xl:max-h-[172px] z-1 default-gradient rounded-r-[16px]"></Image>
        <BannerContent></BannerContent>
      </div>
    );
};

export default MagicOrbChatCard;