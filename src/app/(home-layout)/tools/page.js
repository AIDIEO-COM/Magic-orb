import ToolsContent from "@/components/pages/tools/toolsContent/ToolsContent";
import ImageCard from "@/components/shared/imageCard/ImageCard";
import imageCardInfo from "@/temp-data/imageCardInfo";
const Tools = () => {
  return (
    <div className="grid justify-items-center md:justify-items-stretch pt-32 md:pt-0 md:grid-cols-2 gap-8 relative z-0 font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)] ">
      {/* TODO: hide overflow bottom */}
      <ToolsContent></ToolsContent>
      <div className="grid grid-cols-2 gap-4">
        {imageCardInfo.map((singleImageCardInfo) => (
          <ImageCard key={singleImageCardInfo.id} {...singleImageCardInfo} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
