import DreamsFeed from '@/components/pages/dreams-feed/DreamsFeed';
import SecureRoute from '@/utls/SecureRoute';

const page = () => {
    return (
        <SecureRoute>
            <div className='font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-100px)] h-full bg-[#3A284C] relative w-full  rounded-[15px] default-shadow '>
                <DreamsFeed></DreamsFeed>
            </div>
        </SecureRoute>
    );
};

export default page;