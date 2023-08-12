import Image from "next/image";
import BannerContent from "./BannerContent";
import { useState } from "react";

const BannerSideContent = ({ bannerSideContent }) => {
  const [isStatisticsShow, setIsStatisticsShow] = useState(false);
  const handleStatisticShow = () => {
    setIsStatisticsShow(!isStatisticsShow);
  };
  return (
    <div
      className={`col-start-9 col-end-11 flex flex-col gap-y-3 ${bannerSideContent} duration-700`}>
      <div className="h-[30%] w-full relative overflow-hidden hidden lg:inline-block">
        <Image
          src={"https://i.ibb.co/QN7h6G0/orb22-1.png"}
          alt="sideimg"
          width={300}
          height={250}
          className="w-full h-full"></Image>
        <BannerContent></BannerContent>
      </div>
      <div
        onClick={handleStatisticShow}
        className="min-h-fit xl:h-[70%] w-full pr-1 xl:px-2 xl:pb-3 pt-4 xl:pt-0 cursor-pointer">
        {isStatisticsShow === false && (
          <div className="default-gradient rounded-[16px] w-full h-full min-h-fit ">
            <p className="font-berlin text-[#FFC8AA] text-xl md:text-2xl p-6 ">
              Adds here for free version. Click to swap to the premium version
              view
            </p>
          </div>
        )}
        {isStatisticsShow && (
          <div className="default-gradient rounded-[16px] flex flex-col w-full justify-between gap-y-2 p-4">
            <div className="flex flex-col">
              <p className="text-[#E5BD9D] font-bold text-2xl text-center">
                Statistics
              </p>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center">
                You have Improved a lot in skills last me
              </span>
            </div>
            <div className="flex items-center justify-between text-[#E5BD9D] text-sm mt-2">
              <p>15%</p>
              <p>90%</p>
            </div>
            <Image
              src="https://i.ibb.co/7jMKcMS/Screenshot-2023-08-10-131125-removebg-preview.png"
              alt="statistics"
              width={500}
              height={200}
              priority
              className="w-full h-full mx-auto"
            />
            <div className="flex flex-col gap-y-1 items-center justify-between text-[#E5BD9D] text-[10px]">
              <p>Extrovert: 35% up</p>
              <p>Exposure: 5% down</p>
              <p>Self care: 23% up</p>
            </div>
            <div className="flex items-center full mx-auto mt-2 gap-4">
              <button className="text-[#E5BD9D] text-[10px] bg-[#674B53] px-1 font-semibold rounded-lg py-1">
                See full stats
              </button>
              <button className="text-[#E5BD9D] text-[10px] px-1 font-semibold rounded-lg py-1 underline">
                Improve statistics
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerSideContent;
