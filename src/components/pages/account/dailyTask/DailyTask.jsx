import React from 'react';

const DailyTask = () => {
    return (
        <div
          className="default-shadow grow px-2 lg:px-[17px] xl:px-[25px] py-[17px] rounded-xl
         bg-[#20192A]">
          <p className="text-center text-[#DBCBF4] text-xl md:text-2xl font-semibold font-sans">
            Daily tasks
          </p>
          <ul className="mt-4 w-full">
            {[1, 2, 3].map((taskItem) => (
              <li
                key={taskItem}
                className=" px-2 h-[48px] xl:px-[34px] flex items-center justify-center text-[#E5BD9D] text-[10px] sm:text-xs rounded-full mb-2 mx-auto w-full account-box-gradient account-box-shadow">
                Talk with the orb 2 hours:
                <span className="text-[#DBCBF4] text-[8px] sm:text-[10px] tracking-wider ml-1">
                  3min/2hours
                </span>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default DailyTask;