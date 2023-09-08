"use client";
import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";
import Image from "next/image";
import React, { useState } from "react";
import PlanetControlCard from "./planetControlCard/PlanetControlCard";
import Link from "next/link";
import PlanetPositionContainer from "./planetPositionContainer/PlanetPositionContainer";

const PlanetPositioning = () => {
  const [detailedView, setDetailedView] = useState(false);
  const [heliocentric, setHeliocentric] = useState(false);
  return (
    <PageWrapper>
      <div className="w-full h-full lg:h-[700px] 2xl:h-full ">
        <div className="w-full h-full">
          <Image
            src={"https://i.ibb.co/GQT4Zj9/Rectangle-53.png"}
            alt="planetpositioningimg"
            width={1000}
            height={1000}
            className={`h-full w-full duration-1000 rounded-[15px] `}
          ></Image>
          <div
            className={`lg:absolute lg:top-0 right-0 left-0 bottom-0 w-full h-full text-white px-[2%] md:px-0 lg:flex  lg:items-center`}
          >
            {/* planet control card and main screen card container */}
            <div className=" lg:w-1/3 h-full flex flex-col items-center justify-between lg:justify-end lg:pb-10 gap-10 lg:gap-[48px]">
              <div></div>
              <PlanetControlCard
                detailedView={detailedView}
                heliocentric={heliocentric}
                setDetailedView={setDetailedView}
                setHeliocentric={setHeliocentric}
              ></PlanetControlCard>
              <div className="relative w-fit h-fit">
                <Image
                  src={"https://i.ibb.co/hySqkCK/image-8-1.png"}
                  width={500}
                  height={400}
                  className="w-full h-full rounded-md"
                  alt="mainscreenimg"
                ></Image>
                <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
                  <Link href={"/tools/astrology-table"}>
                  <button className="font-berlin text-xs sm:text-[15px] text-[#624652] rounded-[5px] bg-[#BFB1D6] py-[2px] px-3">
                    Main screen
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* planet position container */}
            <div className="hidden lg:inline-block w-full h-full">
              <PlanetPositionContainer></PlanetPositionContainer>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PlanetPositioning;
