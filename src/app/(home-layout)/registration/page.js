import RegistrationForm from "@/components/pages/registration/RegistrationForm";
import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";
const Registration = () => {
  return (
    <PageWrapper>
      <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)] flex items-center w-full">
        <div className="account-box-gradient max-w-[450px] h-fit mx-auto p-5 md:px-10 md:pb-4 rounded-xl md:py-6  w-full">
          <div className="flex flex-col justify-center ">
            <p className="text-[#E5BD9D] font-semibold text-[28px] text-center">
              Sign up
            </p>
            <hr className="border-2 border-[#dbcbf4cb] mt-2" />
            <p className="text-center text-[#DBCBF4] text-[10px] mt-1">
              Get one account to access all features
            </p>
            <RegistrationForm/>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Registration;
