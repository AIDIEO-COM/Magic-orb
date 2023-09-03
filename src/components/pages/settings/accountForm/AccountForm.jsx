"use client"
import React from "react";

const AccountForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit} className="mt-1">
      <div className="flex flex-col mb-2">
        <label
          htmlFor="username"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Username:
        </label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="bg-[#674B53] h-6 px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label
          htmlFor="email"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Email:
        </label>
        <input
          type="text"
          placeholder="Email"
            name="email"
          className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label
          htmlFor="phone"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Phone:
        </label>
        <input
          type="text"
          placeholder="Phone"
            name="phone"
          className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            name="keepLoggedIn"
            className="w-4 h-4 rounded-full border-[#E5BD9D] cursor-pointer"
          />
          <p className="text-[#DBCBF4] text-sm">Keep logged in to devices</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="subscribeToNewsletter"
            className="w-4 h-4 rounded-full border-[#E5BD9D] cursor-pointer"
          />
          <p className="text-[#DBCBF4] text-sm">Subscribe to newsletter</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <button className="text-[#E5BD9D] text-xs md:text-sm bg-[#674B53] px-8 font-semibold rounded-lg py-1">
          Save
        </button>
        <button className="text-[#E5BD9D] text-xs md:text-sm px-2 font-semibold rounded-lg py-1 underline">
          Change password
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
