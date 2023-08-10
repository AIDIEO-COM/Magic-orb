import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";
const Registration = () => {
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)] ">
      <div className="default-gradient max-w-[450px] h-fit mx-auto px-10 pb-4 rounded-xl py-6 ">
        <div className="flex flex-col justify-center ">
          <p className="text-[#E5BD9D] font-semibold text-[28px] text-center">
            Sign in
          </p>
          <hr className="border-2 border-[#dbcbf4cb] mt-2" />
          <p className="text-center text-[#DBCBF4] text-[10px] mt-1">
            Get one account to access all features
          </p>
          <form className="mt-10">
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="email"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Email:
              </label>
              <input
                type="text"
                placeholder="Email or username"
                className="bg-[#674B53] h-8 px-2 rounded-2xl text-sm text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div className="flex flex-col mt-6 mb-2.5">
              <label
                htmlFor="Password"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className="bg-[#674B53] h-8 px-2 rounded-2xl text-sm text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D] "
              />
              <input
                type="password"
                placeholder="Password verification"
                className="bg-[#674B53] h-8 px-2 rounded-2xl text-sm text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D] mt-2 "
              />
            </div>
            <div className="flex items-center gap-2 mb-2 ml-4">
              <input
                type="radio"
                className="w-4 h-4 rounded-full border-[#866345] "
              />
              <p className="text-[#DBCBF4] text-sm">Keep logged in</p>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-8 font-semibold rounded-lg py-1">
                Sign-in
              </button>
              <Link href="/login">
                <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
                  Login
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
        </div>
      </div>
    </div>
  );
};

export default Registration;
