"use client";
import Image from "next/image";
import CompatibilityContent from "./compatibilityContent/CompatibilityContent";
import { useEffect, useState } from "react";
import SoulmatesImg from "./soulmatesImg/SoulmatesImg";

const CompatibilityCheck = () => {
  const [firstTransitionImg, setFirstTransitionImg] = useState(
    "w-[400px] h-[300px] bottom-0 left-[300px]"
  );
  const [secondBgImg, setSecondBgImg] = useState("opacity-0");
  const [isCheckSoulmatesClicked, setIsCheckSoulmatesClicked] = useState(false);
  const [isPersonSoulmates, setisPersonSoulmates] = useState([]);
  // set person soulmates
  const setPersonSoulmates = () => {
    if (isPersonSoulmates.length === 2) {
      return;
    } else {
      setisPersonSoulmates((prev) => [...prev, 1]);
    }
  };
  // check soulmates btn toggle
  const checkSoulmatesBtnToggle = () => {
    if (isPersonSoulmates.length === 2) {
      setIsCheckSoulmatesClicked(true);
    } else {
      return;
    }
  };
  // control try again btn
  const tryAgainBtnToggle = () => {
    setIsCheckSoulmatesClicked(false);
    setisPersonSoulmates([]);
  };
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
        src={"/cover-images/4.png"}
        alt="img"
        width={3840}
        height={2160}
        quality={100}
        className={`${firstTransitionImg} duration-700 lg:absolute rounded-[15px] min-h-[230px]`}
      ></Image>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 lg:flex xl:gap-12 2xl:gap-24 hidden ${secondBgImg} duration-700 `}
      >
        <div className="lg:flex xl:gap-12 2xl:gap-24 relative">
          <Image
            src={"https://i.ibb.co/7WQWsnk/LEft.png"}
            alt="img"
            width={1920}
            height={1080}
            className={`w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] ${
              isCheckSoulmatesClicked &&
              "translate-x-1/2 duration-500 opacity-0"
            }`}
          ></Image>
          {/* this img show when check soulmates btn clicked */}
          <SoulmatesImg
            isCheckSoulmatesClicked={isCheckSoulmatesClicked}
          ></SoulmatesImg>
          <Image
            src={"https://i.ibb.co/dM41vcy/Roght.png"}
            alt="img"
            width={1920}
            height={1080}
            className={`w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] ${
              isCheckSoulmatesClicked &&
              "-translate-x-1/2 duration-500 opacity-0"
            }`}
          ></Image>
        </div>
      </div>
      <div
        className={`lg:absolute lg:top-0 right-0 left-0 bottom-0 w-full h-full duration-1000 ${secondBgImg} `}
      >
        <CompatibilityContent
          isPersonSoulmates={isPersonSoulmates}
          setPersonSoulmates={setPersonSoulmates}
          checkSoulmatesBtnToggle={checkSoulmatesBtnToggle}
          isCheckSoulmatesClicked={isCheckSoulmatesClicked}
          tryAgainBtnToggle={tryAgainBtnToggle}
        ></CompatibilityContent>
      </div>
    </div>
  );
};

export default CompatibilityCheck;
