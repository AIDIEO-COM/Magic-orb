import AccountBtnFill from '@/components/shared/btn/accountPageBtn/accountBtnFill/AccountBtnFill';
import AccountBtnOutline from '@/components/shared/btn/accountPageBtn/accountBtnOutline/AccountBtnOutline';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
    return (
        <div className="default-shadow account-box-gradient flex items-center gap-4 p-4 rounded-2xl  lg:w-[380px]  md:h-full">
          <div className="flex flex-col items-center justify-center border-r-2 w-[55%]">
            <Image
              src="https://i.ibb.co/VJM51Tn/profile-modified-2.png"
              width={147}
              height={147}
              alt="profile icon"
              className="w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
            />
            <p className="text-[#E5BD9D] font-normal text-sm">
              Drelciuc Petru Alexandru
            </p>
            <p className="text-[#DBCBF4] font-normal text-sm tracking-wide">
              #dudewithbigd13
            </p>
            <div className="flex items-center mt-[11px] gap-1">
              <AccountBtnFill>Share profile</AccountBtnFill>
              <AccountBtnOutline>Edit profile</AccountBtnOutline>
            </div>
          </div>
          <div className="flex flex-col justify-between px-2 py-4 h-full">
            <div></div>
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/D1Jt9gY/wallet-modified-1.png"
                  alt="wallet icon"
                  width={32}
                  height={32}
                  className=""
                />
                <p className="text-[#DBCBF4] text-xs md:text-sm font-normal">
                  Ballance: 52$
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="https://i.ibb.co/6Xz12Lp/subscription-modified-1.png"
                  alt="wallet icon"
                  width={32}
                  height={32}
                  className=""
                />
                <p className="text-[#DBCBF4] text-xs md:text-sm font-normal">
                  No coupons left
                </p>
              </div>
            </div>
            <button className=" text-[#472F46] text-[10px] bg-[#BEB4CE] font-medium rounded-full px-[13px] py-1  mx-auto cursor-pointer font-sans mt-[40px]">
              Manage founds
            </button>
          </div>
        </div>
    );
};

export default Profile;