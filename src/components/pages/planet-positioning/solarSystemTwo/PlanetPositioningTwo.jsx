"use client";
import Image from "next/image";
import React, { useState } from "react";
import sun from "/public/planet-images/sun.png";
import neptune from "/public/planet-images/neptune.png";
import earth from "/public/planet-images/earth.png";
import jupiter from "/public/planet-images/jupiter.png";
import saturn from "/public/planet-images/saturn.png";
import uranus from "/public/planet-images/uranus.png";
import venus from "/public/planet-images/venus.png";
import mars from "/public/planet-images/mars.png";
import mercury from "/public/planet-images/mercury.png";
import Link from "next/link";

const PlanetPositioningTwo = () => {
  return (
    <div className=" w-[83%] mx-auto h-[300px] lg:h-full p-5 flex justify-center items-center relative">
      <Link href={"/tools/astrology-table/planet-positioning"}>
        <button className="absolute top-12 right-0 font-berlin text-xs sm:text-[15px] text-[#624652] rounded-[5px] bg-[#BFB1D6] py-[2px] px-3">
          Change Planet
        </button>
      </Link>
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
              <div className=" absolute bottom-[25.2%] left-0  w-[61.3%] h-fit -rotate-[50deg] flex items-center pl-[10%]">
                <Image
                  src={neptune}
                  alt="ellipse planet"
                  width={20}
                  height={21}
                  className=""
                ></Image>
                <Image
                  src={uranus}
                  alt="ellipse planet"
                  width={31}
                  height={23}
                  className=""
                ></Image>
                <Image
                  src={saturn}
                  alt="ellipse planet"
                  width={45}
                  height={34}
                  className=""
                ></Image>
                <Image
                  src={jupiter}
                  alt="ellipse planet"
                  width={76}
                  height={42}
                  className=""
                ></Image>
                <Image
                  src={venus}
                  alt="ellipse planet"
                  width={34}
                  height={19}
                  className=""
                ></Image>
                <Image
                  src={earth}
                  alt="ellipse planet"
                  width={25}
                  height={25}
                  className=""
                ></Image>
                <Image
                  src={mercury}
                  alt="ellipse planet"
                  width={80}
                  height={80}
                  className=""
                ></Image>
                <Image
                  src={mars}
                  alt="ellipse planet"
                  width={42}
                  height={23}
                  className=""
                ></Image>
                <Image
                  src={sun}
                  alt="ellipse planet"
                  width={76}
                  height={76}
                  className=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetPositioningTwo;
