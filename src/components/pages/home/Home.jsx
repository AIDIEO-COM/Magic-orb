"use client";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import Image from "next/image";
import BannerContent from "./BannerContent";
import Link from "next/link";
import { useEffect, useState } from "react";
import GiftCardHome from "./GiftCardHome";
import BannerSideContent from "./BannerSideContent";
import imageCardInfo from '@/temp-data/imageCardInfo'
import GiftCard from "@/components/shared/giftCard/GiftCard";


const Home = () => {
  const [cardClassName, setCardClassName] = useState("translate-y-[100%]");
  const [bannerSideContent, setBannerSideContent] = useState("opacity-0");
  const [bannerClassName, setBannerClassName] = useState(" opacity-0");
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCardClassName("translate-y-0");
      setBannerSideContent("opacity-100");
      setBannerClassName("opacity-100 ");
    }, 5);
    return (
     () => clearTimeout(timeOut)
    );
  });
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)]">
      <div className="lg:grid grid-cols-10 ">
        <div className="col-start-1 col-end-9 relative">
          <Link href={"/magic-orb"}>
            <Image
              src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
              alt="homepageimg"
              width={1000}
              height={1000}
              className={`w-full h-full ${bannerClassName} duration-700`}
            ></Image>
            <div className="lg:hidden">
              <BannerContent></BannerContent>
            </div>
          </Link>
        </div>
        <BannerSideContent bannerSideContent={bannerSideContent}></BannerSideContent>
      </div>
      <div
        className={` w-full lg:grid lg:grid-cols-7 pb-5 xl:grid-cols-7 overflow-hidden gap-x-2 duration-700 ${cardClassName}`}
      >
        <div
          className={`flex justify-between lg:col-start-1 lg:col-end-4 mt-[25px] items-center gap-x-4 `}
        >
          {imageCardInfo.slice(0, 2).map((singleImageCardInfo) => (
            <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} home={true}/>
          ))}
        </div>
        {/* gift card */}
        <div className="col-start-4 col-end-5 mt-2 justify-items-center hidden lg:inline-block">
          <GiftCard home={true}></GiftCard>
        </div>
        <div
          className={`flex justify-between gap-x-4  lg:col-start-5 lg:col-end-8 mt-10 lg:mt-[25px] items-center `}
        >
          {imageCardInfo.slice(2, 4).map((singleImageCardInfo) => (
            <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} home={true}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
