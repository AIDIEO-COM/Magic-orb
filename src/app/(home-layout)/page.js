"use client";
import Home from "@/components/pages/home/Home";
import imageCardInfo from "@/temp-data/imageCardInfo";
import Aos from "aos";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 0, easing: "ease-in-sine", once: true });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);
  const disconnectReferenceImageCards = [...imageCardInfo];
  return (
    <Home disconnectReferenceImageCards={disconnectReferenceImageCards}></Home>
  );
};

export default HomePage;
