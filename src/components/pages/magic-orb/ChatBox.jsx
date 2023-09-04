"use client";
import React, { useEffect, useRef, useState } from "react";

const ChatBox = ({ chatBoxClassName }) => {
  const [chatMsg, setChatMsg] = useState([
    { orb: "How can I help you today?" },
    { user: "" },
  ]);
  const msgRef = useRef();
  const msgBoxRef = useRef();
  useEffect(() => {
    msgBoxRef.current.scrollIntoView({ behavior: "smooth"});
  }, [chatMsg]);
  // set user message
  const handleUserMsg = (e) => {
    setChatMsg([
      ...chatMsg,
      { user: msgRef.current.value },
      { orb: "How can I help you today?" },
    ]);
    // const msg = {
    //   message: [
    //     {
    //       role: "user",
    //       content: msgRef.current.value,
    //     }
    //   ]
    // }
    // console.log(msg)
    // fetch("https://magic-orb-server.vercel.app/api/v1/chat", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}}`,
    //   },
    //   body: JSON.stringify(msg),
    // }).then((res) => res.json()).then((data) => {
    //   console.log(data)
    // })
    msgRef.current.value = "";
  };
  return (
    <div className="md:overflow-hidden -mt-10  w-full md:w-auto h-[85%] md:h-auto">
      <div
        className={`mx-auto flex flex-col justify-between h-full md:absolute md:left-1/2 md:-translate-x-1/2  md:top-auto ${chatBoxClassName} md:bottom-12 w-[90%] md:w-[60%] xl:w-[850px] md:h-[300px] rounded-2xl bg-[#20192A] px-5 md:px-10 py-5 duration-700`}
      >
        <div className=" w-full h-[85%]">
          <h1 className="text-[#DBCBF4] font-berlin text-xl md:text-3xl text-center">
            Chat with the magic orb
          </h1>
          <div className="h-full md:h-[calc(100%-36px)] w-full pt-5 md:pt-3 md:pb-3 overflow-y-scroll px-2">
            <div
              
              className="w-full space-y-2 md:space-y-0 "
            >
              {chatMsg.map((msg, index) => {
                return (
                  <div key={index}>
                    {(msg.orb && (
                      <p className="text-[#E5BD9D] font-berlin text-base md:text-lg ">
                        Orb : {msg.orb}
                      </p>
                    )) ||
                      (msg.user && (
                        <p className="text-[#DBCBF4] text-right font-berlin text-base md:text-lg ">
                          {msg.user} : Me
                        </p>
                      ))}
                  </div>
                );
              })}
            </div>
            <div ref={msgBoxRef}></div>
          </div>
        </div>
        <div className="h-8 bg-[#635B74] rounded-md py-[3px] px-2 font-berlin flex justify-between md:absolute bottom-5 left-4 right-4 md:left-8 md:right-8 ">
          <input
            type="text"
            ref={msgRef}
            name="userMsg"
            className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
            placeholder="Me: I am happy, I passed my exam!"
          ></input>
          <button
            onClick={handleUserMsg}
            className="outline-none w-fit px-3 text-[#624652] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center"
          >
            {" "}
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
