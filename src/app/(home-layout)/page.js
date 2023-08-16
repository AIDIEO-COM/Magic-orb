import Home from "@/components/pages/home/Home";
import imageCardInfo from "@/temp-data/imageCardInfo";

const HomePage = () => {
  const disconnectReferenceImageCards = [...imageCardInfo];
  return <Home disconnectReferenceImageCards={disconnectReferenceImageCards}></Home>
};

export default HomePage;
