"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DiscoverContent from "./DiscoverContent";

const DiscoverDestiny = () => {
  const [firstTransitionImg, setFirstTransitionImg] = useState(
    "w-[400px] h-[300px] bottom-0 left-[50%] hidden md:inline-block"
  );
  const [secondBgImg, setSecondBgImg] = useState(" opacity-0");
  const [contentVisible, setContentVisible] = useState("opacity-0");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFirstTransitionImg("bottom-0 left-0 w-full h-full hidden md:inline-block");
    }, 5);
    const timeOut2 = setTimeout(() => {
      setFirstTransitionImg("opacity-0 bottom-0 left-0 w-full h-full hidden md:inline-block");
      setSecondBgImg("opacity-100");
      setContentVisible("opacity-100");
    }, 700);
    const timeOut3 = setTimeout(() => {
      setFirstTransitionImg("hidden");
    }, 1400);
    return (
      () => clearTimeout(timeOut),
      () => clearTimeout(timeOut2),
      () => clearTimeout(timeOut3)
    );
  }, []);
  return (
    <div className="w-full h-full relative ">
      <Image
        src={"/cover-images/3.png"}
        alt="img"
        width={3840}
        height={2160}
        quality={100}
        className={`${firstTransitionImg} duration-700 absolute `}></Image>
      <Image
        src={"/cover-images/7.png"}
        alt="img"
        width={3840}
        height={2160}
        quality={100}
        className={`${secondBgImg} duration-700 w-full md:h-full rounded-[15px] min-h-[230px]`}></Image>
      <div
        className={`lg:absolute lg:top-0 right-0 left-0 bottom-0 w-full h-full duration-1000 ${contentVisible} `}>
        <DiscoverContent></DiscoverContent>
      </div>
    </div>
  );
};

export default DiscoverDestiny;
