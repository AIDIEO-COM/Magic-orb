"use client";
import ImageCard from "@/components/shared/ImageCard/ImageCard";
import Image from "next/image";
import BannerContent from "./bannerContent";
import Link from "next/link";
import { useEffect, useState } from "react";

const imageCardInfo = [
  {
    id: "1",
    card_img_link: "https://i.ibb.co/zNrsZKZ/Tarot-1.png",
    card_title: "Astrology table",
    card_subtitle: "Discover your character",
    try_count: 0,
    game_name: "Play astrology",
    try_remaining: 32,
  },
  {
    id: "2",
    card_img_link: "https://i.ibb.co/DL2dzN9/Tarot-5.png",
    card_title: "Compatibility check",
    card_subtitle: "Discover your real soulmates",
    try_count: 0,
    game_name: "Find compatibility",
    try_remaining: 32,
  },
  {
    id: "3",
    card_img_link: "https://i.ibb.co/2YnxRVQ/Tarot-3.png",
    card_title: "Tarot table and cards",
    card_subtitle: "Discover destiny",
    try_count: 0,
    game_name: "Play tarot",
    try_remaining: 32,
  },

  {
    id: "4 ",
    card_img_link: "https://i.ibb.co/HrLXbQ8/Tarot-2.png",
    card_title: "Dream interpretation",
    card_subtitle: "Find the symbols of your dreams",
    try_count: 0,
    game_name: "Interpretative dream",
    try_remaining: 32,
  },
];

const Home = () => {
  const [cardClassName, setCardClassName] = useState("translate-y-[100%]");
  const [bannerSideContent, setBannerSideContent] = useState("opacity-0");
  const [bannerClassName, setBannerClassName] = useState(" opacity-0");
  const [animationBanner, setAnimationBanner] = useState("w-full h-[90%]");
  const [controlAnimateBanner, setControlAnimateBanner] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCardClassName("translate-y-0");
      setBannerSideContent("opacity-100");
      setBannerClassName("opacity-100 ");
      setAnimationBanner("w-[65%] h-[57%]");
    }, 5);
    const controlBannerTime = setTimeout(() => {
      setControlAnimateBanner(true);
      setAnimationBanner("hidden");
    }, 700);
    return (
      () => clearTimeout(controlAnimateBanner), () => clearTimeout(timeOut)
    );
  });
  useEffect(() => {}, [controlAnimateBanner]);
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)] ">
      {/* animate banner */}
      <Image
        src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
        alt="homepageimg"
        width={1000}
        height={900}
        className={` ${animationBanner} duration-700 absolute rounded-xl ${
          controlAnimateBanner ? "hidden" : ""
        }`}
      ></Image>
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
        <div
          className={`col-start-9 col-end-11 flex flex-col gap-y-3 ${bannerSideContent} duration-700`}
        >
          <div className="h-[30%] w-full relative overflow-hidden hidden lg:inline-block">
            <Image
              src={"https://i.ibb.co/QN7h6G0/orb22-1.png"}
              alt="sideimg"
              width={300}
              height={250}
              className="w-full h-full"
            ></Image>
            <BannerContent></BannerContent>
          </div>
          <div className="min-h-fit xl:h-[70%] w-full pr-1 xl:px-2 xl:pb-3 pt-4 xl:pt-0">
            <div className="default-gradient rounded-[16px] w-full h-full min-h-fit ">
              <p className="font-berlin text-[#FFC8AA] text-2xl md:text-3xl p-6">
                Adds here for free version. Click to swap to the premium version
                view
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={` w-full lg:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-x-2 duration-700 ${cardClassName}`}>
        <div
          className={`flex justify-between lg:col-start-1 lg:col-end-4 mt-[25px] items-center `}
        >
          {imageCardInfo.slice(0, 2).map((singleImageCardInfo) => (
            <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
          ))}
        </div>
        {/* gift card */}
        <div className="col-start-4 col-end-5 mt-2 justify-items-center hidden lg:inline-block">
        <div className="p-5 mt-4 mx-auto  flex flex-col xl:w-40 xl:h-[180px] 2xl:w-44 2xl:h-[250px] items-center justify-between rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px10px#00000024]">
          <p className="text-[#E5BD9D] text-xs font-semibold text-center">
            Redeem your gift card
          </p>
          <Image
            src="https://i.ibb.co/GCDyhJw/Default-cosmic-pink-gift-card-0-3507d5d2-e214-4bf6-b126-ff41039a25cf-0-1.png"
            alt="gift card"
            width={108}
            height={148}
            className="lg:w-[70px] lg:h-[100px] xl:w-[80px] xl:h-[105px] 2xl:w-[108px] 2xl:h-[148px]"
          />
          <button className="mx-auto text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
            Take the card
          </button>
        </div>
        </div>
        <div
          className={`flex justify-between  lg:col-start-5 lg:col-end-8 mt-[25px] items-center `}
        >
          {imageCardInfo.slice(2, 4).map((singleImageCardInfo) => (
            <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
