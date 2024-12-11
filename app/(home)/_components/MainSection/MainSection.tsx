import React from 'react';
import ProductSection from '../ProductSection/ProductSection';

const MainSection = () => {
    return (
        <>
        <div className='flex gap-12 w-full px-16'>
            <div className='w-1/2 border border-success'>

            </div>
            <div className='w-1/2 border border-success'>
                <ProductSection/>
               
            </div>
        </div>
            
        </>
    );
};

export default MainSection;