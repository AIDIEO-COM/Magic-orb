"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AstrologyContent from "./AstrologyContent";

const AstrologyTable = () => {
  const [firstTransitionImg, setFirstTransitionImg] = useState(
    " md:w-[320px] md:h-[250px] bottom-0 left-0"
  );
  const [secondBgImg, setSecondBgImg] = useState(
    "opacity-0 "
  );
  const [astrologyContent, setAstrologyContent] = useState(
    "opacity-0"
  );
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFirstTransitionImg("bottom-0 left-0 w-[100%] h-[100%]");
    }, 5);
    return () => clearTimeout(timeOut);
  }, []);
  useEffect(() => {
    const opacityLowFirstTransitionImg = setTimeout(() => {
      setFirstTransitionImg("opacity-0 w-[100%] h-[100%]");
        setSecondBgImg("opacity-100");
    }, 700);
    const removeFirstTransitionImg = setTimeout(() => {
      setFirstTransitionImg("hidden");
      setAstrologyContent("opacity-100");
    }, 1400);
    return (
      () => clearTimeout(opacityLowFirstTransitionImg),
      () => clearTimeout(removeFirstTransitionImg)
    );
  }, []);
  return (
    <div className="w-full h-full lg:h-[700px] 2xl:h-full  ">
      <Image
        src={"https://i.ibb.co/zNrsZKZ/Tarot-1.png"}
        alt="astrologyTransitionImg"
        width={1000}
        height={800}
        className={`absolute ${firstTransitionImg} duration-700 hidden md:inline-block`}
      ></Image>
      <div className="w-full h-full">
        <Image
          src={"https://i.ibb.co/yqrp6rj/image-5.png"}
          alt="img"
          width={1000}
          height={1000}
          className={`h-full w-full ${secondBgImg}  duration-1000 `}
        ></Image>
        <div className={`lg:absolute lg:top-0 right-0 left-0 bottom-0 w-full h-full ${astrologyContent} duration-1000`}>
          <AstrologyContent></AstrologyContent>
        </div>
      </div>
    </div>
  );
};

export default AstrologyTable;
