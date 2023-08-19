"use client";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import Image from "next/image";
import BannerContent from "./BannerContent";
import Link from "next/link";
import { useEffect, useState } from "react";
import GiftCard from "@/components/shared/giftCard/GiftCard";
import MagicOrbChatCard from "./bannerSideContent/MagicOrbChatCard";
import AddsSection from "./bannerSideContent/AddsSection";

const Home = ({ disconnectReferenceImageCards }) => {
  const [magicOrbChatAnimate, setMagicOrbChatAnimate] = useState("opacity-0");
  const [toolsCardAnimate, setToolsCardAnimate] = useState(
    "opacity-0 translate-y-[100%]"
  );
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMagicOrbChatAnimate("opacity-100");
      setToolsCardAnimate("opacity-100 translate-y-0");
    }, 5);
    return () => clearTimeout(timeOut);
  });
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-full lg:-mt-3 ">
      <div className="flex h-fit 2xl:h-[550px] w-full ">
        <div className="relative h-[270px] sm:h-full w-full 2xl:w-[1290px] ">
          <Link href={"/magic-orb"}>
            <Image
              data-aos="zoom-out-left"
              src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
              alt="homepageimg"
              width={1000}
              height={1000}
              className={`w-full object-cover sm:object-fill rounded-2xl sm:rounded-none default-shadow sm:shadow-none h-[270px] sm:h-full duration-700  z-10`}></Image>
            <div className="lg:hidden">
              <BannerContent></BannerContent>
            </div>
          </Link>
        </div>
        <div className="grow hidden lg:flex items-end -mr-[13px] relative pl-[12px] lg:pb-[7px] xl:pb-[10px] 2xl:pb-[16px]">
          <MagicOrbChatCard magicOrbChatAnimate={magicOrbChatAnimate}></MagicOrbChatCard>
          <div className="h-[60%] 2xl:h-[349px] w-full mr-[13px] bg-transparent rounded-[16px] max-w-[346px]">
            <AddsSection></AddsSection>
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden">
        <AddsSection></AddsSection>
      </div>
      {/* tools card start from here */}
      <div
        className={`w-full md:flex overflow-hidden h-full  gap-x-[29px] duration-700 ${toolsCardAnimate} `}>
        <div
          className={`grid grid-cols-2 md:flex mt-[20px] items-center gap-x-4 md:gap-x-[29px] w-full`}>
          {disconnectReferenceImageCards
            .slice(0, 2)
            .map((singleImageCardInfo) => (
              <ImageCard
                key={singleImageCardInfo.id}
                {...singleImageCardInfo}
                home={true}
              />
            ))}
        </div>
        {/* gift card */}
        <div className=" mt-1 justify-items-center w-fit hidden lg:inline-block rounded-xl">
          <GiftCard home={true}></GiftCard>
        </div>
        <div
          className={`grid grid-cols-2 md:flex gap-x-4 justify-between md:gap-x-[29px] lg:col-start-5 lg:col-end-8 mt-4 lg:mt-[20px] items-center w-full mr-[6px]`}>
          {disconnectReferenceImageCards
            .slice(2, 4)
            .map((singleImageCardInfo) => (
              <ImageCard
                key={singleImageCardInfo.id}
                {...singleImageCardInfo}
                home={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
