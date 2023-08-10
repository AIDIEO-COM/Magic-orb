const Settings = () => {
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)]">
      <div className="default-gradient max-w-[550px] h-fit rounded-2xl mx-auto px-10 pb-4">
        <div className="flex flex-col justify-center">
          <p className="text-[#E5BD9D] font-semibold text-[28px] text-center">
            Settings
          </p>
          <hr className="border w-full border-[#DBCBF4] mb-0.5 mx-auto" />
          <p className="text-[10px] text-[#DBCBF4] tracking-wider text-center">
            Make sure you have the best environment
          </p>
          <p className="text-[#E5BD9D] text-sm font-semibold mt-2">Account:</p>
          <form className="mt-2">
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="username"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Username:
              </label>
              <input
                type="text"
                placeholder="Username"
                className="bg-[#674B53] h-6 px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="email"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Email:
              </label>
              <input
                type="text"
                placeholder="Email"
                className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="phone"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Phone:
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  className="w-4 h-4 rounded-full border-[#E5BD9D] "
                />
                <p className="text-[#DBCBF4] text-sm">
                  Keep logged in to devices
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="w-4 h-4 rounded-full border-[#E5BD9D]"
                />
                <p className="text-[#DBCBF4] text-sm">
                  Subscribe to newsletter
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-8 font-semibold rounded-lg py-1">
                Save
              </button>
              <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
                Change password
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#E5BD9D] text-sm font-semibold mt-2">
            Personal Info:
          </p>
          <form className="mt-1">
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="firstName"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                First Name:
              </label>
              <input
                type="text"
                placeholder="Alex"
                className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="secondName"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Second Name:
              </label>
              <input
                type="text"
                placeholder="Drelciuc"
                className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="countryName"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Country:
              </label>
              <input
                type="text"
                placeholder="USA"
                className="bg-[#674B53] h-6  px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div className="flex flex-col mb-2.5">
              <label
                htmlFor="dateOfBirth"
                className="text-[#E5BD9D] mb-1 text-[12px] tracking-wide">
                Date of birth:
              </label>
              <input
                type="text"
                placeholder="10.6.03"
                className="bg-[#674B53] h-6 px-2 rounded-2xl text-[#E5BD9D] tracking-wide outline-none placeholder-[#E5BD9D]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  className="w-4 h-4 rounded-full border-[#E5BD9D] "
                />
                <p className="text-[#DBCBF4] text-sm">
                  Keep logged in to devices
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="w-4 h-4 rounded-full border-[#E5BD9D]"
                />
                <p className="text-[#DBCBF4] text-sm">
                  Subscribe to newsletter
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-8 font-semibold rounded-lg py-1">
                Save
              </button>
              <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 underline">
                Exit without saving
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
