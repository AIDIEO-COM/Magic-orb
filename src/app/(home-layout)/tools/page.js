"use client";
import ToolsContent from "@/components/pages/tools/toolsContent/ToolsContent";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import imageCardInfo from "@/temp-data/imageCardInfo";
import {  useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Tools = () => {
  const [activeCard, setActiveCard] = useState(imageCardInfo[0]);
  // const [initialCardTransition, setInitialCardTransition] = useState("grid-rows-1 absolute left-0 bottom-0 w-fit h-[200px]");
  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     // setInitialCardTransition("grid-cols-2 ");
  //   }, 700);
  //   return () => clearTimeout(timeOut);
  // }, []);
  return (
    <div className="grid justify-items-center md:justify-items-stretch pt-32 md:pt-0 md:grid-cols-2 gap-8 z-0 font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)]  h-full ">
      <ToolsContent activeCard={activeCard}></ToolsContent>
      <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
        className={` grid grid-cols-2 gap-4 2xl:gap-5 duration-700 pb-5`}>
        {imageCardInfo.map((singleImageCardInfo) => (
          <ImageCard
            key={singleImageCardInfo.id}
            {...singleImageCardInfo}
            setActiveCard={() => setActiveCard({ ...singleImageCardInfo })}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
