"use Client";
import React from 'react'
import DotGrid from '../WhyChoose/DotGridBackground';
import Lanyard from './Lanyard';

const Footer = () => {
    return (
        <div className='min-h-screen bg-[#fff] w-full relative select-none'>

            {/* <div className='z-50 absolute top-0 right-[25vw]'>
                <Lanyard position={[0, 0, 35]} gravity={[0, -40, 0]} />
            </div> */}

            <div className='z-50 absolute bottom-[20vh] leading-0 w-full'>
                <h1 className='text-black text-[25vw] z-50 font-bold text-center'>GitFund</h1>
            </div>
        </div>
    )
}

export default Footer
