import Personality from "@/components/pages/account/activity&Personality/Personality";
import DailyTask from "@/components/pages/account/dailyTask/DailyTask";
import Profile from "@/components/pages/account/profile/Profile";
import Statistics from "@/components/pages/account/statistics/Statistics";
import Subscriptions from "@/components/pages/account/subscriptions/Subscriptions";
import GiftCard from "@/components/shared/giftCard/GiftCard";

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


const Account = () => {
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-full w-full flex items-center min-h-[calc(100vh-100px)]">
      <div className="lg:grid grid-cols-1 lg:grid-cols-6 lg:gap-x-[18px] xl:gap-x-[28px] w-full gap-y-10 lg:gap-y-[23px] h-fit">
        <div className="w-full lg:col-start-1 lg:col-end-5 lg:h-[257px] flex gap-x-2 md:gap-x-3 lg:gap-x-[18px] xl:gap-x-[28px]">
          <DailyTask></DailyTask>
          <GiftCard></GiftCard>
          <span className="hidden md:inline-block h-full"><Profile></Profile></span>
        </div>
        <div className="md:hidden mt-4">
          <Profile></Profile>
        </div>
        <div className=" w-full lg:h-[257px] lg:col-start-5 lg:col-end-7 mt-5 lg:mt-0">
          <Subscriptions subscriptionModel={subscriptionModel}></Subscriptions>
        </div>
        <div className=" w-full  lg:col-start-1 lg:col-end-5 lg:h-[257px] flex lg:gap-x-[18px] xl:gap-x-[28px] mt-5 lg:mt-0">
          <Personality></Personality>
          <div className="account-box-gradient default-shadow hidden md:flex items-center justify-between rounded-2xl grow-0 lg:w-[44%]"></div>
        </div>
        <div className=" w-full lg:col-start-5 lg:col-end-7 lg:h-[257px] mt-5 lg:mt-0">
          <Statistics></Statistics>
        </div>
      </div>
    </div>
  );
};

export default Account;
