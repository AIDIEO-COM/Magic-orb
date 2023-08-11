import Image from "next/image";

const subscriptionModel = [
  {
    id: "1",
    subscriptionType: "Add Free",
    price: 4.59,
    subscriptionBenefit: "Remove all adds Statistics",
  },
  {
    id: "2",
    subscriptionType: "Entry",
    price: 9.99,
    subscriptionBenefit:
      "Remove all adds Statistics & access to all tools advanced statistics",
  },
  {
    id: "3",
    subscriptionType: "Premium",
    price: 13.29,
    subscriptionBenefit:
      "Remove all adds Statistics & access to all tools advanced statistics. No additional fees download resources personality statistics improvement tips",
  },
];

const stats = [
  { id: "1", stats_color: "#7ECCF8", stats_time: 8, total_time: 3.6 },
  { id: "2", stats_color: "#F8693C", stats_time: 8, total_time: 3.6 },
  { id: "3", stats_color: "#9DF87E", stats_time: 8, total_time: 3.6 },
  { id: "4", stats_color: "#DBCBF4", stats_time: 8, total_time: 3.6 },
];

const Account = () => {
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)] ">
      <div className="flex gap-4">
        <div
          className="w-[280px] p-2 rounded-xl
        shadow-[10px_10px_8px_10px_#00000024] ">
          <p className="text-center text-[#DBCBF4] text-2xl font-semibold">
            Daily tasks
          </p>
          <ul className="mt-4">
            {[1, 2, 3].map((taskItem) => (
              <li
                key={taskItem}
                className="bg-gradient-to-r from-[#523843] to-[#634b56] px-4 py-2 text-[#E5BD9D] text-xs rounded-lg mb-2 w-fit mx-auto">
                Talk with the orb 2 hours:
                <span className="text-[#DBCBF4] text-[10px] tracking-wider ml-0.5">
                  3min/2hours
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex flex-col w-36 items-center justify-between rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024]">
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
        <div className="default-gradient grid grid-cols-2 items-center gap-4 p-4  shadow-[10px_10px_8px_10px_#00000024] rounded-xl w-[400px]">
          <div className="flex flex-col items-center justify-center border-r-2">
            <Image
              src="https://i.ibb.co/VJM51Tn/profile-modified-2.png"
              width={120}
              height={120}
              alt="profile icon"
            />
            <p className="text-[#E5BD9D] font-semibold text-sm">Bulbul Ahmed</p>
            <p className="text-[#DBCBF4] font-semibold text-sm">
              #bulbulahmed10
            </p>
            <div className="flex items-center mt-1">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-1 font-semibold rounded-lg py-1">
                Share profile
              </button>
              <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
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
            <p className="btn text-[#472F46] text-[10px] bg-[#BEB4CE] font-semibold rounded-md px-2 py-1 w-fit mx-auto cursor-pointer">
              Manage founds
            </p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024] w-[450px]">
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
      <div className="flex gap-2 mt-8">
        <div className="flex items-center gap-2 justify-between px-4 rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024] grow w-[50%]">
          <div className="flex flex-col items-center w-[40%]">
            <Image
              src="https://i.ibb.co/wNkY8bD/Screenshot-2023-08-10-112323-removebg-preview.png"
              alt="statistics"
              width={200}
              height={180}
            />
            {stats.map((singleStats) => (
              <div
                key={singleStats.id}
                className="flex items-center gap-4 mb-2">
                <p className={`w-4 h-4 bg-[#DBCBF4] rounded-full`}></p>
                {/* TODO: Stats color not working */}
                <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                  Today: {singleStats.stats_time}min
                </span>
                <span className="text-[#DBCBF4] text-[10px] tracking-wider">
                  Total: {singleStats.total_time}h
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-y-3 w-[60%]">
            <div className="flex flex-col">
              <p className="text-[#E5BD9D] font-bold text-2xl">Personality</p>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center">
                IFTP Personality
              </span>
            </div>
            <p className="text-[#E5BD9D] text-[9px] text-center">
              Your personality is based on the emotions and trauma from the
              past. The best way to free the real you is by talking with a
              qualified person
            </p>
            <div className="flex items-center mt-1 ">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
                Free yourself
              </button>
              <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
                See full stats
              </button>
            </div>
          </div>
        </div>
        <div className="default-gradient flex items-center justify-between px-4 rounded-xl grow-0 w-[15%]"></div>
        <div className="flex items-center justify-between px-4 rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024] grow w-[33%]">
          <div className="flex flex-col justify-between gap-y-2 p-4">
            <div className="flex flex-col">
              <p className="text-[#E5BD9D] font-bold text-2xl text-center">
                Statistics
              </p>
              <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center">
                You have Improved a lot in skills last me
              </span>
            </div>
            <div className="flex items-center justify-between text-[#E5BD9D] text-sm">
              <p>15%</p>
              <p>90%</p>
            </div>
            <Image
              src="https://i.ibb.co/7jMKcMS/Screenshot-2023-08-10-131125-removebg-preview.png"
              alt="statistics"
              width={390}
              height={136}
            />
            <div className="flex items-center justify-between text-[#E5BD9D] text-[10px]">
              <p>Extrovert: 35% up</p>
              <p>Exposure: 5% down</p>
              <p>Self care: 23% up</p>
            </div>
            <div className="flex items-center full mx-auto mt-2 gap-4">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
                See full stats
              </button>
              <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
                Improve statistics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
