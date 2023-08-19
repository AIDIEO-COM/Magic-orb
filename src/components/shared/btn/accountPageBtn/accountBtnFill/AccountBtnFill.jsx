import React from "react";

const AccountBtnFill = ({ children }) => {
  return (
    <button className="text-[#E5BD9D] text-[10px] bg-[#674B53] font-sans font-normal rounded-full px-2 py-0.5 md:px-[13px] md:py-1 flex items-center">
      {children}
    </button>
  );
};

export default AccountBtnFill;
