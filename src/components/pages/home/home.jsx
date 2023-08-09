"use client"
import ImageCard from "@/components/shared/ImageCard/ImageCard";
import Image from "next/image";
import BannerContent from "./bannerContent";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
  const [isVisible, setVisible] = useState(true);
  console.log(isVisible)
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)]">
      <div className="lg:grid grid-cols-10 ">
        <div className="col-start-1 col-end-9  relative">
          <motion.div onTap={() => setVisible(!isVisible)}>
            <Link href={"/magic-orb"}>
              <Image
                src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
                alt="homepageimg"
                width={800}
                height={800}
                className="w-full h-full"
              ></Image>
              <div className="lg:hidden">
                <BannerContent></BannerContent>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className="col-start-9 col-end-11 flex flex-col gap-y-3">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 gap-y-5 px-2 mt-[25px]">
        {imageCardInfo.slice(0, 4).map((singleImageCardInfo) => (
          <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
