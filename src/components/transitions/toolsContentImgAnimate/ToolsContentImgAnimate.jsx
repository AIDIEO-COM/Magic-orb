"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ToolsContentImgAnimate = ({imgLink}) => {
    const [transition, setSetTransition] = useState('');
    useEffect(() => {
        setSetTransition('opacity-0')
        const timer = setTimeout(() => {
            setSetTransition('opacity-100 duration-500 transition ease-in-out')
        }, 5)
        return () => clearTimeout(timer);
    }, [imgLink]);
    return (
        <div className={`w-full h-full max-h-[346px]  duration-500 ${imgLink === imgLink && transition}`}>
            <Image
              src={imgLink}
              alt="the magic orb"
              width={1920}
              height={1080}
              className="w-full h-full mt-6 object-cover bg-center" 
            />
          </div>
    );
};

export default ToolsContentImgAnimate;