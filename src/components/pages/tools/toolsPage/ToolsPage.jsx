"use client";
import ToolsContent from "@/components/pages/tools/toolsContent/ToolsContent";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const ToolsPage = ({ imageCardInfo, changeReferenceTools }) => {
  const [activeCard, setActiveCard] = useState({});
  const [previousActiveCardId, setPreviousActiveCardId] = useState(6);
  const [animateToolsContent, setAnimateToolsContent] = useState(
    "opacity-0 duration-700"
  );
  // set active card in local storage
  useEffect(() => {
    const getActiveCard = JSON.parse(sessionStorage.getItem("activeCardId"));
    if (getActiveCard) {
      const findCard = changeReferenceTools.find(
        (tools) => tools.id == getActiveCard
      );
      setActiveCard(findCard);
    } else {
      setActiveCard(imageCardInfo[6]);
    }
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("activeCardId");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [changeReferenceTools, imageCardInfo]);
  // set tools for the details when click on tools card
  let cardsInfo = imageCardInfo;
  const controlsSetCard = (singleImageCardInfo) => {
    const getIndex = imageCardInfo.findIndex(
      (card) => card.id === singleImageCardInfo.id
    );
    setPreviousActiveCardId(activeCard.id);
    cardsInfo[getIndex] = activeCard;
    setActiveCard({ ...singleImageCardInfo });
    sessionStorage.setItem(
      "activeCardId",
      JSON.stringify(singleImageCardInfo.id)
    );
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
        animateToolsContent={animateToolsContent}
      ></ToolsContent>
      <div className=" w-full h-full md:flex justify-end pt-16 md:pt-0">
      <div
        className={`grid grid-cols-2 h-full gap-4 2xl:gap-5 w-full 2xl:w-fit justify-between  duration-700`}
      >
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
    </div>
  );
};

export default ToolsPage;
