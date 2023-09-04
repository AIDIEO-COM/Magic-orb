"use client";
import ChatBox from "@/components/pages/magic-orb/ChatBox";
import Image from "next/image";
import { useEffect, useState } from "react";

const MagicOrbPage = () => {
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
          src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
          alt="homepageimg"
          width={1500}
          height={1000}
          className={`${bannerClassName} h-[300px] sm:h-full object-cover sm:object-fill rounded-2xl sm:rounded-none`}
        ></Image>
        {/* chat box */}
        <ChatBox chatBoxClassName={chatBoxClassName}></ChatBox>
      </div>
    </div>
  );
};

export default MagicOrbPage;
