import SolarSystemTwo from '@/components/pages/planet-positioning/solarSystemTwo/SolarSystemTwo';
import SecureRoute from '@/utls/SecureRoute';
import React from 'react';

const PlanetPositioningTwoPage = () => {
    return (
        <SecureRoute>
            <div className='font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-100px)] h-full relative w-full bg-[#030303] rounded-[15px] default-shadow '>
                <SolarSystemTwo></SolarSystemTwo>
            </div>
        </SecureRoute>
    );
};

export default PlanetPositioningTwoPage;