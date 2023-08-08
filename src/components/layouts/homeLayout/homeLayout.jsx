"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

const HomeLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="lg:grid grid-cols-10 min-h-screen relative">
      {/* mobile side drawer */}
      <div className="overflow-hidden h-fit w-fit lg:hidden">
          <div className={`h-screen lg:hidden bg-gradient-to-b from-[#3D2D3B] to-[#232141] fixed top-0 left-0 ${sidebarOpen ? '' : '-translate-x-[100%]'} w-[50%] z-50 duration-500`}>
            <Sidebar></Sidebar>
          </div>
          {
            sidebarOpen && <button onClick={toggleSidebar} className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 z-[49]"></button>
          }
        </div>
      {/* desktop sidebar */}
      <div className="hidden lg:inline-block lg:col-start-1 lg:col-end-2 bg-gradient-to-b from-[#3D2D3B] to-[#232141]">
        <Sidebar></Sidebar>
      </div>
      <div className="lg:col-start-2 lg:col-end-11">
        <Navbar toggleSidebar={toggleSidebar}></Navbar>
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
