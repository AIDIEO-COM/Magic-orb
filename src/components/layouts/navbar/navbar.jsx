"use client"
import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = ({toggleSidebar}) => {
    return (
        <div className="py-3 bg-gradient-to-b from-[#3D2D3B] to-[#232141] flex items-center px-3 justify-between">
            <div className="lg:hidden">
                <FaBars onClick={toggleSidebar} className="text-white text-2xl ml-3 cursor-pointer"></FaBars>
            </div>
            This is navbar
        </div>
    );
};

export default Navbar;