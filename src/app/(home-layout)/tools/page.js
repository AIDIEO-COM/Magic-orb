import ToolsPage from "@/components/pages/tools/toolsPage/ToolsPage";
import imageCardInfo from "@/temp-data/imageCardInfo";
import SecureRoute from "@/utls/SecureRoute";

const Tools = () => {
  const changeReferenceTools = [...imageCardInfo];
  return (
    <SecureRoute><ToolsPage imageCardInfo={imageCardInfo} changeReferenceTools={changeReferenceTools}></ToolsPage></SecureRoute>
  );
};

export default Tools;
