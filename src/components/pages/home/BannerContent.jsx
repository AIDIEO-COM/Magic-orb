
import Link from "next/link";

const BannerContent = () => {
  return (
    <div className="absolute top-0 left-0 lg:left-[20%] right-0 bottom-0 px-4 py-2 sm:px-5 sm:py-3">
      <div>
        <h1 className="text-[#FFC8AA] text-2xl font-semibold font-berlin">
          Magic Orb
        </h1>
        <p className="text-[#DBCBF4] font-berlin text-sm">
          Talk with your personal assistance
        </p>
      </div>
      <div className="absolute bottom-5 md:bottom-10 lg:bottom-4 xl:bottom-7 left-1/2 transform -translate-x-1/2  bg-[#6b5863] rounded-xl px-3 " >
      <Link href={"/magic-orb"} >
      <div className="text-[#E5BD9D] text-base md:text-lg lg:text-sm font-semibold tracking-wider">
        Chat Now
      </div>
      </Link>
    </div>
      <div className="absolute bottom-5 left-5 text-[#FFC8AA] text-3xl">0</div>
      <div className="absolute bottom-5 right-5 lg:right-10 text-[#FFC8AA] text-3xl">
        32
      </div>
    </div>
  );
};

export default BannerContent;
