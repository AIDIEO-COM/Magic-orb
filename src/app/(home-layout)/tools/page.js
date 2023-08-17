import ToolsPage from "@/components/pages/tools/toolsPage/ToolsPage";
import imageCardInfo from "@/temp-data/imageCardInfo";

const Tools = () => {
  const changeReferenceTools = [...imageCardInfo];
  return (
    <ToolsPage imageCardInfo={imageCardInfo} changeReferenceTools={changeReferenceTools}></ToolsPage>
  );
};

export default Tools;
