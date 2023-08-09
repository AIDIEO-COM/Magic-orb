import ImageCard from "@/components/shared/ImageCard/ImageCard";
import React from "react";

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

const HomePage = () => {
  return (
    <div className="font-berlin text-2xl h-screen bg-gradient-to-r from-[#3D2D3B] to-[#232141] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 px-2 ">
        {imageCardInfo.map((singleImageCardInfo) => (
          <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
