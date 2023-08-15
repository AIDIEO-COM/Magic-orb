import AccountBtnFill from "@/components/shared/btn/accountPageBtn/accountBtnFill/AccountBtnFill";
import AccountBtnOutline from "@/components/shared/btn/accountPageBtn/accountBtnOutline/AccountBtnOutline";
import GiftCard from "@/components/shared/giftCard/GiftCard";
import Image from "next/image";
import React from "react";

const FirstSection = ({ subscriptionModel }) => {
  return (
    <div className="flex flex-col lg:grid grid-cols-3 gap-5">
      <div className="flex gap-2 md:gap-4 w-full lg:w-auto justify-center lg:col-start-1 lg:col-end-2">
        <div
          className="w-full px-2 lg:px-[17px] xl:px-[25px] py-[17px] rounded-xl
        shadow-[10px_10px_8px_10px_#00000024] bg-[#20192A]">
          <p className="text-center text-[#DBCBF4] text-xl md:text-2xl font-semibold font-sans">
            Daily tasks
          </p>
          <ul className="mt-4 w-full">
            {[1, 2, 3].map((taskItem) => (
              <li
                key={taskItem}
                className=" px-2 h-[48px] xl:px-[34px] flex items-center justify-center text-[#E5BD9D] text-[10px] sm:text-xs rounded-full mb-2 mx-auto w-full account-box-gradient account-box-shadow" >
                Talk with the orb 2 hours:
                <span className="text-[#DBCBF4] text-[8px] sm:text-[10px] tracking-wider ml-1">
                  3min/2hours
                </span>
              </li>
            ))}
          </ul>
        </div>
        <GiftCard></GiftCard>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 w-fit lg:w-full justify-center col-start-2 col-end-4">
        <div className="account-box-gradient flex  items-center gap-4 p-4  shadow-[10px_10px_8px_10px_#00000024] rounded-xl ">
          <div className="flex flex-col items-center justify-center border-r-2 w-[60%]">
            <Image
              src="https://i.ibb.co/VJM51Tn/profile-modified-2.png"
              width={147}
              height={147}
              alt="profile icon"
              className="w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
            />
            <p className="text-[#E5BD9D] font-semibold text-sm">Drelciuc Petru Alexandru</p>
            <p className="text-[#DBCBF4] font-semibold text-sm">
            #dudewithbigd13
            </p>
            <div className="flex items-center mt-[11px] gap-1">
            <AccountBtnFill>Share profile</AccountBtnFill>
            <AccountBtnOutline>Edit profile</AccountBtnOutline>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 h-full">
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
        <div className="rounded-xl bg-[#20192A] shadow-[10px_10px_8px_10px_#00000024]  p-[15px] h-full">
          <p className="text-2xl font-semibold text-[#DBCBF4] text-center font-sans">
            Subscriptions
          </p>
          <div className="grid grid-cols-3 gap-3 mt-3 h-[calc(100%-44px)]">
            {subscriptionModel.map((subscription) => (
              <div key={subscription.id} className="account-box-gradient text-center p-3 rounded-2xl h-full">
                <p className="text-[#E5BD9D] font-bold text-sm">
                  {subscription.subscriptionType}
                </p>
                <p className="text-[#DBCBF4] font-semibold text-xs">
                  {subscription.price}$/mo.
                </p>
                <p className="text-[9px] text-[#E5BD9D] mt-3">
                  {subscription.subscriptionBenefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;