import Image from "next/image";
import React from "react";
import ToggleCheckBtn from "../toggleCheckBtn/ToggleCheckBtn";

const genarateIcon = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 8, 9, 10, 11, 12, 13,
  14, 15, 16,
];

const PlanetControlCard = ({
  detailedView,
  heliocentric,
  setDetailedView,
  setHeliocentric,
}) => {
  return (
    <div className="w-[95%] sm:max-w-[300px] default-shadow h-[395px] rounded-[50px] p-4 text-[#DBCBF4] flex flex-col justify-evenly" style={{background: 'rgba(0, 0, 0, 0.70)'}}>
      <div className="w-full pl-2.5">
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
      <div className="flex flex-col justify-center gap-2 w-full items-center">
        <ToggleCheckBtn
          leftTitle={"Sky view"}
          rightTitle={"Detailed view"}
          state={detailedView}
          setFunc={setDetailedView}
        ></ToggleCheckBtn>
        <ToggleCheckBtn
          leftTitle={"Geocentric"}
          rightTitle={"Heliocentric"}
          state={heliocentric}
          setFunc={setHeliocentric}
        ></ToggleCheckBtn>
      </div>
    </div>
  );
};

export default PlanetControlCard;
