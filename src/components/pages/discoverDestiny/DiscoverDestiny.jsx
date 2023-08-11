"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DiscoverDestiny = () => {
    const [firstTransitionImg, setFirstTransitionImg] = useState("w-[400px] h-[300px] bottom-0 left-[50%]");
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
        src={"https://i.ibb.co/2YnxRVQ/Tarot-3.png"}
        alt="img"
        width={1000}
        height={1000}
        className={`${firstTransitionImg} duration-700 absolute`}
      ></Image>
      <div
        className={`absolute top-10 lg:top-0 right-0 left-0 bottom-0 w-full h-full duration-1000 ${secondBgImg} `}
      >
        {/* <CompatibilityContent></CompatibilityContent> */}
      </div>
    </div>
  );
};

export default DiscoverDestiny;