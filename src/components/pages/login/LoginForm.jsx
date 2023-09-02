"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("redirectUrl");
  const { replace } = useRouter();
  // get data from login form
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    if (value.email === "" || value.password === "") {
      alert("Please fill in all fields");
      return;
    }
    // if (!value.email.includes("@gmail.com")) {
    //   // replace email into username
    //   value.username = value.email;
    //   delete value.email;
    // }
    fetch("https://magic-orb-server-five.vercel.app/api/v1/user/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    }).then(res => res.json()).then(res => {
      if(res.success) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("Login successful!");
        e.target.reset();
        replace(from || "/")
      }
      else {
        toast.error("Login failed, please try again!")
      }
    })
  };
  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="flex flex-col mb-2.5">
        <label
          htmlFor="email"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Email:
        </label>
        <input
          type="text"
          placeholder="Email or username"
          name="email"
          className="bg-[#674B53] h-8 px-3 rounded-2xl text-sm text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
        />
      </div>
      <div className="flex flex-col mt-6 mb-2.5">
        <label
          htmlFor="Password"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-[#674B53] h-8 px-3 rounded-2xl text-sm text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D] "
        />
      </div>
      <div className="flex items-center gap-2 mb-2 ml-4">
        <input
          type="radio"
          name="keep-logged-in"
          className="w-4 h-4 rounded-full border-[#866345] cursor-pointer"
        />
        <p className="text-[#DBCBF4] text-sm">Keep logged in</p>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <button className="text-[#E5BD9D] text-xs md:text-sm bg-[#674B53] px-6 rounded-lg py-1">
          Log-in
        </button>
        <Link href="/registration">
          <button className="text-[#E5BD9D] text-xs md:text-sm px-2 rounded-lg py-1 underline">
            Sign-in
          </button>
        </Link>
      </div>
      <div>
        <p className="text-center text-[#DBCBF4] text-xs mt-3">
          Sign-in easily using alternative options
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <p className="bg-[#6c5757] p-2 rounded-full cursor-pointer">
            <AiOutlineGoogle size={20} />
          </p>
          <p className="bg-[#6c5757] p-2 rounded-full cursor-pointer">
            <FaFacebookF />
          </p>
          <p className="bg-[#6c5757] p-2 rounded-full cursor-pointer">
            <FiTwitter />
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
