"use client";
import ChatBox from "@/components/pages/magic-orb/ChatBox";
import Image from "next/image";
import { useEffect, useState } from "react";
import presentOrb from "/public/cover-images/present-orb.png";
import MagicOrbAds from "./magic-orb-ads/MagicOrbAds";

const MagicOrbPage = () => {
  const [isPremiumClicked, setIsPremiumClicked] = useState(false);
  const [bannerClassName, setBannerClassName] = useState(
    "md:w-[80%] md:h-[65%] duration-500"
  );
  const [chatBoxClassName, setChatBoxClassName] =
    useState("translate-y-[100%]");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setBannerClassName("w-full h-auto md:h-[84%] duration-700");
      setChatBoxClassName("translate-y-0");
    }, 5);
    return () => clearTimeout(timeOut);
  });
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)]">
      <div className="md:overflow-hidden w-full h-full relative">
        <Image
          src={presentOrb}
          alt="present-orb"
          width={3840}
          height={2160}
          quality={100}
          className={`${bannerClassName} h-[300px] w-full sm:w-[99%] sm:h-full object-cover rounded-2xl default-gradient `}
        ></Image>
        <div className="absolute top-0 right-0 w-full justify-center lg:justify-end flex pt-1 sm:pt-2 lg:pr-5 ">
          {/* ads container here for premium version */}
          <MagicOrbAds
            isPremiumClicked={isPremiumClicked}
            setIsPremiumClicked={setIsPremiumClicked}
          ></MagicOrbAds>
        </div>
        {/* chat box */}
        <ChatBox chatBoxClassName={chatBoxClassName}></ChatBox>
      </div>
    </div>
  );
};

export default MagicOrbPage;
