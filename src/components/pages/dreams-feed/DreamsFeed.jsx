import React from 'react';
import SymbolsFilter from './symbols-filter/SymbolsFilter';
import SortAndFilter from './sortAndFilter/SortAndFilter';
import FeedOfDreams from './feed/FeedOfDreams';

const genarateIcon = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];

const DreamsFeed = () => {
    return (
        <div className='flex items-center w-full h-full lg:p-7 2xl:p-10 relative'>
            {/* title */}
            <div className='flex justify-center w-full absolute top-4 left-0 '>
                <p className='text-[#FFC8AA] text-xl md:text-2xl lg:text-[35px] '>Dreams feed</p>
            </div>
            {/* filtering and symbols */}
            <div className='w-full h-full flex flex-col md:flex-row mt-20 md:mt-0 items-center  md:justify-between'>
                <SymbolsFilter genarateIcon={genarateIcon}></SymbolsFilter>
                <div className='pt-10 grow px-[3.5%] h-full order-3 md:order-2'>
                    <FeedOfDreams></FeedOfDreams>
                </div>
                <SortAndFilter></SortAndFilter>
            </div>
        </div>
    );
};

export default DreamsFeed;