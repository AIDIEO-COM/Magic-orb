"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./spin.css";
import "./planetPositionContainer.css";
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

const PlanetPositionContainer = () => {
  return (
    <div className=" w-[83%] mx-auto h-[300px] lg:h-full p-5 flex justify-center items-center relative">
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
      <div className="w-[300px] h-[260px] lg:w-[650px] lg:h-[570px] 2xl:w-[750px] 2xl:h-[650px]  border p-3.5 lg:p-[40px] border-dashed rounded-[50%]  border-white absolute border-opacity-40">
        <Image
          src={neptune}
          alt="neptune"
          width={25}
          height={25}
          className="absolute bottom-[21.5%] "
        ></Image>
        <div className="w-full h-full border border-dashed rounded-[50%] border-white  p-3.5 lg:p-[40px] relative border-opacity-40">
          <Image
            src={uranus}
            alt="neptune"
            width={31}
            height={23}
            className="absolute bottom-[19.5%] "
          ></Image>
          <div className="w-full h-full border border-dashed rounded-[50%] border-white  p-3.5 lg:p-[40px] relative border-opacity-40">
            <Image
              src={saturn}
              alt="neptune"
              width={45}
              height={33}
              className="absolute bottom-[15%] "
            ></Image>
            <div className="w-full h-full border border-dashed rounded-[50%] border-white  p-3.5 lg:p-[40px] relative border-opacity-40">
              <Image
                src={jupiter}
                alt="neptune"
                width={75}
                height={42}
                className="absolute bottom-[6%]  "
              ></Image>
              <div className="w-full h-full border border-dashed rounded-[50%] border-white  p-3.5 lg:p-[40px] relative border-opacity-40">
                <Image
                  src={venus}
                  alt="neptune"
                  width={34}
                  height={19}
                  className="absolute bottom-[12%] "
                ></Image>
                <div className="w-full h-full border border-dashed rounded-[50%] border-white  p-3.5 lg:p-[40px] relative border-opacity-40">
                  <div className="absolute bottom-[7%]">
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
                  </div>
                  <div className="w-full h-full border border-dashed rounded-[50%] border-white  p-3.5 lg:p-[40px] relative border-opacity-40">
                    <Image
                      src={mercury}
                      alt="neptune"
                      width={42}
                      height={23}
                      className="absolute -bottom-[4%] h-fit w-fit "
                    ></Image>
                    <div className="w-[87%] mx-auto h-full border border-dashed rounded-[50%] border-white  p-5 relative border-opacity-40">
                      <Image
                        src={mars}
                        alt="neptune"
                        width={22}
                        height={17}
                        className="absolute -bottom-[9%] "
                      ></Image>
                      <div className="relative h-full w-full  border-opacity-40 flex items-center justify-center">
                        <Image
                          src={sun}
                          alt="sun"
                          width={80}
                          height={80}
                          className="h-fit w-fit md:w-[70px] md:h-[70px]"
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
