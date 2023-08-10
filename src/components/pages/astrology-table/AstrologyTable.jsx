"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AstrologyTable = () => {
  const [firstTransitionImg, setFirstTransitionImg] = useState(
    " w-[320px] h-[250px] bottom-0 left-0"
  );
  const [secondBgImg, setSecondBgImg] = useState(
    " "
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
        
    }, 1400);
    return (
      () => clearTimeout(opacityLowFirstTransitionImg),
      () => clearTimeout(removeFirstTransitionImg)
    );
  }, []);
  return (
    <div>
      <Image
        src={"https://i.ibb.co/zNrsZKZ/Tarot-1.png"}
        alt="astrologyTransitionImg"
        width={1000}
        height={800}
        className={`absolute ${firstTransitionImg} duration-700`}
      ></Image>
      <div className="w-full h-full bg-cover">
        <Image
          src={"https://i.ibb.co/yqrp6rj/image-5.png"}
          alt="img"
          width={1000}
          height={800}
          className={`h-full w-full ${secondBgImg} opacity-0 duration-1000 `}
        ></Image>
      </div>
    </div>
  );
};

export default AstrologyTable;
