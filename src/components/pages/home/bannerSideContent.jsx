import Image from 'next/image';
import React from 'react';
import BannerContent from './bannerContent';

const BannerSideContent = ({bannerSideContent}) => {
    return (
        <div
          className={`col-start-9 col-end-11 flex flex-col gap-y-3 ${bannerSideContent} duration-700`}
        >
          <div className="h-[30%] w-full relative overflow-hidden hidden lg:inline-block">
            <Image
              src={"https://i.ibb.co/QN7h6G0/orb22-1.png"}
              alt="sideimg"
              width={300}
              height={250}
              className="w-full h-full"
            ></Image>
            <BannerContent></BannerContent>
          </div>
          <div className="min-h-fit xl:h-[70%] w-full pr-1 xl:px-2 xl:pb-3 pt-4 xl:pt-0">
            <div className="default-gradient rounded-[16px] w-full h-full min-h-fit ">
              <p className="font-berlin text-[#FFC8AA] text-2xl md:text-3xl p-6">
                Adds here for free version. Click to swap to the premium version
                view
              </p>
            </div>
          </div>
        </div>
    );
};

export default BannerSideContent;