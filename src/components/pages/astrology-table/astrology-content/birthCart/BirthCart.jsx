"use client"
import { motion } from 'framer-motion';

const BirthCart = ({isBirthCartOpen, setIsBirthChartOpen, birthCartAnimate}) => {
    
    return (
        <>
            {isBirthCartOpen && (
          <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} transition={{duration: 0.5}} className={`bg-[#1A1725] h-full w-[295px] rounded-[50px] duration-700 ${birthCartAnimate}`}>
            <p className="text-center bg-[#0D0F1E] text-2xl text-[#DBCBF4] py-4 rounded-t-[50px]">
              Birth chart
            </p>
            <div className="p-2 grid grid-cols-4 justify-items-center gap-y-1.5">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24,
              ].map((chartItem) => (
                <p
                  key={chartItem}
                  className="bg-[#050507] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-xl"></p>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-1 md:mt-2 py-2 md:py-0">
              <button className="outline-none w-fit px-3 text-[#442143] h-6 md:h-7 bg-[#BFB1D6] rounded-md flex items-center justify-center">
                Share result
              </button>
              <button
                onClick={() => setIsBirthChartOpen(false)}
                className="outline-none w-fit px-3 text-[#624652] h-6 md:h-7  rounded-md flex items-center justify-center underline">
                new chart
              </button>
            </div>
          </motion.div>
        )}
        </>
    );
};

export default BirthCart;