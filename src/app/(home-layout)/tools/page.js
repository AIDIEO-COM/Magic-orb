import ImageCard from "@/components/shared/imageCard/ImageCard";
import imageCardInfo from "@/temp-data/imageCardInfo";
import Image from "next/image";
import { BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi";
const Tools = () => {
  return (
    <div className="grid justify-items-center md:justify-items-stretch pt-32 md:pt-0 md:grid-cols-2 gap-8 relative z-0 font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)] ">
      {/* TODO: hide overflow bottom */}
      <div className="max-auto w-[90%] md:w-auto max-w-[600px] min-h-[900px] -mt-28 border-r-2 sm:rotate-[3.00deg] bg-gradient-to-r from-[#442143] to-[#2B3057] lg:z-3">
        <div className="mt-20 overflow-hidden">
          <h3 className="text-center sm:-rotate-[3.00deg]  text-3xl font-bold text-[#DBCBF4]">
            The Magic Orb
          </h3>
          <div className=" max-w-[635px] sm:-rotate-3">
            <Image
              src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
              alt="the magic orb"
              width={1000}
              height={1000}
              className="w-full h-full mt-6 sm:-ml-4 object-cover"
            />
          </div>
        </div>
        <div className="mt-14 px-8 grid sm:grid-cols-2 justify-items-end">
          <div>
            <p className="text-[#DBCBF4] sm:-rotate-3">Info</p>
            <div className="sm:-rotate-3 ml-2">
              {[1, 2, 3].map((infoItem) => (
                <p key={infoItem} className="text-[10px] mb-4 text-[#E5BD9D]">
                  <span className="text-[#DBCBF4]">Spiritual Guidance: </span>
                  Our experienced team of spiritual practitioners, mentors, and
                  advisors share their knowledge and expertise to offer guidance
                  on a wide range of spiritual topics. Through articles, blog
                  posts, and personalized consultations, we aim to support
                  individuals in finding answers, gaining new perspectives, and
                  deepening their understanding _of themselves and the universe.
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-10">
            <div className="border-l-2 pl-8 h-[200px]">
              <p className="text-[#DBCBF4] sm:-rotate-3 text-center">Activity</p>
              <div className="sm:-rotate-3 pt-8">
                {[1, 2, 3, 4].map((activityItem) => (
                  <div
                    key={activityItem}
                    className="flex gap-4 text-[#DBCBF4] items-center justify-center">
                    <p>Today: 7min</p>
                    <p>Total: 3.5h</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:-rotate-3 mb-8 relative">
              <p className="bg-[#BFB1D6] text-[#624652] text-[15px] w-fit px-3 py-1 font-semibold rounded-md cursor-pointer">
                Use tool
              </p>
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
      <div className="grid grid-cols-2 gap-4">
        {imageCardInfo.map((singleImageCardInfo) => (
          <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
