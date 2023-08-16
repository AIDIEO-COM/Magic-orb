"use client";
import ToolsContent from "@/components/pages/tools/toolsContent/ToolsContent";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import imageCardInfo from "@/temp-data/imageCardInfo";
import {  useEffect, useState } from "react";



const Tools = () => {
  const [activeCard, setActiveCard] = useState(imageCardInfo[6]);
  const [previousActiveCardId, setPreviousActiveCardId] = useState(6);
  let cardsInfo = imageCardInfo;
  const controlsSetCard = (singleImageCardInfo) => {
    const getIndex = imageCardInfo.findIndex(card => card.id === singleImageCardInfo.id);
    setPreviousActiveCardId(activeCard.id)
    cardsInfo[getIndex] = activeCard;
    setActiveCard({...singleImageCardInfo});
  }
  
  return (
    <div className="grid justify-items-center md:justify-items-stretch pt-32 md:pt-0 md:grid-cols-2 gap-8 z-0 font-berlin p-3 md:p-4 lg:p-0 h-full ">
      <ToolsContent activeCard={activeCard}></ToolsContent>
      <div 
        className={`grid grid-cols-2 gap-y-6 md:gap-y-4 mt-24 md:mt-0 md:gap-4 w-full justify-between 2xl:gap-5 duration-700 pb-5`}>
        {cardsInfo.slice(0,6).map((singleImageCardInfo, index) => (
          <ImageCard
          
            key={index}
            {...singleImageCardInfo}
            activeCard={activeCard}
            previousActiveCardId={previousActiveCardId}
            setActiveCard={()=> controlsSetCard(singleImageCardInfo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
