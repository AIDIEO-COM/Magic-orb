"use client";
import ToolsContent from "@/components/pages/tools/toolsContent/ToolsContent";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const ToolsPage = ({ imageCardInfo, changeReferenceTools }) => {
  const [activeCard, setActiveCard] = useState(imageCardInfo[6]);
  const [previousActiveCardId, setPreviousActiveCardId] = useState(6);
  const [animateToolsContent, setAnimateToolsContent] = useState(
    "opacity-0 duration-700"
  );
  // set tools for the details when click on tools card
  let cardsInfo = imageCardInfo;
  const controlsSetCard = (singleImageCardInfo) => {
    const getIndex = imageCardInfo.findIndex(
      (card) => card.id === singleImageCardInfo.id
    );
    setPreviousActiveCardId(activeCard.id);
    cardsInfo[getIndex] = activeCard;
    setActiveCard({ ...singleImageCardInfo });
  };
  // forward btn click handler
  const controlsForwardBtn = () => {
    const getIndex = changeReferenceTools.findIndex(
      (card) => card.id == activeCard.id
    );
    if (getIndex === imageCardInfo.length - 1) {
      controlsSetCard(changeReferenceTools[0]);
    } else {
      if (activeCard.id == 1) {
        controlsSetCard(changeReferenceTools[1]);
      } else {
        controlsSetCard(changeReferenceTools[getIndex + 1]);
      }
    }
  };
  // backward btn click handler
  const controlsBackwardBtn = () => {
    const getIndex = changeReferenceTools.findIndex(
      (card) => card.id == activeCard.id
    );
    if (getIndex === imageCardInfo.length - 1) {
      controlsSetCard(changeReferenceTools[5]);
    } else {
      if (activeCard.id == 1) {
        controlsSetCard(changeReferenceTools[6]);
      } else {
        controlsSetCard(changeReferenceTools[getIndex - 1]);
      }
    }
  };
  // animate tools content
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateToolsContent("opacity-100 duration-700");
    }, 5);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 700, offset: 0, once: true });
  }, []);

  return (
    <div className="grid justify-items-center md:justify-items-stretch pt-32 md:pt-0 md:grid-cols-2 gap-8 z-0 font-berlin p-3 md:p-4 lg:p-0 h-full ">
      <ToolsContent
        controlsForwardBtn={controlsForwardBtn}
        controlsBackwardBtn={controlsBackwardBtn}
        activeCard={activeCard}
        animateToolsContent={animateToolsContent}></ToolsContent>
      <div
        className={`grid grid-cols-2  mt-16 md:mt-0 gap-4 w-full justify-between 2xl:gap-5 duration-700 pb-5`}>
        {cardsInfo.slice(0, 6).map((singleImageCardInfo, index) => (
          <ImageCard
            key={index}
            home={false}
            {...singleImageCardInfo}
            activeCard={activeCard}
            previousActiveCardId={previousActiveCardId}
            setActiveCard={() => controlsSetCard(singleImageCardInfo)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
