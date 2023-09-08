import Image from 'next/image';
import React from 'react';

const genarateIcon = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 8, 9, 10, 11, 12, 13, 14, 15, 16
]

const PlanetControlCard = () => {
    return (
        <div className="w-[95%] sm:max-w-[300px] default-shadow bg-[#20192A] h-[395px] rounded-[50px] p-4 text-[#DBCBF4] flex flex-col justify-between">
          <div className='w-full'>
            <p className="pl-[15%]">&lsaquo; 1998 &rsaquo;</p>
            <div className="flex gap-[6px] flex-wrap gap-y-3">
              <p className="pl-[7%] pr-[50px]">&lsaquo; June &rsaquo;</p>
              {genarateIcon.map((index) => (
                <Image
                  key={index}
                  src={"https://i.ibb.co/3SHJXn0/Ellipse-23.png"}
                  alt="elipsis"
                  width={25}
                  height={25}
                ></Image>
              ))}
            </div>
          </div>
        </div>
    );
};

export default PlanetControlCard;