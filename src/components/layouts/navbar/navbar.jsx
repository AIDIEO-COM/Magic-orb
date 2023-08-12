"use client";
import FriendRequest from "@/components/friendRequest/FriendRequest";
import Notification from "@/components/notification/Notification";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaAngleRight } from "react-icons/fa";
const Navbar = ({ toggleSidebar }) => {
  const [isFrdReqNotificationModalOpen, setIsFrdReqNotificationModalOpen] =
    useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const toggleNotificationModal = (modalName) => {
    if (modalName === "friendRequest") {
      setIsNotificationModalOpen(false);
      setIsFrdReqNotificationModalOpen(!isFrdReqNotificationModalOpen);
    } else {
      setIsFrdReqNotificationModalOpen(false);
      setIsNotificationModalOpen(!isNotificationModalOpen);
    }
  };
  return (
    <div className="py-4 px-4 md:px-7 lg:px-14 lg:h-[60px] bg-gradient-to-b from-[#3D2D3B] to-[#232141] flex items-center justify-between relative z-1">
      {/* menubar for mobile */}
      <div className="xl:hidden">
        <FaBars
          onClick={toggleSidebar}
          className="text-white text-2xl ml-3 cursor-pointer"></FaBars>
      </div>
      {/* navbar content here */}
      <div className="w-[38%] h-7 bg-[#635B74] rounded-md py-[3px] px-2 font-berlin lg:flex justify-between hidden lg:absolute z-10">
        <input
          name="search"
          className="outline-none w-[80%] h-full bg-transparent text-white text-sm pl-1"
          placeholder="Search"></input>
        <button className="outline-none w-[6%] h-full bg-[#BFB1D6] rounded-md flex items-center justify-center">
          <FaAngleRight className="w-4 h-4 text-[#624652]"></FaAngleRight>
        </button>
      </div>
      {/* logo for mobile device */}
      <div className="lg:hidden">
        <Image
          src={"https://i.ibb.co/kxxsFW7/home-modified-3.png"}
          alt="logo"
          width={125}
          height={33}></Image>
      </div>
      <div className="flex w-fit h-full items-center gap-4 z-20 lg:absolute right-14 ">
        <Image
          onClick={() => toggleNotificationModal("friendRequest")}
          src={"https://i.ibb.co/RTPVZK9/notification-modified-1.png"}
          alt="notification-modified"
          width={28}
          height={28}
          className="cursor-pointer"></Image>
        <Image
          onClick={() => toggleNotificationModal("notifications")}
          src={"https://i.ibb.co/HnQhpXc/Notifications.png"}
          alt="notification-modified"
          width={28}
          height={28}
          className="cursor-pointer"></Image>
      </div>
      <FriendRequest
        isOpen={isFrdReqNotificationModalOpen}
        onClose={() => toggleNotificationModal("friendRequest")}
      />
      <Notification
        isOpen={isNotificationModalOpen}
        onClose={() => toggleNotificationModal("notification")}
      />
    </div>
  );
};

export default Navbar;
