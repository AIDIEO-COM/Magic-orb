import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";
import Image from "next/image";
import React from "react";

const PlanetPositioningCart = () => {
  return (
    <PageWrapper>
      <div
        className="rounded-3xl md:rounded-[38px] h-fit my-5 w-full lg:w-[550px] bg-red-500 p-5 relative"
        style={{
          background: "rgba(0, 0, 0, 0.80)",
          boxShadow: "-10px 10px 3.6582px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={"https://i.ibb.co/L9B5kTm/image-8.png"}
          alt="seeplanetimg"
          width={1000}
          height={700}
          className="w-full h-auto"
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-1 sm:gap-[10px]">
          <h1 className="text-[20px] sm:text-[30px] text-[#DBCBF4] font-berlin">
            See the sky with our eyes
          </h1>
          <button className="font-berlin text-xs sm:text-[15px] text-[#624652] rounded-[5px] bg-[#BFB1D6] py-[2px] px-3">
            See planet positioning
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PlanetPositioningCart;
