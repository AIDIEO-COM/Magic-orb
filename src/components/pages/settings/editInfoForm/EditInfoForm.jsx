"use client";
import React, { useState } from "react";

const EditInfoForm = () => {
  const [isKeepLoggedChecked, setIsKeepLoggedChecked] = useState(false);
  const [isSubscribeNewsletterChecked, setIsSubscribeNewsletterChecked] =
    useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === "exitButton") {
        e.target.reset();
        return;
      }
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="default-gradient w-[96%] sm:w-[75%] md:w-[450px] lg:w-[550px] h-fit rounded-2xl mx-auto px-5 md:px-10 pb-4 "
    >
      <div className="flex flex-col justify-center py-2 md:py-3">
        <p className="text-[#E5BD9D] font-semibold text-lg sm:text-[28px] text-center pt-2 pb-2 tracking-wide">
          Settings
        </p>
        <hr className="border w-full border-[#DBCBF4] mb-0.5 mx-auto" />
        <p className="text-[10px] text-[#DBCBF4] tracking-wider text-center pt-[2px]">
          Make sure you have the best environment
        </p>
        <p className="text-[#E5BD9D] text-sm font-semibold mt-2">Account:</p>
        <div className="mt-1">
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
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#E5BD9D] text-sm font-semibold">Personal Info:</p>
        {/* here personal info form */}
        <div className="mt-1">
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
                onClick={() => setIsKeepLoggedChecked(!isKeepLoggedChecked)}
                checked={isKeepLoggedChecked}
                type="radio"
                name="keepLogged"
                className="w-4 h-4 rounded-full border-[#E5BD9D] cursor-pointer"
              />
              <p className="text-[#DBCBF4] text-sm">
                Keep logged in to devices
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                onClick={() =>
                  setIsSubscribeNewsletterChecked(!isSubscribeNewsletterChecked)
                }
                checked={isSubscribeNewsletterChecked}
                type="radio"
                name="subscribeNewsletter"
                className="w-4 h-4 rounded-full border-[#E5BD9D] cursor-pointer "
              />
              <p className="text-[#DBCBF4] text-sm">Subscribe to newsletter</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2 pb-3">
            <button
              name="saveButton"
              className="text-[#E5BD9D] text-xs md:text-sm  bg-[#674B53] px-8 font-semibold rounded-lg py-1"
            >
              Save
            </button>
            <button
              name="exitButton"
              className="text-[#E5BD9D] text-xs md:text-sm px-2 font-semibold rounded-lg py-1 underline"
            >
              Exit without saving
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditInfoForm;
