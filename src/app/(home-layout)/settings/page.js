import EditInfoForm from "@/components/pages/settings/editInfoForm/EditInfoForm";
import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";
import SecureRoute from "@/utls/SecureRoute";

const Settings = () => {
  return (
    <SecureRoute>
      <PageWrapper>
        <div className="font-sans p-3 md:p-4 lg:p-0 py-10 md:py-0 min-h-[calc(100vh-100px)]  flex items-center justify-center">
          <EditInfoForm></EditInfoForm>
        </div>
      </PageWrapper>
    </SecureRoute>
  );
};

export default Settings;
