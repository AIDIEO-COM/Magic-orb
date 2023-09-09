"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./spin.css";
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

const PlanetPositionContainer = () => {
  return (
    <div className=" w-[83%] mx-auto h-[300px] lg:h-full p-5 flex justify-center items-center relative">
      <Link href={"/tools/astrology-table/planet-positioning-two"}>
        <button className="absolute top-12 right-0 font-berlin text-xs sm:text-[15px] text-[#624652] rounded-[5px] bg-[#BFB1D6] py-[2px] px-3">
          Change Planet
        </button>
      </Link>
      {/* <div class="wrapper">
        <div class="neptune-container">
          <Image src={neptune} alt="planetimg" width={80} height={80}></Image>
        </div>
        <div class="uranus-container">
          <Image src={uranus} alt="planetimg" width={80} height={80}></Image>
        </div>
        <div class="saturn-container">
          <Image src={saturn} alt="planetimg" width={80} height={80}>
          </Image>
        </div>
        <div class="jupiter-container">
          <Image src={jupiter} alt="planetimg" width={80} height={80}>
          </Image>
        </div>
        <div class="mars-container">
          <Image src={mars} alt="planetimg" width={80} height={80}>
          </Image>
        </div>
        <div class="earth-container">
          <Image src={earth} alt="planetimg" width={80} height={80}>
          </Image>
        </div>
        <div class="venus-container">
          <Image src={venus} alt="planetimg" width={80} height={80}>
          </Image>
        </div>
        <div class="mercury-container">
          <Image src={mercury} alt="planetimg" width={80} height={80}>
          </Image>
        </div>
        <div class="sun-container">
          <Image src={sun} alt="planetimg" width={80} height={80}>
          </Image>
        </div>
      </div> */}
      <div className="w-full h-[300px] lg:w-[750px] lg:h-[750px] rounded-full border p-4 lg:p-[45px] border-dashed  border-white absolute border-opacity-50">
        <Image
          src={neptune}
          alt="neptune"
          width={25}
          height={25}
          className="absolute bottom-[21%] "
        ></Image>
        <div className="w-full h-full border border-dashed border-white rounded-full p-4 lg:p-[45px] relative border-opacity-50">
          <Image
            src={uranus}
            alt="neptune"
            width={31}
            height={23}
            className="absolute bottom-[18%] "
          ></Image>
          <div className="w-full h-full border border-dashed border-white rounded-full p-4 lg:p-[45px] relative border-opacity-50">
            <Image
              src={saturn}
              alt="neptune"
              width={45}
              height={33}
              className="absolute bottom-[13%] "
            ></Image>
            <div className="w-full h-full border border-dashed border-white rounded-full p-4 lg:p-[45px] relative border-opacity-50">
              <Image
                src={jupiter}
                alt="neptune"
                width={75}
                height={42}
                className="absolute bottom-[4%] "
              ></Image>
              <div className="w-full h-full border border-dashed border-white rounded-full p-4 lg:p-[45px] relative border-opacity-50">
                <Image
                  src={venus}
                  alt="neptune"
                  width={34}
                  height={19}
                  className="absolute bottom-[8%] "
                ></Image>
                <div className="w-full h-full border border-dashed border-white rounded-full p-4 lg:p-[45px] relative border-opacity-50">
                  <Image
                    src={earth}
                    alt="neptune"
                    width={25}
                    height={25}
                    className="absolute bottom-[5%] "
                  ></Image>
                  <div className="w-full h-full border border-dashed border-white rounded-full p-4 lg:p-[45px] relative border-opacity-50">
                    <Image
                      src={mercury}
                      alt="neptune"
                      width={42}
                      height={23}
                      className="absolute -bottom-[6%] "
                    ></Image>
                    <div className="w-full h-full border border-dashed border-white rounded-full p-5 relative border-opacity-50">
                      <Image
                        src={mars}
                        alt="neptune"
                        width={22}
                        height={17}
                        className="absolute -bottom-[8%] "
                      ></Image>
                      <div className="relative h-full w-full   border-opacity-50">
                        <Image
                          src={sun}
                          alt="sun"
                          width={80}
                          height={80}
                          className="w-[80] h-[80]"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetPositionContainer;
