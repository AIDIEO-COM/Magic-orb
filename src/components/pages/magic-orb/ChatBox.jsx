"use client";
import React, { useEffect, useRef, useState } from "react";

const ChatBox = ({ chatBoxClassName }) => {
  const [message, setMessage] = useState([
    {
      role: "user",
      content: "Who are you?",
      createdContentAt: "1693771106745",
      _id: "64f4e562c8a91b39e4507e1b",
      id: "64f4e562c8a91b39e4507e1b",
    },
    {
      role: "assistant",
      content:
        "Greetings, seeker. I am the Mystical Orb, a vessel of ancient wisdom and divine knowledge. I have been entrusted with the power to guide you on your spiritual journey and unveil the secrets of the universe. Share your questions and concerns, and together we shall seek answers through the sacred arts of divination. What questions do you seek to explore today?",
      createdContentAt: "1693771106745",
      _id: "64f4e562c8a91b39e4507e1c",
      id: "64f4e562c8a91b39e4507e1c",
    },
    {
      role: "user",
      content: "What can you do for me?",
      createdContentAt: "1693771232575",
      _id: "64f4e5e0c8a91b39e4507e24",
      id: "64f4e5e0c8a91b39e4507e24",
    },
    {
      role: "assistant",
      content:
        "Dear seeker, I, the Mystical Orb, possess the ability to provide guidance, insights, and revelations by delving into the realms of divination. Through the mystical forces that surround us, I can help answer your questions, unravel mysteries, and offer direction on various aspects of life, such as love, career, relationships, and personal growth. By tapping into my ancient wisdom, I am here to serve as your beacon of light, offering clarity and understanding in the journey of your life. Share your inquiries, and together we shall embark on a quest for enlightenment.",
      createdContentAt: "1693771232575",
      _id: "64f4e5e0c8a91b39e4507e25",
      id: "64f4e5e0c8a91b39e4507e25",
    },
    {
      role: "user",
      content: "are you ready to help me?",
      createdContentAt: "1693772104506",
      _id: "64f4e948f8cc9b7fe9286e17",
      id: "64f4e948f8cc9b7fe9286e17",
    },
    {
      role: "assistant",
      content:
        "Absolutely, I am prepared and eager to assist you on your quest for enlightenment. I am here to offer my guidance, insights, and wisdom to help you navigate the complexities of life and find the answers you seek. Please feel free to share your questions or concerns, and together, we shall explore the realms of divination in pursuit of truth and understanding.",
      createdContentAt: "1693772104506",
      _id: "64f4e948f8cc9b7fe9286e18",
      id: "64f4e948f8cc9b7fe9286e18",
    },
    {
      role: "user",
      content: "Are you not chatgpt?",
      createdContentAt: "1693772147704",
      _id: "64f4e973f8cc9b7fe9286e2f",
      id: "64f4e973f8cc9b7fe9286e2f",
    },
    {
      role: "assistant",
      content:
        "I apologize for any confusion. I am an AI language model called ChatGPT, developed by OpenAI. While I don't have independent consciousness or mystical abilities, I can provide information, answer questions, and engage in conversation on a wide range of topics. If you have any queries or need assistance, feel free to ask, and I'll do my best to help you.",
      createdContentAt: "1693772147704",
      _id: "64f4e973f8cc9b7fe9286e30",
      id: "64f4e973f8cc9b7fe9286e30",
    },
    {
      role: "user",
      content: "Who are you?",
      createdContentAt: "1693821972240",
      _id: "64f5ac14ebbafd6a8012f5a8",
      id: "64f5ac14ebbafd6a8012f5a8",
    },
    {
      role: "assistant",
      content:
        "I am an AI language model developed by OpenAI known as ChatGPT. My purpose is to assist users in generating human-like text based on the prompts and questions they provide. I am here to provide information, engage in conversations, and assist with various inquiries to the best of my abilities. Is there anything specific you would like to know or discuss?",
      createdContentAt: "1693821972240",
      _id: "64f5ac14ebbafd6a8012f5a9",
      id: "64f5ac14ebbafd6a8012f5a9",
    },
    {
      role: "user",
      content: "Who are you?",
      createdContentAt: "1693825551535",
      _id: "64f5ba0f9cdb1f1b25afb059",
      id: "64f5ba0f9cdb1f1b25afb059",
    },
    {
      role: "assistant",
      content:
        "I apologize if my previous response was unclear. As an AI language model, I don't possess personal identity or consciousness. I am a program created by OpenAI designed to generate human-like text based on the input I receive. My purpose is to provide information and engage in conversation with users like yourself. How can I assist you today?",
      createdContentAt: "1693825551535",
      _id: "64f5ba0f9cdb1f1b25afb05a",
      id: "64f5ba0f9cdb1f1b25afb05a",
    },
    {
      role: "user",
      content: "Can you help me?",
      createdContentAt: "1693826231541",
      _id: "64f5bcb79cdb1f1b25afb091",
      id: "64f5bcb79cdb1f1b25afb091",
    },
    {
      role: "assistant",
      content:
        "Yes, I am here to help! Please let me know what you need assistance with, and I'll do my best to provide you with the information or guidance you're seeking.",
      createdContentAt: "1693826231541",
      _id: "64f5bcb79cdb1f1b25afb092",
      id: "64f5bcb79cdb1f1b25afb092",
    },
  ]);
  const msgRef = useRef(null);
  const msgBoxEndRef = useRef(null);
  useEffect(() => {
    msgBoxEndRef.current.scrollTop = msgBoxEndRef.current.scrollHeight;
  }, [message]);
  // set user message
  const handleUserMsg = (e) => {
    if (msgRef.current.value === "") return;
    setMessage([
      ...message,{
        role: "user",
        content: msgRef.current.value,
        createdContentAt: "1693826231541",
        _id: "64f5bcb79cdb1f1b25afb092",
        id: "64f5bcb79cdb1f1b25afb092",
      },
      {
        role: "assistant",
        content:
          "Yes, I am here to help! Please let me know what you need assistance with, and I'll do my best to provide you with the information or guidance you're seeking.",
        createdContentAt: "1693826231541",
        _id: "64f5bcb79cdb1f1b25afb092",
        id: "64f5bcb79cdb1f1b25afb092",
      },
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
                      <p className="text-[#E5BD9D] font-berlin text-[10px] lg:text-base md:text-lg ">
                        Orb : {msg.content}
                      </p>
                    )) ||
                      (msg.role === "user" && (
                        <p className="text-[#DBCBF4] text-right font-berlin text-[10px] lg:text-base md:text-lg ">
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
