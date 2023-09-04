import CompatibilityCheck from "@/components/pages/compatibilityCheck/CompatibilityCheck";
import SecureRoute from "@/utls/SecureRoute";

const page = () => {
  return (
    <SecureRoute>
      <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-115px)] lg:h-[calc(100vh-115px)]">
        <CompatibilityCheck></CompatibilityCheck>
      </div>
    </SecureRoute>
  );
};

export default page;
