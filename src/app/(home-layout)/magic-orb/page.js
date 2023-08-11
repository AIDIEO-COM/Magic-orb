"use client"
import Image from "next/image"
import { useEffect, useState } from "react";

const MagicOrb = () => {
  const [bannerClassName, setBannerClassName] = useState("w-[80%] h-[65%] duration-500");
  const [chatBoxClassName, setChatBoxClassName] = useState("translate-y-[100%]");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setBannerClassName("w-full h-[200px] md:h-[84%] duration-700")
      setChatBoxClassName("translate-y-0")
    }, 5)
    return () => clearTimeout(timeOut)
  })
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)]">
      <div className="overflow-hidden w-full h-full relative">
        <Image
          src={"https://i.ibb.co/RD05jMX/Tool-label-1.png"}
          alt="homepageimg"
          width={1500}
          height={1000}
          className={`${bannerClassName} `}
        ></Image>
        {/* chat box */}
        <div className="overflow-hidden">
        <div className={`mx-auto md:absolute left-1/2 md:-translate-x-1/2 ${chatBoxClassName} md:bottom-12 w-[90%] md:w-[60%] xl:w-[850px] h-[400px] md:h-[300px] rounded-xl bg-[#20192A] px-5 md:px-10 py-5 duration-700`}>
          <h1 className="text-[#DBCBF4] font-berlin text-xl md:text-3xl text-center">Chat with the magic orb</h1>
          <div className="text-left w-full h-fit px-2 mt-5">
            <p className="text-[#E5BD9D] font-berlin text-base md:text-lg ">Orb: How can I help you today?</p>
          </div>
          <div className="h-8 bg-[#635B74] rounded-md py-[3px] px-2 font-berlin flex justify-between absolute bottom-5 left-4 right-4 md:left-8 md:right-8">
            <input
              name="search"
              className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
              placeholder="Me: I am happy, I passed my exam!"></input>
            <button className="outline-none w-fit px-3 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center"> Send
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MagicOrb