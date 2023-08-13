import Image from "next/image";
import React from "react";

const FirstSection = ({ subscriptionModel }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex gap-4 w-full lg:w-auto justify-center">
        <div
          className="w-full min-w-[280px] p-2 rounded-xl
        shadow-[10px_10px_8px_10px_#00000024] ">
          <p className="text-center text-[#DBCBF4] text-2xl font-semibold">
            Daily tasks
          </p>
          <ul className="mt-4">
            {[1, 2, 3].map((taskItem) => (
              <li
                key={taskItem}
                className="bg-gradient-to-r from-[#523843] to-[#634b56] px-4 py-2 text-[#E5BD9D] text-xs rounded-lg mb-2 md:w-fit mx-auto ">
                Talk with the orb 2 hours:
                <span className="text-[#DBCBF4] text-[10px] tracking-wider ml-0.5">
                  3min/2hours
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden p-4 sm:flex flex-col w-36 items-center justify-between rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024]">
          <p className="text-[#E5BD9D] text-xs font-semibold text-center">
            Redeem your gift card
          </p>
          <Image
            src="https://i.ibb.co/GCDyhJw/Default-cosmic-pink-gift-card-0-3507d5d2-e214-4bf6-b126-ff41039a25cf-0-1.png"
            alt="gift card"
            width={108}
            height={148}
          />
          <button className="mx-auto text-[#E5BD9D] text-xs bg-[#674B53] px-1 font-semibold rounded-lg py-1">
            Take the card
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 w-fit lg:w-fit justify-center">
        <div className="default-gradient flex  items-center gap-4 p-4  shadow-[10px_10px_8px_10px_#00000024] rounded-xl ">
          <div className="flex flex-col items-center justify-center border-r-2 w-[60%]">
            <Image
              src="https://i.ibb.co/VJM51Tn/profile-modified-2.png"
              width={120}
              height={120}
              alt="profile icon"
              className="w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
            />
            <p className="text-[#E5BD9D] font-semibold text-sm">Bulbul Ahmed</p>
            <p className="text-[#DBCBF4] font-semibold text-sm">
              #bulbulahmed10
            </p>
            <div className="flex items-center mt-1 gap-1">
              <button className="text-[#E5BD9D] text-[10px] md:text-xs bg-[#674B53]  font-semibold rounded-lg px-1 py-0.5 md:px-2 md:py-1">
                Share profile
              </button>
              <button className="text-[#E5BD9D] text-[10px] md:text-xs font-semibold rounded-lg px-1 py-0.5 md:px-2 md:py-1 underline">
                Edit profile
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/D1Jt9gY/wallet-modified-1.png"
                  alt="wallet icon"
                  width={32}
                  height={32}
                  className="w-7 md:w-[32px]"
                />
                <p className="text-[#DBCBF4] text-xs md:text-sm font-semibold">
                  Ballance: 52$
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="https://i.ibb.co/6Xz12Lp/subscription-modified-1.png"
                  alt="wallet icon"
                  width={32}
                  height={32}
                  className="w-7 md:w-[32px]"
                />
                <p className="text-[#DBCBF4] text-xs md:text-sm font-semibold">
                  No coupons left
                </p>
              </div>
            </div>
            <p className="btn text-[#472F46] text-[10px] bg-[#BEB4CE] font-semibold rounded-md px-2 py-1 w-fit mx-auto cursor-pointer mt-4">
              Manage founds
            </p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024] w-fit">
          <p className="text-2xl font-semibold text-[#DBCBF4] text-center">
            Subscriptions
          </p>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {subscriptionModel.map((subscription) => (
              <div key={subscription.id}>
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
