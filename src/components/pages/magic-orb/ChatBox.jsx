"use client";
import ChatBotResTypeAnimation from "@/components/transitions/chatbotResponseTypeAnimation/ChatBotResTypeAnimation";
import React, { useEffect, useRef, useState } from "react";

const ChatBox = ({ chatBoxClassName }) => {
  const [message, setMessage] = useState([]);
  const [isResponsePending, setResponsePending] = useState(false);
  const msgRef = useRef(null);
  const msgBoxEndRef = useRef(null);
  useEffect(() => {
    msgBoxEndRef.current.scrollTop = msgBoxEndRef.current.scrollHeight;
  }, [message]);
  // get message
  useEffect(() => {
    const getMessage = async () => {
      try {
        setResponsePending(true);
        const res = await fetch(
          "https://magic-orb-server.vercel.app/api/v1/chat",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );
        const getMsgHistory = await res.json();
        if (getMsgHistory.data === null) {
          setMessage([
            {
              role: "assistant",
              content: "How can I help you today?",
            },
          ]);
          setResponsePending(false);
          return;
        }
        setMessage([
          {
            role: "assistant",
            content: "How can I help you today?",
          },
          ...getMsgHistory?.data?.messages,
        ]);
        setResponsePending(false);
      } catch (error) {
        console.log(error);
        setResponsePending(false);
      }
    };
    getMessage();
  }, []);
  // set user message
  const handleUserMsg = async (e) => {
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
        },
      ],
    };
    try {
      setResponsePending(true);
      // get response from AI
      const res = await fetch(
        "https://magic-orb-server.vercel.app/api/v1/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
          body: JSON.stringify(msg),
        }
      );
      const responseData = await res.json();
      setMessage([
        {
          role: "assistant",
          content: "How can I help you today?",
        },
        ...responseData?.data?.messages,
      ]);
      setResponsePending(false);
    } catch (error) {
      console.log(error);
      setMessage([
        ...message,
        {
          role: "user",
          content: inputMsg,
        },
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please tell me again!",
          resFailed: true,
        }
      ])
      setResponsePending(false);
    }
    msgRef.current.value = "";
  };
  // handle enter btn
  const handleEnterBtn = (e) => {
    if (e.key === "Enter") {
      handleUserMsg();
    }
  };
  return (
    <div className="md:overflow-hidden -mt-10  w-full md:w-auto h-[85%] md:h-auto">
      <div
        className={`mx-auto flex flex-col justify-between h-full md:absolute md:left-1/2 md:-translate-x-1/2  md:top-auto ${chatBoxClassName} md:bottom-12 w-[92%] md:w-[60%] xl:w-[850px] md:h-[320px] rounded-2xl bg-[#20192A] px-3.5 sm:px-5 md:px-10 py-4 sm:py-5 duration-700 `}
      >
        <div className=" w-full h-full md:h-[80%] ">
          <h1 className="text-[#DBCBF4] font-berlin text-xl md:text-3xl text-center pb-3">
            Chat with the magic orb
          </h1>
          <div
            ref={msgBoxEndRef}
            className="h-[calc(100%-55px)] md:h-[calc(100%-36px)] w-full pt-5 md:pt-3 pb-2 md:pb-0 overflow-y-scroll px-1"
          >
            <div className="w-full ">
              {message.map((msg, index) => {
                return (
                  <div key={index}>
                    {(msg.role === "assistant" && (
                      <p className={`${msg.resFailed ? 'text-red-500' : 'text-[#E5BD9D]'} font-berlin text-[10px]  md:text-[17px] bg-[#9191912e] rounded-lg w-fit max-w-[97%] text-justify sm:max-w-[95%] mb-[7px] sm:mb-[10px] px-3 py-2`}>
                        Orb : {msg.content}
                      </p>
                    )) ||
                      (msg.role === "user" && (
                        <p className="text-[#DBCBF4] font-berlin text-[10px]  md:text-[17px] bg-[#9191912e] rounded-lg w-fit max-w-[97%] text-justify ml-auto sm:max-w-[95%] mb-[7px] sm:mb-[10px] px-3 py-2">
                          {msg.content}
                        </p>
                      ))}
                  </div>
                );
              })}
              {message[message.length - 1]?.role === "user" && isResponsePending && (
                <ChatBotResTypeAnimation></ChatBotResTypeAnimation>
              )}
            </div>
          </div>
        </div>
        <div className="h-8 -mt-6 bg-[#635B74] rounded-md py-[3px] px-2 font-berlin flex justify-between md:absolute bottom-5 left-4 right-4 md:left-8 md:right-8 ">
          <input
            type="text"
            ref={msgRef}
            onKeyDown={handleEnterBtn}
            disabled={isResponsePending}
            name="userMsg"
            className="outline-none w-[80%] h-full bg-transparent text-[#C5B7DC] text-sm pl-1"
            placeholder="Type your question..."
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
