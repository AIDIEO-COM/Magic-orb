"use client";
import Image from "next/image";
import CompatibilityContent from "./CompatibilityContent";
import { useEffect, useState } from "react";

const CompatibilityCheck = () => {
    const [firstTransitionImg, setFirstTransitionImg] = useState("w-[400px] h-[300px] bottom-0 left-[300px]");
    const [secondBgImg, setSecondBgImg] = useState("opacity-0");
    useEffect(() => {
    const timeOut = setTimeout(() => {
      setFirstTransitionImg("bottom-0 left-0 w-full h-full");
      setSecondBgImg("opacity-100");
    }, 5);
    return () => clearTimeout(timeOut);
    }, []);
  return (
    <div className="w-full h-full relative">
      <Image
        src={"https://i.ibb.co/j69D2tn/Tarot.png"}
        alt="img"
        width={1000}
        height={1000}
        className={`${firstTransitionImg} duration-700 lg:absolute`}
      ></Image>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 lg:flex xl:gap-12 2xl:gap-24 hidden ${secondBgImg} duration-700`}>
        <Image
          src={"https://i.ibb.co/7WQWsnk/LEft.png"}
          alt="img"
          width={400}
          height={400}
          className="w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px]"
        ></Image>
        <Image
          src={"https://i.ibb.co/dM41vcy/Roght.png"}
          alt="img"
          width={400}
          height={400}
          className="w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px]"
        ></Image>
      </div>
      <div
        className={`lg:absolute lg:top-0 right-0 left-0 bottom-0 w-full h-full duration-1000 ${secondBgImg} `}
      >
        <CompatibilityContent></CompatibilityContent>
      </div>
    </div>
  );
};

export default CompatibilityCheck;
