"use client";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";

const RegistrationForm = () => {
  // get data from registration form
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    if (
      value.email === "" ||
      value.password === "" ||
      value["password-verification"] === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    if (value.password !== value["password-verification"]) {
      alert("Passwords do not match");
      return;
    }
    if (!value.email.includes("@gmail.com")) {
      // replace email into username
      value.username = value.email;
      delete value.email;
    }
    console.log(value);
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
        <input
          type="password"
          placeholder="Password verification"
          name="password-verification"
          className="bg-[#674B53] h-8 px-3 rounded-2xl text-sm text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D] mt-2 "
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
        <button className="text-[#E5BD9D] text-xs md:text-sm bg-[#674B53] px-8 font-semibold rounded-lg py-1">
          Sign-in
        </button>
        <Link href="/login">
          <button className="text-[#E5BD9D] text-xs md:text-sm px-2 font-semibold rounded-lg py-1 underline">
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
  );
};

export default RegistrationForm;
