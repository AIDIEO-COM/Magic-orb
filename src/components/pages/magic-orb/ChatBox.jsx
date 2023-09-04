"use client";
import React, { useEffect, useRef, useState } from "react";

const ChatBox = ({ chatBoxClassName }) => {
  const [message, setMessage] = useState([]);
  const msgRef = useRef(null);
  const msgBoxEndRef = useRef(null);
  useEffect(() => {
    msgBoxEndRef.current.scrollTop = msgBoxEndRef.current.scrollHeight;
  }, [message]);
  // get message
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await fetch("https://magic-orb-server.vercel.app/api/v1/chat", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        });
        const getMsgHistory = await res.json();
        if(getMsgHistory.data === null){
          console.log(getMsgHistory?.data)
          setMessage([
            {
              role: "assistant",
              content: "How can I help you today?",
            }
          ])
          return;
        }
        console.log(getMsgHistory);
        setMessage([{
          role: "assistant",
          content: "How can I help you today?",
        },...getMsgHistory?.data?.messages])
      } catch (error) {
        console.log(error);
      }
    }
    getMessage();
  }, []);

  // set user message
  const handleUserMsg = async(e) => {
    let inputMsg = msgRef.current.value;
    if (inputMsg === "") return;
    // set msg early 
    setMessage([...message, { role: "user", content: inputMsg }]);
    msgRef.current.value = "";
    const msg = {
      message: [
        {
          role: "user",
          content: inputMsg,
        }
      ]
    }
    try {
      const res = await fetch("https://magic-orb-server.vercel.app/api/v1/chat", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify(msg),
      });
      const responseData = await res.json();
      setMessage([{
        role: "assistant",
        content: "How can I help you today?",
      },...responseData?.data?.messages])
    } catch (error) {
      console.log(error);
    }
    msgRef.current.value = "";
  };
  // handle enter btn
  const handleEnterBtn = (e) => {
    if (e.key === "Enter") {
      handleUserMsg();
    }
  }
  return (
    <div className="md:overflow-hidden -mt-10  w-full md:w-auto h-[85%] md:h-auto">
      <div
        className={`mx-auto flex flex-col justify-between h-full md:absolute md:left-1/2 md:-translate-x-1/2  md:top-auto ${chatBoxClassName} md:bottom-12 w-[90%] md:w-[60%] xl:w-[850px] md:h-[320px] rounded-2xl bg-[#20192A] px-5 md:px-10 py-5 duration-700`}
      >
        <div className=" w-full h-[80%]">
          <h1 className="text-[#DBCBF4] font-berlin text-xl md:text-3xl text-center pb-3">
            Chat with the magic orb
          </h1>
          <div ref={msgBoxEndRef} className="h-full md:h-[calc(100%-36px)] w-full pt-5 md:pt-3 md:pb-3 overflow-y-scroll px-2 ">
            <div className="w-full space-y-2 md:space-y-0 ">
              {message.map((msg, index) => {
                return (
                  <div key={index}>
                    {(msg.role === "assistant" && (
                      <p className="text-[#E5BD9D] font-berlin text-[10px]  md:text-lg ">
                        Orb : {msg.content}
                      </p>
                    )) ||
                      (msg.role === "user" && (
                        <p className="text-[#DBCBF4] text-right font-berlin text-[10px]  md:text-lg ">
                          {msg.content} : Me
                        </p>
                      ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-8 bg-[#635B74] rounded-md py-[3px] px-2 font-berlin flex justify-between md:absolute bottom-5 left-4 right-4 md:left-8 md:right-8 ">
          <input
            type="text"
            ref={msgRef}
            onKeyDown={handleEnterBtn}
            name="userMsg"
            className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
            placeholder="Ask me..."
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
