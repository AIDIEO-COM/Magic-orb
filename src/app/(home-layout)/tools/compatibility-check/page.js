import CompatibilityCheck from "@/components/pages/compatibilityCheck/CompatibilityCheck";

const page = () => {
    return (
        <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)] lg:h-[calc(100vh-60px)]">
            <CompatibilityCheck></CompatibilityCheck>
        </div>
    );
};

export default page;