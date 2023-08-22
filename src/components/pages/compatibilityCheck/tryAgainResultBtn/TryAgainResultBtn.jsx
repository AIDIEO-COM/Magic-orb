"use client"
const TryAgainResultBtn = ({isCheckSoulmatesClicked, tryAgainBtnToggle}) => {
    return (
        <>
        {isCheckSoulmatesClicked && (
            <div className="flex gap-4 w-full justify-center">
              <button
                className={`bg-[#674B53] text-[#E5BD9D] px-[11px] py-1 rounded-3xl text-sm duration-700 `}
              >
                Share result
              </button>
              <button
                onClick={tryAgainBtnToggle}
                className="text-[#E5BD9D] text-[14px]  px-1 py-0.5 md:px-2 md:py-1 underline"
              >
                Try again
              </button>
            </div>
          )}
        </>
    );
};

export default TryAgainResultBtn;