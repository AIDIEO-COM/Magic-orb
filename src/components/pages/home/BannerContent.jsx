"use cilent";
import { useRouter } from "next/navigation";

const BannerContent = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/magic-orb");
  };
  return (
    <div
      data-aos="zoom-in"
      className="absolute top-0 left-0 lg:left-[10%] right-0 bottom-0 px-4 py-2 sm:px-5 lg:px-2 lg:py-2.5  sm:py-3">
      <div>
        <h1 className="text-[#FFC8AA] text-xl font-normal font-berlin">
          Magic Orb
        </h1>
        <p className="text-[#DBCBF4] font-berlin text-xs">
          Talk with your personal assistance
        </p>
      </div>
      <div className="absolute bottom-5 md:bottom-10 lg:bottom-4 xl:bottom-5 left-1/2 transform -translate-x-1/2  bg-[#6b5863] rounded-xl px-3 ">
        <button
          onClick={handleClick}
          className="text-[#E5BD9D] text-base md:text-lg lg:text-sm font-normal tracking-wider">
          Chat Now
        </button>
      </div>
      <div className="absolute bottom-5 lg:bottom-2 left-3 text-[#FFC8AA] text-3xl">0</div>
      <div className="absolute bottom-5 lg:bottom-2 right-5  xl:right-6 text-[#FFC8AA] text-3xl">
        32
      </div>
    </div>
  );
};

export default BannerContent;
