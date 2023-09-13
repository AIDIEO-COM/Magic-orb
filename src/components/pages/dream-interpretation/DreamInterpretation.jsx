"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DreamInterContent from "./dreamInterpretationContent/DreamInterContent";

const genarateIcon = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const DreamInterpretation = () => {
  const [firstTransitionImg, setFirstTransitionImg] = useState(
    "w-[400px] h-[300px] bottom-0 right-5"
  );
  const [contentTransition, setContentTransition] = useState("opacity-0");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFirstTransitionImg("bottom-0 right-0 w-full h-full");
    }, 5);
    const timeOut2 = setTimeout(() => {
      setContentTransition("opacity-100");
    }, 400);
    return () => clearTimeout(timeOut), () => clearTimeout(timeOut2);
  }, []);
  return (
    <div className="h-[95%] w-full relative">
      <Image
        src={"/cover-images/1.png"}
        alt="img"
        width={3840}
        height={2160}
        quality={100}
        className={`${firstTransitionImg} duration-700 lg:absolute min-h-[200px] rounded-[15px]`}></Image>
      <div
        className={`lg:absolute top-10 lg:top-0 right-0 left-0 bottom-0 w-full h-full duration-1000 ${contentTransition}`}>
        <DreamInterContent genarateIcon={genarateIcon}></DreamInterContent>
      </div>
    </div>
  );
};

export default DreamInterpretation;
