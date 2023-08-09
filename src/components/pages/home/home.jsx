import ImageCard from "@/components/shared/ImageCard/ImageCard";
import Image from "next/image";
import imageCardInfo from "@/temp-data/imageCardInfo";

const Home = () => {
  return (
    <div className="font-berlin  h-screen bg-gradient-to-r from-[#3D2D3B] to-[#232141]">
      <div className="lg:grid grid-cols-10 h-[60%]">
        <div className="col-start-1 col-end-9 ">
          <Image
            src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
            alt="homepageimg"
            width={1000}
            height={1000}
            className="w-full h-full"></Image>
        </div>
        <div className="col-start-9 col-end-11 flex flex-col gap-y-3">
          <div className="h-[30%] w-full relative overflow-hidden">
            <Image
              src={"https://i.ibb.co/QN7h6G0/orb22-1.png"}
              alt="sideimg"
              width={300}
              height={250}
              className="w-full h-full"></Image>
            <div className="absolute top-0 left-0 right-0 bottom-0 px-5 py-3">
              <div>
                <h1 className="text-[#FFC8AA] text-2xl font-semibold font-berlin">
                  Magic Orb
                </h1>
                <p className="text-[#DBCBF4] font-berlin text-sm">
                  Talk with your personal assistance
                </p>
              </div>
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2  bg-[#6b5863] rounded-xl px-3 ">
                <p className="text-[#E5BD9D] text-[11px] font-semibold tracking-wider">
                  Chat Now
                </p>
              </div>
              <div className="absolute bottom-4 left-5 text-[#FFC8AA] text-3xl">
                0
              </div>
              <div className="absolute bottom-4 right-5 text-[#FFC8AA] text-3xl">
                32
              </div>
            </div>
          </div>
          <div className="h-[70%] w-full px-2 pb-3 pt-0">
            <div className="default-gradient rounded-[16px] w-full h-full">
              <p className="font-berlin text-[#FFC8AA] text-3xl p-6">
                Adds here for free version. Click to swap to the premium version
                view
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 px-2 ">
        {imageCardInfo.slice(0, 4).map((singleImageCardInfo) => (
          <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
