"use client"
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Navbar from '../navbar/navbar';

const HomeLayout = ({children}) => {
    return (
        <div className="grid grid-cols-10 h-screen">
            <div className="col-start-1 col-end-2 bg-gradient-to-b from-[#3D2D3B] to-[#232141]">
                <Sidebar></Sidebar>
            </div>
            <div className="col-start-2 col-end-11">
                <Navbar></Navbar>
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;