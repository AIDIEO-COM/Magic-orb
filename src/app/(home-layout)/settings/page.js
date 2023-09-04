import AccountForm from "@/components/pages/settings/accountForm/AccountForm";
import PersonalInfoForm from "@/components/pages/settings/personalInfoForm/PersonalInfoForm";
import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";
import SecureRoute from "@/utls/SecureRoute";

const Settings = () => {
  return (
    <SecureRoute>
      <PageWrapper>
        <div className="font-berlin p-3 md:p-4 lg:p-0  py-10 md:py-5">
          <div className="default-gradient max-w-[550px] h-fit rounded-2xl mx-auto px-5 md:px-10 pb-4 ">
            <div className="flex flex-col justify-center py-2 md:py-3">
              <p className="text-[#E5BD9D] font-semibold text-lg sm:text-[28px] text-center pt-2 pb-2 tracking-wide">
                Settings
              </p>
              <hr className="border w-full border-[#DBCBF4] mb-0.5 mx-auto" />
              <p className="text-[10px] text-[#DBCBF4] tracking-wider text-center pt-[2px]">
                Make sure you have the best environment
              </p>
              <p className="text-[#E5BD9D] text-sm font-semibold mt-2">
                Account:
              </p>
              <AccountForm></AccountForm>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#E5BD9D] text-sm font-semibold mt-2">
                Personal Info:
              </p>
              <PersonalInfoForm></PersonalInfoForm>
            </div>
          </div>
        </div>
      </PageWrapper>
    </SecureRoute>
  );
};

export default Settings;
