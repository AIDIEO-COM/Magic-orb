import ImageCard from "@/components/shared/ImageCard/ImageCard";
import imageCardInfo from "@/temp-data/imageCardInfo";
const Tools = () => {
  return (
    <div className="grid grid-cols-2 gap-8 relative z-0">
      <div className="w-[550px] h-[900px] -mt-28 border-r-2 rotate-[3.00deg] bg-gradient-to-r from-[#442143] to-[#2B3057] z-3"></div>
      <div className="grid grid-cols-2 gap-4">
        {imageCardInfo.map((singleImageCardInfo) => (
          <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
