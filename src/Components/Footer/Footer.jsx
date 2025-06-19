"use Client";
import React from 'react'
import DotGrid from '../WhyChoose/DotGridBackground';
import Lanyard from './Lanyard';

const Footer = () => {
    return (
        <div className='min-h-screen bg-[#F0EBE3] w-full'>
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

            <div className='w-full h-full inset-0 absolute z-0'>
                <DotGrid
                    dotSize={2.5}
                    gap={26}
                    baseColor="#eea21580"
                    activeColor="#9D00FF"
                    proximity={150}
                    shockRadius={300}
                    shockStrength={7}
                    resistance={800}
                    returnDuration={1.5}
                />
            </div>
        </div>
    )
}

export default Footer
