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
import ellipsePlanet from "/public/ellipse-planet.svg";

const PlanetPositioningTwo = () => {
  return (
    <div className=" w-[83%] mx-auto h-[300px] lg:h-full p-5 flex justify-center items-center relative">
      <Link href={"/tools/astrology-table/planet-positioning"}>
        <button className="absolute top-12 right-0 font-berlin text-xs sm:text-[15px] text-[#624652] rounded-[5px] bg-[#BFB1D6] py-[2px] px-3">
          Change Planet
        </button>
      </Link>
      <div className="h-full w-full flex justify-center items-center ">
        <div className="relative border w-fit h-fit">
          <Image
            src={"https://i.ibb.co/BVgY71J/Rectangle-53-1.png"}
            alt="planet position two"
            width={700}
            height={500}
            className=""
          ></Image>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[55%] -translate-y-1/2 w-[80%] border h-[80%] rounded-full flex justify-center items-center">
            <Image src={sun} alt="ellipse planet" width={97} height={97} className=""></Image>
            {/* <Image src={ellipsePlanet} alt="ellipse planet" width={97} height={97}></Image>
            <Image src={ellipsePlanet} alt="ellipse planet" width={97} height={97}></Image> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetPositioningTwo;
