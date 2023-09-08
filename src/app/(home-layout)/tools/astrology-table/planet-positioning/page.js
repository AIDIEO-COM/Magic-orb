import PlanetPositioning from '@/components/pages/planet-positioning/PlanetPositioning';
import SecureRoute from '@/utls/SecureRoute';
import React from 'react';

const PlanetPositioningPage = () => {
    return (
        <SecureRoute>
            <div className='font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-100px)] h-full relative w-full'>
                <PlanetPositioning></PlanetPositioning>
            </div>
        </SecureRoute>
    );
};

export default PlanetPositioningPage;