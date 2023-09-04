import AstrologyTable from "@/components/pages/astrology-table/AstrologyTable";
import SecureRoute from "@/utls/SecureRoute";


const page = () => {
    return (
        <SecureRoute>
            <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-100px)] h-full relative">
                <AstrologyTable></AstrologyTable>
            </div>
        </SecureRoute>
    );
};

export default page;