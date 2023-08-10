import AstrologyTable from "@/components/pages/astrology-table/AstrologyTable";


const page = () => {
    return (
        <div className="font-berlin p-3 md:p-4 lg:p-0 lg:min-h-[calc(100vh-60px)] relative">
            <AstrologyTable></AstrologyTable>
        </div>
    );
};

export default page;