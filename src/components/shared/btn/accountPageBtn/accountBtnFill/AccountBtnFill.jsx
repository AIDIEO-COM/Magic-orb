import React from 'react';

const AccountBtnFill = ({children}) => {
    return (
        <button className="text-[#E5BD9D] text-[10px]  bg-[#674B53]  font-sans font-medium rounded-full px-1 py-0.5 md:px-[13px] md:py-1 flex items-center">
              {children}
            </button>
            
    );
};

export default AccountBtnFill;