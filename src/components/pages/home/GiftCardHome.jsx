import Image from 'next/image';
const GiftCardHome = () => {
    return (
        <div className="col-start-4 col-end-5 mt-2 justify-items-center hidden lg:inline-block">
          <div className="p-5 mt-4 mx-auto  flex flex-col xl:w-40 xl:h-[180px] 2xl:w-44 2xl:h-[250px] items-center justify-between rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px10px#00000024] default-shadow">
            <p className="text-[#E5BD9D] text-xs font-semibold text-center">
              Redeem your gift card
            </p>
            <Image
              src="https://i.ibb.co/GCDyhJw/Default-cosmic-pink-gift-card-0-3507d5d2-e214-4bf6-b126-ff41039a25cf-0-1.png"
              alt="gift card"
              width={108}
              height={148}
              className="lg:w-[70px] lg:h-[100px] xl:w-[80px] xl:h-[105px] 2xl:w-[108px] 2xl:h-[148px]"
            />
            <button className="mx-auto text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
              Take the card
            </button>
          </div>
        </div>
    );
};

export default GiftCardHome;
