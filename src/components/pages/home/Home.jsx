"use client";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import BannerContent from "./BannerContent";
import { useEffect, useState } from "react";
import GiftCard from "@/components/shared/giftCard/GiftCard";
import MagicOrbChatCard from "./bannerSideContent/MagicOrbChatCard";
import AddsSection from "./bannerSideContent/AddsSection";
import { useRouter } from "next/navigation";

const Home = ({ disconnectReferenceImageCards }) => {
  const [toolsCardAnimate, setToolsCardAnimate] = useState(
    "opacity-0 translate-y-[100%]"
  );
  const router = useRouter();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setToolsCardAnimate("opacity-100 translate-y-0");
    }, 5);
    return () => clearTimeout(timeOut);
  });
  // handle onclick in banner
  const handleBannerClick = () => {
    router.push("/magic-orb");
  }
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-full lg:-mt-3 max-w-[1650px]">
      <div className="flex h-fit lg:h-[69%] pb-1  2xl:max-h-[550px] w-full lg:gap-[29px]">
      <div
      onClick={handleBannerClick}
          className="relative h-[270px] md:h-[400px] lg:h-full w-full 2xl:w-[1290px] default-shadow rounded-2xl  lg:rounded-tr-none mr-[2px] cursor-pointer"
          data-aos="zoom-out-left"
          style={{
            backgroundImage: "url('/cover-images/present-orb.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="lg:hidden">
            <BannerContent></BannerContent>
          </div>
        </div>
        <div className="grow hidden lg:flex items-end -mr-[8px] relative  lg:pb-[7px] xl:pb-[11px] ">
          <MagicOrbChatCard
          ></MagicOrbChatCard>
          <div className="lg:h-[68.7%] -mb-[11px] w-full mr-[13px] bg-transparent rounded-[16px] max-w-[350px]">
            <AddsSection></AddsSection>
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden">
        <AddsSection></AddsSection>
      </div>
      {/* tools card start from here */}
      <div
        className={`w-full md:flex overflow-hidden h-full  gap-x-[29px] duration-700 ${toolsCardAnimate} `}
      >
        <div
          className={`grid grid-cols-2 md:flex mt-[20px] items-center gap-x-4 md:gap-x-[29px] w-full`}
        >
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
          className={`grid grid-cols-2 md:flex gap-x-4 justify-between md:gap-x-[29px] lg:col-start-5 lg:col-end-8 mt-4 lg:mt-[20px] items-center w-full mr-[6px]`}
        >
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
