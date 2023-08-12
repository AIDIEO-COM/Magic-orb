"use client";
import React, { useState } from "react";
import Sidebar from "../../shared/sidebar/Sidebar";
import Navbar from "../../shared/navbar/Navbar";

const HomeLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="xl:grid grid-cols-8  relative bg-gradient-to-b from-[#442143] to-[#2B3057]">
      {/* mobile side drawer */}
      <div className="overflow-hidden h-fit w-fit xl:hidden">
        <div
          className={`h-screen overflow-y-scroll xl:hidden bg-gradient-to-b from-[#3D2D3B] to-[#232141] fixed top-0 left-0 ${
            sidebarOpen ? "" : "-translate-x-[100%]"
          } w-[60%] sm:w-[300px] z-50 duration-500`}
        >
          <Sidebar></Sidebar>
        </div>
        {sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 z-[49]"
          ></button>
        )}
      </div>
      {/* desktop sidebar */}
      <div className="hidden xl:inline-block lg:col-start-1 lg:col-end-2 bg-gradient-to-b from-[#442143] to-[#2B3057] border-r-2 border-white ">
        <Sidebar></Sidebar>
      </div>
      <div className="xl:col-start-2 xl:col-end-9">
        <Navbar toggleSidebar={toggleSidebar}></Navbar>
        <div className="lg:p-8 lg:pb-0 w-full  bg-gradient-to-r from-[#3D2D3B] to-[#232141]">
        {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
