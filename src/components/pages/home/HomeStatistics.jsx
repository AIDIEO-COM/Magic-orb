import AccountBtnFill from '@/components/shared/btn/accountPageBtn/accountBtnFill/AccountBtnFill';
import AccountBtnOutline from '@/components/shared/btn/accountPageBtn/accountBtnOutline/AccountBtnOutline';
import Image from 'next/image';

const HomeStatistics = () => {
    return (
        <div className="default-gradient rounded-[16px] flex flex-col w-full justify-between gap-y-2 p-4 h-full">
        <div className="flex flex-col">
          <p className="text-[#E5BD9D] font-bold text-2xl text-center">
            Statistics
          </p>
          <span className="text-[#DBCBF4] text-[10px] tracking-wider text-center">
            You have Improved a lot in skills last me
          </span>
        </div>
        <div className="flex items-center justify-between text-[#E5BD9D] text-sm mt-2">
          <p>15%</p>
          <p>90%</p>
        </div>
        <Image
          src="https://i.ibb.co/7jMKcMS/Screenshot-2023-08-10-131125-removebg-preview.png"
          alt="statistics"
          width={500}
          height={200}
          priority
          className="w-full h-full mx-auto"
        />
        <div className="flex flex-col gap-y-1 items-center justify-between text-[#E5BD9D] text-[10px]">
          <p>Extrovert: 35% up</p>
          <p>Exposure: 5% down</p>
          <p>Self care: 23% up</p>
        </div>
        <div className="flex items-center full mx-auto mt-2 gap-2">
          <AccountBtnFill>See full stats</AccountBtnFill>
          <AccountBtnOutline>Improve statistic</AccountBtnOutline>
        </div>
      </div>
);
};

export default HomeStatistics;