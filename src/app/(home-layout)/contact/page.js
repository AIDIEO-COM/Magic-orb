import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)] h-full flex flex-col justify-center lg:justify-start">
        <div className="max-w-[550px] h-fit mx-auto px-5 md:px-10 pb-4 rounded-xl bg-[#221c3de0] shadow-[10px_10px_8px_10px_#00000024] py-4  sm:py-6 sm:translate-y-1/3">
          <div className="flex flex-col justify-center  ">
            <p className="text-[#DBCBF4] font-semibold text-lg sm:text-3xl text-center">
              Contact us
            </p>
            <form className="mt-1">
              <div className="flex flex-col mb-2.5">
                <label
                  htmlFor="email"
                  className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                  Email Address:
                </label>
                <input
                  type="text"
                  placeholder="email@server.com"
                  className="bg-[#674B53] h-6  px-3 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
                />
              </div>
              <div className="flex flex-col mb-2.5">
                <label
                  htmlFor="message"
                  className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                  Message:
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  placeholder="message"
                  className="bg-[#674B53] px-3 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D] resize-none"
                />
              </div>
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-4 font-semibold rounded-lg py-1">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
