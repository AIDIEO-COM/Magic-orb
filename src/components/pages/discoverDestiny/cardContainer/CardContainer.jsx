import Image from 'next/image';
import React from 'react';

const CardContainer = ({selectRandomCards, genarateCards, setCard}) => {
    return (
        <div className={`w-[85%] sm:w-[60%] md:w-[27%] xl:w-[25%]  h-[500px] rounded-[50px] p-4  text-[#FFC8AA] lg:flex flex-col  bg-opacity-60 ${selectRandomCards && 'md:hidden'}`}>
          <h1 className="text-base lg:text-2xl font-berlin text-center pb-4">
            Cards
          </h1>
          <div className="grid grid-cols-3 gap-y-3 gap-x-3">
            {genarateCards.map((index) => (
              <button key={index} onClick={()=> setCard(0)}>
              <Image
                
                src={"https://i.ibb.co/tBs7rDd/images-4.png"}
                alt="elipsis"
                width={200}
                height={200}
                className="w-full h-full"
              ></Image>
              </button>
            ))}
          </div>
        </div>
    );
};

export default CardContainer;