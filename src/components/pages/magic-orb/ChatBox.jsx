"use client"
import React from "react";

const ChatBox = ({chatBoxClassName}) => {
  return (
    <div className="md:overflow-hidden -mt-10  w-full md:w-auto h-[85%] md:h-auto">
      <div
        className={`mx-auto flex flex-col justify-between h-full md:absolute md:left-1/2 md:-translate-x-1/2  md:top-auto ${chatBoxClassName} md:bottom-12 w-[90%] md:w-[60%] xl:w-[850px] md:h-[300px] rounded-2xl bg-[#20192A] px-5 md:px-10 py-5 duration-700`}
      >
        <div className="text-left w-full h-fit ">
          <h1 className="text-[#DBCBF4] font-berlin text-xl md:text-3xl text-center">
            Chat with the magic orb
          </h1>
          <p className="text-[#E5BD9D] font-berlin text-base md:text-lg px-2 mt-5">
            Orb: How can I help you today?
          </p>
        </div>
        <div className="h-8 bg-[#635B74] rounded-md py-[3px] px-2 font-berlin flex justify-between md:absolute bottom-5 left-4 right-4 md:left-8 md:right-8 ">
          <input
            name="search"
            className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
            placeholder="Me: I am happy, I passed my exam!"
          ></input>
          <button className="outline-none w-fit px-3 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
            {" "}
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
