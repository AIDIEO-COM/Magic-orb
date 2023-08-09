import Image from "next/image";

const Account = () => {
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="py-2 px-4 rounded-xl
        shadow-[10px_10px_8px_10px_#00000024]">
          <p className="text-center text-[#DBCBF4] text-2xl font-semibold">
            Daily tasks
          </p>
          <ul className="mt-4">
            {[1, 2, 3].map((taskItem) => (
              <li
                key={taskItem}
                className="bg-gradient-to-r from-[#523843] to-[#634b56] px-4 py-2 text-[#E5BD9D] text-xs rounded-lg mb-2">
                Talk with the orb 2 hours:
                <span className="text-[#DBCBF4] text-[10px] tracking-wider ml-0.5">
                  3min/2hours
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex flex-col items-center justify-between rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024]">
          <p className="text-[#E5BD9D] text-xs font-semibold text-center">
            Redeem your gift card
          </p>
          <Image
            src="https://i.ibb.co/GCDyhJw/Default-cosmic-pink-gift-card-0-3507d5d2-e214-4bf6-b126-ff41039a25cf-0-1.png"
            alt="gift card"
            width={108}
            height={148}
          />
          <button className="mx-auto text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
            Take the card
          </button>
        </div>
        <div className="default-gradient grid grid-cols-2 items-center gap-4 p-4  shadow-[10px_10px_8px_10px_#00000024] rounded-xl ">
          <div className="flex flex-col items-center justify-center border-r-2">
            <Image
              src="https://i.ibb.co/VJM51Tn/profile-modified-2.png"
              width={147}
              height={147}
              alt="profile icon"
            />
            <p className="text-[#E5BD9D] font-semibold text-sm">Bulbul Ahmed</p>
            <p className="text-[#DBCBF4] font-semibold text-sm">
              #bulbulahmed10
            </p>
            <div className="flex items-center gap-2">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
                Share profile
              </button>
              <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
                Edit profile
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="https://i.ibb.co/D1Jt9gY/wallet-modified-1.png"
                alt="wallet icon"
                width={32}
                height={32}
              />
              <p className="text-[#DBCBF4] text-sm font-semibold">
                Ballance: 52$
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="https://i.ibb.co/6Xz12Lp/subscription-modified-1.png"
                alt="wallet icon"
                width={32}
                height={32}
              />
              <p className="text-[#DBCBF4] text-sm font-semibold">
                No coupons left
              </p>
            </div>
          </div>
        </div>
        <div>
          kdjf
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Account;
