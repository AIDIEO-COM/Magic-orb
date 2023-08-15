"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const ImageCard = ({
  card_img_link,
  card_title,
  card_subtitle,
  try_count,
  game_name,
  try_remaining,
  href,
  home,
  setActiveCard,
  id,
  previousActiveCardId,
}) => {
  const [cardTransition2, setCardTransition2] = useState("");
  useEffect(() => {
    setCardTransition2("opacity-0");
    const timer = setTimeout(() => {
      setCardTransition2("transition duration-500 ease-in-out opacity-100");
    }, 5);
    return () => clearTimeout(timer);
  }, [previousActiveCardId]);
  return (
    <div className={`w-full h-full flex justify-center rounded-xl`}>
      <Link
        className="relative w-[130px] h-[110px] sm:w-[170px] sm:h-[140px] lg:w-full lg:h-[80%] 2xl:h-full bg-cover bg-center font-berlin  rounded-xl"
        href={home ? href : "/tools"}>
        <div
          onClick={setActiveCard}
          className={`relative w-[130px] default-shadow h-[110px] sm:w-[170px] sm:h-[140px] md:w-[200px] md:h-[160px] lg:w-full lg:h-full bg-cover bg-center font-berlin rounded-xl ${
            previousActiveCardId === id && cardTransition2
          }`}
          style={{
            backgroundImage: `url(${card_img_link})`,
          }}>
          <div className="absolute top-4 left-4 text-white text-sm hidden md:inline-block">
            <h2 className="text-sm lg:text-lg 2xl:text-xl text-[#FFC8AA]">
              {card_title}
            </h2>
            <p className="text-xs text-[#DBCBF4]">{card_subtitle}</p>
          </div>
          <div className="absolute bottom-2 left-4 text-[#FFC8AA] text-3xl hidden md:inline-block">
            {try_count}
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2  bg-[#6b5863] rounded-xl px-3 hidden md:inline-block">
            <p className="text-[#E5BD9D] text-[11px]  lg:font-semibold tracking-wider text-center">
              {game_name}
            </p>
          </div>
          <div className="absolute bottom-2 right-4 text-[#FFC8AA] text-3xl hidden md:inline-block">
            {try_remaining}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
