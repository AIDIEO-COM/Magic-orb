"use client";
import React from "react";

const PersonalInfoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-1">
      <div className="flex flex-col mb-2">
        <label
          htmlFor="firstName"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          First Name:
        </label>
        <input
          type="text"
          placeholder="Alex"
          name="firstName"
          className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label
          htmlFor="secondName"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Second Name:
        </label>
        <input
          type="text"
            name="secondName"
          placeholder="Drelciuc"
          className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D] "
        />
      </div>
      <div className="flex flex-col mb-2">
        <label
          htmlFor="countryName"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Country:
        </label>
        <input
          type="text"
            name="country"
          placeholder="USA"
          className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label
          htmlFor="dateOfBirth"
          className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide"
        >
          Date of birth:
        </label>
        <input
          type="text"
            name="dateOfBirth"
          placeholder="10.6.03"
          className="bg-[#674B53] h-6 px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            className="w-4 h-4 rounded-full border-[#E5BD9D] cursor-pointer"
          />
          <p className="text-[#DBCBF4] text-sm">Keep logged in to devices</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="w-4 h-4 rounded-full border-[#E5BD9D] cursor-pointer "
          />
          <p className="text-[#DBCBF4] text-sm">Subscribe to newsletter</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 pb-3">
        <button className="text-[#E5BD9D] text-xs md:text-sm  bg-[#674B53] px-8 font-semibold rounded-lg py-1">
          Save
        </button>
        <button className="text-[#E5BD9D] text-xs md:text-sm px-2 font-semibold rounded-lg py-1 underline">
          Exit without saving
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
