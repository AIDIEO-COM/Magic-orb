import React from "react";

const ImageCard = ({
  card_img_link,
  card_title,
  card_subtitle,
  try_count,
  game_name,
  try_remaining,
}) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div
      className="relative w-[157px] h-[133px] sm:w-[170px] sm:h-[140px] md:w-[220px] md:h-[160px] lg:w-[329px] lg:h-[257px] xl:w-[250px] xl:h-[200px] 2xl:w-[329px] 2xl:h-[257px] bg-cover bg-center font-berlin  rounded-xl"
      style={{
        backgroundImage: `url(${card_img_link})`,
      }}>
      <div className="absolute top-4 left-4 text-white text-sm hidden md:inline-block">
        <h2 className="text-sm text-[#FFC8AA]">{card_title}</h2>
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
    </div>
  );
};

export default ImageCard;
