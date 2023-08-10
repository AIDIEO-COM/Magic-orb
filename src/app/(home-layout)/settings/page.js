const Settings = () => {
  return (
    <div className="font-berlin p-3 md:p-4 lg:p-0 h-[calc(100vh-60px)] flex flex-col items-center justify-center border max-w-[456px] mx-auto">
      <p className="text-[#E5BD9D] font-semibold text-[28px]">Settings</p>
      <hr className="border  w-[80%] border-[#DBCBF4] my-2" />
      <p className="text-[10px] text-[#DBCBF4] tracking-wider">
        Make sure you have the best environment
      </p>
      <p>Account</p>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" />
        </div>
      </form>
    </div>
  );
};

export default Settings;
