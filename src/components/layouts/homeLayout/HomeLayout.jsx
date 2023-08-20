"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../shared/sidebar/Sidebar";
import Navbar from "../../shared/navbar/Navbar";
import { usePathname } from "next/navigation";

const HomeLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const currentPath = usePathname();
  useEffect(() => {
    if (currentPath === currentPath) {
      setSidebarOpen(false);
    }
  }, [currentPath]);
  return (
    <div className="flex relative bg-gradient-to-b from-[#442143] to-[#2B3057] min-h-screen lg:h-screen lg:w-screen ">
      {/* mobile side drawer */}
      <div className="overflow-hidden h-fit w-fit xl:hidden">
        <div
          className={`h-screen overflow-y-scroll xl:hidden bg-gradient-to-b from-[#3D2D3B] to-[#232141] fixed top-0 left-0 ${
            sidebarOpen ? "" : "-translate-x-[100%]"
          } w-[220px] z-50 duration-500`}>
          <Sidebar></Sidebar>
        </div>
        {sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-30 z-[49]"></button>
        )}
      </div>
      {/* desktop sidebar */}
      <div className="hidden xl:inline-block w-[220px] border-r-2 border-white h-full">
        <Sidebar></Sidebar>
      </div>
      <div className="w-full h-full  overflow-hidden relative">
        <Navbar toggleSidebar={toggleSidebar}></Navbar>
        <div className="lg:p-[34px] w-full min-h-screen lg:min-h-fit  lg:h-[calc(100vh-49px)] default-background-color">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
