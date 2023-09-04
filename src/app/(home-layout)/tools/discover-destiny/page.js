import DiscoverDestiny from "@/components/pages/discoverDestiny/DiscoverDestiny";
import SecureRoute from "@/utls/SecureRoute";

const page = () => {
  return (
    <SecureRoute>
      <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)] ">
        <DiscoverDestiny></DiscoverDestiny>
      </div>
    </SecureRoute>
  );
};

export default page;
