"use client";
import Image from "next/image";
import React from "react";
import sun from "/public/planet-images/sun.png";
import neptune from "/public/planet-images/neptune.png";
import earth from "/public/planet-images/earth.png";
import jupiter from "/public/planet-images/jupiter.png";
import saturn from "/public/planet-images/saturn.png";
import uranus from "/public/planet-images/uranus.png";
import venus from "/public/planet-images/venus.png";
import mars from "/public/planet-images/mars.png";
import mercury from "/public/planet-images/mercury.png";
import moon from "/public/planet-images/moon.png";

const PlanetPositioningTwo = ({ heliocentric }) => {
  return (
    <div className=" w-[100%] md:w-[83%] mx-auto sm:h-[600px] md:h-[800px] lg:h-full p-5 flex justify-center items-center relative">
      <div className="h-full w-full flex justify-center items-center ">
        <div className="relative w-fit h-fit flex justify-center items-center">
          <Image
            src={"https://i.ibb.co/YZtQRY0/galaxy.png"}
            alt="planet position two"
            width={700}
            height={500}
            className=""
          ></Image>
          <div className="absolute top-0 right-0 left-0 bottom-0 ">
            <div className="flex justify-center items-center h-full relative ">
              <div className="transition-all duration-500 absolute gap-0  bottom-[26%] left-0  w-[61.3%] h-fit -rotate-[50deg] flex items-center pl-[8%] ">
                <Image
                  src={neptune}
                  alt="ellipse planet"
                  width={20}
                  height={21}
                  className="w-[8px] h-[9px] md:w-auto md:h-auto"
                ></Image>
                <Image
                  src={uranus}
                  alt="ellipse planet"
                  width={31}
                  height={23}
                  className="w-[20px] h-[15px] md:w-auto md:h-auto"
                ></Image>
                <Image
                  src={saturn}
                  alt="ellipse planet"
                  width={45}
                  height={34}
                  className="w-[30px] h-[20px] md:w-auto md:h-auto"
                ></Image>
                <Image
                  src={jupiter}
                  alt="ellipse planet"
                  width={58}
                  height={40}
                  className="w-[30px] h-[20px] md:w-[58px] md:h-[40px]"
                ></Image>
                <Image
                  src={venus}
                  alt="ellipse planet"
                  width={34}
                  height={19}
                  className="w-[20px] h-[10px] md:w-auto md:h-auto"
                ></Image>
                {!heliocentric ? (
                  <div className="relative">
                    <Image
                      src={earth}
                      alt="ellipse planet"
                      width={25}
                      height={25}
                      className="w-[15px] h-[15px] md:w-auto md:h-auto"
                    ></Image>
                    <Image
                      src={moon}
                      alt="moon"
                      width={10}
                      height={10}
                      className="absolute -bottom-1.5"
                    ></Image>
                  </div>
                ) : (
                  <Image
                    src={sun}
                    alt="ellipse planet"
                    width={56}
                    height={56}
                    className="w-[20px] h-[20px] md:w-auto md:h-auto"
                  ></Image>
                )}
                <Image
                  src={mercury}
                  alt="ellipse planet"
                  width={80}
                  height={80}
                  className="w-[20px] h-[20px] md:w-auto md:h-auto"
                ></Image>
                <Image
                  src={mars}
                  alt="ellipse planet"
                  width={42}
                  height={23}
                  className="w-[20px] h-[20px] md:w-auto md:h-auto"
                ></Image>
                {heliocentric ? (
                  <div className="relative">
                  <Image
                    src={earth}
                    alt="ellipse planet"
                    width={25}
                    height={25}
                    className="w-[15px] h-[15px] md:w-auto md:h-auto"
                  ></Image>
                  <Image
                    src={moon}
                    alt="moon"
                    width={10}
                    height={10}
                    className="absolute -bottom-1.5"
                  ></Image>
                </div>
                ) : (
                  <Image
                    src={sun}
                    alt="ellipse planet"
                    width={56}
                    height={56}
                    className="w-[20px] h-[20px] md:w-auto md:h-auto"
                  ></Image>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetPositioningTwo;
