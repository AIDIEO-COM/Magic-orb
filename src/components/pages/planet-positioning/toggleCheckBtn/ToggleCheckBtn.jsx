import React from "react";

const ToggleCheckBtn = ({ leftTitle, rightTitle, state, setFunc }) => {
  return (
    <div className="text-[#DBCBF4] flex items-center justify-center gap-2 pt-1 ">
      <p className="text-sm lg:text-base">{leftTitle}</p>
      <div className=" h-[18px] w-10 bg-[#674B53] rounded-full overflow-hidden p-[3px] flex items-center justify-center cursor-pointer">
        <button
          onClick={() => setFunc(!state)}
          className="relative w-full h-full rounded-full "
        >
          <div
            className={`absolute top-0 duration-500  h-3 w-3 bg-[#D9D9D9] rounded-full ${
              state ? "translate-x-[22px]" : "left-0"
            }`}
          ></div>
        </button>
      </div>
      <p className="text-sm lg:text-base">{rightTitle}</p>
    </div>
  );
};

export default ToggleCheckBtn;
