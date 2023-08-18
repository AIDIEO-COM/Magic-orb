import AstrologyTable from "@/components/pages/astrology-table/AstrologyTable";


const page = () => {
    return (
        <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-115px)] h-full relative">
            <AstrologyTable></AstrologyTable>
        </div>
    );
};

export default page;