"use client";
import Aos from "aos";
import "aos/dist/aos.css";
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
  animate_origin,
}) => {
  const [cardTransition2, setCardTransition2] = useState("");
  useEffect(() => {
    setCardTransition2("opacity-0 scale-90");
    const timer = setTimeout(() => {
      setCardTransition2(
        "transition duration-700 scale-100  ease-in-out opacity-100"
      );
    }, 5);
    return () => clearTimeout(timer);
  }, [previousActiveCardId]);

  useEffect(() => {
    Aos.init({ duration: 700, offset: 0, easing: "ease-in-sine", once: true });
  }, []);

  useEffect(() => {
    Aos.refresh()
  }, [])
  return (
    <div
      className={`w-full h-full flex justify-center rounded-xl`}
      data-aos={home || animate_origin[0]}>
      <Link
        className={`relative w-full h-full sm:w-[170px] sm:h-[140px] lg:w-full  ${home ? ' lg:h-[200px] 2xl:max-w-[346px] 2xl:w-full 2xl:h-[34%]' : '2xl:h-full lg:h-full 2xl:w-[363px]'} bg-cover bg-center font-berlin  rounded-xl`}
        href={home ? href : "/tools"}>
        <div
          onClick={setActiveCard}
          className={`relative w-full h-[160px] default-shadow sm:w-[170px] sm:h-[140px] md:w-[200px] md:h-[160px] lg:w-full lg:h-full bg-cover bg-no-repeat bg-center font-berlin rounded-xl ${
            previousActiveCardId === id && cardTransition2
          }`}
          style={{
            backgroundImage: `url(${card_img_link})`,
          }}>
          <div className="absolute top-4 left-4 text-white text-sm ">
            <h2 className="text-sm lg:text-lg 2xl:text-xl text-[#FFC8AA]">
              {card_title}
            </h2>
            <p className="text-xs text-[#DBCBF4]">{card_subtitle}</p>
          </div>
          <div className="absolute bottom-2 left-4 text-[#FFC8AA] text-3xl hidden md:inline-block">
            {try_count}
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2  bg-[#6b5863] rounded-xl px-3 py-1 hidden md:inline-block">
            <p className="text-[#E5BD9D] font-berlin text-[12px] lg:font-normal tracking-wider text-center ">
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
