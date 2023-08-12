"use client"
import React, { useEffect, useState } from "react";

const PredictDetails = ({resetPredict}) => {
    const [animateDetails, setAnimateDetails] = useState("opacity-0");
    const [animateBtn, setAnimateBtn] = useState("-translate-x-5/5 -translate-y-[350px]");
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setAnimateDetails("opacity-100")
            setAnimateBtn(" -translate-x-1/3 translate-y-0")
        }, 5);
        return () => clearTimeout(timeOut)
    }, [])
  return (
    <div className="pt-4 w-full h-full relative flex flex-col justify-center">
      <div className={`bg-black w-full xl:max-w-[450px] 2xl:max-w-[680px] h-fit rounded-[50px] bg-opacity-70 p-8 ${animateDetails} duration-700`}>
        <p className="text-xs text-[#FFC8AA]">
          1. <span className="text-[#DBCBF4]">Terms and Conditions: </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi,
          esse quasi sit quis quibusdam ducimus mollitia numquam minima soluta
          amet impedit praesentium eveniet placeat ipsam eius libero doloribus
          ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          nisi, esse quasi sit quis quibusdam ducimus mollitia numquam minima
          soluta amet impedit praesentium eveniet placeat ipsam eius libero
          doloribus ut?.
        </p>
        <p className="text-xs text-[#FFC8AA]">
          1. <span className="text-[#DBCBF4]">Accuracy of Information: </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi,
          esse quasi sit quis quibusdam ducimus mollitia numquam minima soluta
          amet impedit praesentium eveniet placeat ipsam eius libero doloribus
          ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          nisi, esse quasi sit quis quibusdam ducimus mollitia numquam minima
          soluta amet impedit praesentium eveniet placeat ipsam eius libero
          doloribus ut?.
        </p>
        <p className="text-xs text-[#FFC8AA]">
          1. <span className="text-[#DBCBF4]">Spiritual Advice: </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi,
          esse quasi sit quis quibusdam ducimus mollitia numquam minima soluta
          amet impedit praesentium eveniet placeat ipsam eius libero doloribus
          ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          nisi, esse quasi sit quis quibusdam ducimus mollitia numquam minima
          soluta amet impedit praesentium eveniet placeat ipsam eius libero
          doloribus ut?.
        </p>
        <p className="text-xs text-[#FFC8AA]">
          1. <span className="text-[#DBCBF4]">Tools and Products: </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi,
          esse quasi sit quis quibusdam ducimus mollitia numquam minima soluta
          amet impedit praesentium eveniet placeat ipsam eius libero doloribus
          ut.
        </p>
      </div>
      <div className="flex items-center justify-center w-full mt-3 md:mt-0">
        <button
          className={`text-[#E5BD9D] bg-[#674B53] px-3 text-sm lg:text-base rounded-full bottom-0 md:absolute  md:left-1/3  duration-700 ${animateBtn}`}
        >
          Share your future
        </button>
        <button
            onClick={resetPredict}
          className={`text-[#E5BD9D] bg-black bg-opacity-80 px-3 text-sm lg:text-base rounded-full   duration-700 md:mt-3 md:ml-[100px]`}
        >
          New prediction
        </button>
      </div>
    </div>
  );
};

export default PredictDetails;
