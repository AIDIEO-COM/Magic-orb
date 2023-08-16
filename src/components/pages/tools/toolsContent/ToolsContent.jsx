import React from "react";
import { BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi";
import ToolsContentImgAnimate from "@/components/transitions/toolsContentImgAnimate/ToolsContentImgAnimate";
import Link from "next/link";

const ToolsContent = ({ activeCard , animateToolsContent}) => {
  return (
      <div
       className={`mx-auto w-[95%]   max-w-[600px]  -mt-28 border-r-2 sm:rotate-[3.00deg] bg-gradient-to-r from-[#442143] to-[#2B3057] lg:z-3 overflow-hidden h-[120%] ${animateToolsContent}} duration-700 `}
       style={{boxShadow: '20px 4px 20px 0px rgba(0, 0, 0, 0.25), 20px 4px 20px 0px rgba(0, 0, 0, 0.25) inset'}}
       >
        <div className="mt-10 md:mt-24 h-[250px] md:h-[300px] lg:h-[370px] overflow-hidden sm:-rotate-3 w-[110%] -translate-x-[5%]">
          <h3 className="text-center text-xl md:text-3xl font-semibold text-[#DBCBF4]">
            {activeCard.card_title === "Magic Orb" ? "The Magic Orb" : activeCard.card_title}
          </h3>
          <ToolsContentImgAnimate imgLink={activeCard.card_img_link}></ToolsContentImgAnimate>
        </div>
        <div className="mt-14 px-8 grid sm:grid-cols-2 justify-items-center gap-y-3 md:justify-items-end ">
          <div>
            <p className="text-[#DBCBF4] sm:-rotate-3">Info</p>
            <div className="sm:-rotate-3 ml-2">
              {activeCard.card_info.map((infoItem, index) => (
                <p key={index} className="text-[10px] mb-4 text-[#E5BD9D]">
                  <span className="text-[#DBCBF4]">
                    {infoItem.info_headline}:
                  </span>
                  {infoItem.info_description}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-10">
            <div className="border-l-2 pl-8 h-[200px]">
              <p className="text-[#DBCBF4] sm:-rotate-3 text-center">
                Activity
              </p>
              <div className="sm:-rotate-3 pt-8">
                <div className="flex items-center gap-4 text-[#DBCBF4]">
                  <ul className="flex flex-col">
                    {activeCard?.activity?.time.map((singleTime, index) => (
                      <li key={index}>Today: {singleTime}min</li>
                    ))}
                  </ul>
                  <ul>
                    {activeCard?.activity?.total.map((totalHour, index) => (
                      <li key={index}>Total: {totalHour}h</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="sm:-rotate-3 mb-8 relative">
              <Link href={activeCard.href}>
              <button className="bg-[#BFB1D6] text-[#624652] text-[15px] w-fit px-3 py-1 font-semibold rounded-md cursor-pointer">
                Use tool
              </button>
              </Link>
              <BiSolidChevronsLeft
                className="absolute -top-4 -left-14"
                size={25}
                color="white"
              />
              <BiSolidChevronsRight
                className="absolute -bottom-4 -right-14"
                size={25}
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ToolsContent;
