"use client";
import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";
import Image from "next/image";
import React from "react";
import PlanetControlCard from "./planetControlCard/PlanetControlCard";

const PlanetPositioning = () => {
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
        <div className={`lg:absolute lg:top-0 right-0 left-0 bottom-0 w-full h-full text-white`}>
          <div className="w-1/3 border h-full flex flex-col items-center justify-between">
            {/* <div></div> */}
            <PlanetControlCard></PlanetControlCard>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default PlanetPositioning;
