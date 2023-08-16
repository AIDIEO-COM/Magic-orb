import Image from "next/image";
import BannerContent from "./BannerContent";
import HomeStatistics from "./HomeStatistics";
import { useState } from "react";

const BannerSideContent = ({ bannerSideContent }) => {
  const [isStatisticsShow, setIsStatisticsShow] = useState(false);
  const handleStatisticShow = () => {
    setIsStatisticsShow(!isStatisticsShow);
  };
  return (
    <div
      className={`col-start-9 col-end-11 flex flex-col gap-y-3 ${bannerSideContent} duration-700 relative`} >
      <div className="h-[35%] w-[120%] absolute -left-[20%] z-1 overflow-hidden hidden lg:inline-block">
        <Image
          src={"https://i.ibb.co/QN7h6G0/orb22-1.png"}
          alt="sideimg"
          width={300}
          height={250}
          className="w-full h-full z-1"></Image>
        <BannerContent></BannerContent>
      </div>
      <div
        onClick={handleStatisticShow}
        className="min-h-fit xl:h-[62%] w-full pr-1 xl:px-2 xl:pb-3 pt-4 xl:pt-0 cursor-pointer mt-auto">
        {isStatisticsShow === false && (
          <div className="default-gradient rounded-[16px] w-full h-full min-h-fit flex  items-center">
            <p className="font-berlin text-[#FFC8AA] text-xl md:text-2xl p-6 ">
              Adds here for free version. Click to swap to the premium version
              view
            </p>
          </div>
        )}
        {isStatisticsShow && <HomeStatistics />}
      </div>
    </div>
  );
};

export default BannerSideContent;