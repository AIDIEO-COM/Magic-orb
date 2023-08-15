import React from 'react';

const AccountBtnOutline = ({children}) => {
    return (
        <button className="text-[#E5BD9D] text-[10px] font-medium font-sans  px-1 py-0.5 md:px-2 md:py-1 underline">
              {children}
            </button>
    );
};

export default AccountBtnOutline;