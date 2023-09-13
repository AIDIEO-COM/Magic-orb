"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BannerContent from '../BannerContent';

const MagicOrbChatCard = () => {
  const [magicOrbChatAnimate, setMagicOrbChatAnimate] = useState("opacity-0 duration-1000");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMagicOrbChatAnimate("opacity-100 duration-1000");
    }, 50);
    return () => clearTimeout(timeOut);
  });
    return (
        <div className={`absolute -left-[12%] 2xl:-left-[9.5%] right-[3%] top-0 h-fit  z-1 overflow-hidden hidden lg:inline-block ${magicOrbChatAnimate} transition-all default-gradient rounded-r-[16px] `}>
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