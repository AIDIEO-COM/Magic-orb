import DreamInterpretation from "@/components/pages/dream-interpretation/DreamInterpretation";
import SecureRoute from "@/utls/SecureRoute";

const page = () => {
  return (
    <SecureRoute>
      <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-115px)] lg:h-[calc(100vh-115px)]">
        <DreamInterpretation></DreamInterpretation>
      </div>
    </SecureRoute>
  );
};

export default page;
