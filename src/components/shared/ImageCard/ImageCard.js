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
    <div
      className="relative max-w-[329px] h-[257px] bg-cover bg-center font-berlin  rounded-xl"
      style={{
        backgroundImage: `url(${card_img_link})`,
      }}>
      <div className="absolute top-4 left-4 text-white text-sm">
        <h2 className="text-sm text-[#FFC8AA]">{card_title}</h2>
        <p className="text-xs text-[#DBCBF4]">{card_subtitle}</p>
      </div>
      <div className="absolute bottom-2 left-4 text-[#FFC8AA] text-3xl">
        {try_count}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2  bg-[#6b5863] rounded-xl px-2 ">
        <p className="text-[#E5BD9D] text-[11px] font-semibold tracking-wider">
          {game_name}
        </p>
      </div>
      <div className="absolute bottom-2 right-4 text-[#FFC8AA] text-3xl">
        {try_remaining}
      </div>
    </div>
  );
};

export default ImageCard;
